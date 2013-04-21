var powerrr = (function (viewModel) {

    "use strict";

    var edmunds = new EDMUNDSAPI.Vehicle('vvkfrmvw29edq9a4zdyprc9h');

    /* TODO:
        - pull vehiclesList from CouchDB
        - convert Edmunds drivetype for use in vehiclePower
        - filter the list of vehicles by drive type, >=hp, etc.
        - search possible vehicles by YMMM: 
            - match user text to make and model from DB/Edmunds
            - let user select from possible years
            - let user select trim
            - if pulling from Edmunds, save to DB
        - remove CodeIgniter
        - create REST API using Node.js, Express.js, CouchDB + nano
    */

    //--getAllMakes,        // return an object of all makes (CouchDB--possibly extend with Edmunds API to fill in missing makes)
    //--getModelsByMake,    // return all models by make (CouchDB--possibly extend with Edmunds API to fill in missing models)
    //--getStylesByModel,   // return all styles (trim) by model (CouchDB, extend with Edmunds API)
    //--saveVehicle,        // save a vehicle to CouchDB (including all requested YMMM+style+engine+etc. JSON)
    //getVehicle,           // public function that finds a vehicle by YMMM; looks in DB first, then pulls from Edmunds API
    //addVehicle,           // public function that adds a vehicle to the view model after parsing it
    //simplifyVehicle,      // public function that flattens out the vehicle objects returned from Edmunds API
    //--addNewVehicle;      // public function that calls getVehicle, simplifyVehicle, then addVehicle in order

    // get vehicles list
    function getAllVehicles () {
        return $.ajax({ url:"public/assets/javascripts/sampledata.json" });
    }

    // horsepower per US ton
    function hpPerTon (hp, weight) {
        return Math.round(hp / (weight/2000));
    }

    // guestimate 0-60mph based on weight, horsepower, and a modifier for drivetype
    function zeroToSixty (hp, weight, drivetype) {
        var driveTypeMultiplier = {
                RWD: 0.9,
                AWD: 0.85,
                FWD: 1
            };
        return Math.round((Math.pow(weight / hp * driveTypeMultiplier[drivetype], 0.75)) * 1000) / 1000;
    }

    // power to weight ratio
    function powerToWeight (hp, weight) {
        return Math.round((hp / weight)*1000)/1000;
    }

    // performance value for the price
    function performanceValue (hpperton, price) {
        return Math.round((hpperton / (price/1000))*10)/10;
    }

    function getVehiclePowerStats (vehicle) {
        if(!vehicle.drivetype) { vehicle.drivetype = "FWD"; }
        vehicle.hpperton = hpPerTon(vehicle.hp, vehicle.weight);
        vehicle.zerotosixty = zeroToSixty(vehicle.hp, vehicle.weight, vehicle.drivetype);
        vehicle.ratio = powerToWeight(vehicle.hp, vehicle.weight);
        vehicle.performancevalue = performanceValue(vehicle.hpperton, vehicle.price);
        return vehicle;
    }

    function checkInArray (list, match) {
        return _.findWhere(viewModel, match);
    }
    function getVehicle (options) {
        var vehicle,
            deferred = $.Deferred();

        //if(vehicle in DB) {
            //vehicle = CouchDBJSON;
            //deferred.resolve(vehicle)

        //} else {
            //if no vehicle, pull from Edmunds
            //assume make, model, year at least
            //if modelyearid, or styleid, use those            
            edmunds.getStylesByMakeModelYear(options.make, options.model, options.year).then(function (data) {
                vehicle = data.styleHolder[0];
                // use modelyearid to get engine specs
                edmunds.getEquipmentByTypeAndModelYearId("ENGINE", vehicle.modelYearId).then(function (data) {
                    $.extend(vehicle, { engine: data.equipmentHolder[0] });
                    console.log(vehicle);
                    //save to DB
                    deferred.resolve(vehicle);
                });
            });

        //}

        return deferred.promise();
    }

    function simplifyVehicle (vehicle) {
        return {
            make: vehicle.makeName,
            model: vehicle.modelName,
            year: vehicle.year,
            weight: vehicle.attributeGroups.SPECIFICATIONS.attributes.CURB_WEIGHT.value,
            price: (vehicle.publicationState === "USED") ? vehicle.price.usedTmvRetail : vehicle.price.tmv,
            drivetype: 'RWD',//vehicle.attributeGroups.DRIVE_TYPE.attributes.DRIVEN_WHEELS.value,
            hp: vehicle.engine.attributeGroups.ENGINE.attributes.HORSEPOWER.value
        };
    }


    // public functions
    viewModel.init = function (callback) {
        var self = this;
        getAllVehicles().then(function (data) {
            _.each(data, function (vehicle) {
                self.vehicles.push(getVehiclePowerStats(vehicle));
            });
            if(callback) { callback(); }
        });
        ko.applyBindings(self);
    };
    viewModel.vehicles = ko.observableArray();
    viewModel.addNewVehicle = function (options) {
        var self = this,
            deferred = $.Deferred(),
            inViewModel = _.findWhere(self.vehicles(), options);

        // if the vehicle is already in the viewModel, return it instead of bothering the DB/Edmunds
        if(!_.isUndefined(inViewModel)) {
            deferred.resolve(inViewModel);
        } else {
            getVehicle(options).then(function (vehicle) {
                vehicle = simplifyVehicle(vehicle);
                vehicle = getVehiclePowerStats(vehicle);
                self.vehicles.push(vehicle);
                deferred.resolve(vehicle);
            });
        }
        return deferred.promise();
    };

    return viewModel;

})(powerrr || {});