var powerrr = (function () {

    "use strict";

    /* TODO:
        - QUnit tests
        - pull vehiclesList from CouchDB
        - convert Edmunds drivetype for use in vehiclePower
        - update Highcharts when viewModel is updated (maybe through ko.subscribe? or just Highcarts.update)
        - filter the list of vehicles by drive type, >=hp, etc.
        - search possible vehicles by YMMM: 
            - match user text to make and model from DB/Edmunds
            - let user select from possible years
            - let user select trim
            - if pulling from Edmunds, save to DB
    */

    var edmunds = new EDMUNDSAPI.Vehicle('vvkfrmvw29edq9a4zdyprc9h');

    var vehiclesList = [{
        'make':'Subaru',
        'model':'Imprezza WRX',
        'year':'2012',
        'hp':'265',
        'weight':'3208',
        'price':'25595',
        'drivetype' : 'AWD'
    },
    {
        'make':'Volkswagen',
        'model':'GTI',
        'year':'2012',
        'hp':'200',
        'weight':'3034',
        'price':'23995',
        'drivetype' : 'FWD'
    },
    {
        'make':'Mazda',
        'model':'Mazda2',
        'year':'2012',
        'hp':'100',
        'weight':'2306',
        'price':'14530'
        },
    {
        'make':'Mazda',
        'model':'Mazdaspeed3',
        'year':'2012',
        'hp':'263',
        'weight':'3281',
        'price':'24000'
        },

    {
        'make':'Nissan',
        'model':'370Z',
        'year':'2009',
        'hp':332,
        'weight':3232,
        'price':24524,
        'drivetype' : 'RWD'
    },
    {
        'make':'Porsche',
        'model':'911 Turbo',
        'year':'2012',
        'hp':500,
        'weight':3461,
        'price':137500,
        'drivetype' : 'RWD'
    },
    {
        'make':'Ford',
        'model':'Shelby GT500',
        'year':'2013',
        'hp':650,
        'weight':3850,
        'price':60000,
        'drivetype' : 'RWD'
    },
    {
        'make':'Mitsubishi',
        'model':'Evolution X',
        'year':'2012',
        'hp':291,
        'weight':3514,
        'price':34495,
        'drivetype' : 'AWD'
    },
    {
        'make':'Mitsubishi',
        'model':'Lancer Ralliart',
        'year':'2012',
        'hp':237,
        'weight':3461,
        'price':27995,
        'drivetype' : 'AWD'
    },
    {
        'make':'Cadillac',
        'model':'CTS-V',
        'year':'2012',
        'hp':556,
        'weight':4222,
        'price':63215,
        'drivetype' : 'RWD'
    },
    {
        'make':'Cadillac',
        'model':'CTS-V',
        'year':'2007',
        'hp':400,
        'weight':3850,
        'price':21986,
        'drivetype' : 'RWD'
    },
    {
        'make':'Fiat',
        'model':'500',
        'year':'2012',
        'hp':101,
        'weight':2363,
        'price':17500
    },
    {
        'make':'Fiat',
        'model':'500 Abarth',
        'year':'2012',
        'hp':160,
        'weight':2533,
        'price':22000
    },
    {
        'make':'Mini',
        'model':'Cooper S',
        'year':'2012',
        'hp':181,
        'weight':2668,
        'price':23100
    },
    {
        'make':'Chevy',
        'model':'Corvette Z06',
        'year':'2012',
        'hp':505,
        'weight':3175,
        'price':75600,
        'drivetype' : 'RWD'
    },
    {
        'make':'Ford',
        'model':'Mustang GT',
        'year':'2012',
        'hp':412,
        'weight':3605,
        'price':29710,
        'drivetype' : 'RWD'
    },
    {
        'make':'Ford',
        'model':'Mustang GT',
        'year':'2011',
        'hp':412,
        'weight':3605,
        'price':21122,
        'drivetype' : 'RWD'
    },
    {
        'make':'Toyota',
        'model':'Prius',
        'year':'2012',
        'hp':134,
        'weight':3042,
        'price':23015
    },
    {
        'make':'Lamborghini',
        'model':'Aventador',
        'year':'2012',
        'hp':700,
        'weight':3472,
        'price':387000,
        'drivetype' : 'AWD'
    },
    {
        'make':'Chevy',
        'model':'Cobalt SS',
        'year':'2008',
        'hp':260,
        'weight':2975,
        'price':12763,
        'drivetype' : 'FWD'
    },
    {
        'make':'Mazda',
        'model':'Mazdaspeed6',
        'year':'2006',
        'hp':274,
        'weight':3589,
        'price':13466,
        'drivetype' : 'AWD'
    },
    {
        'make':'Jeep',
        'model':'Grand Cherokee SRT-8',
        'year':'2007',
        'hp':420,
        'weight':4819,
        'price':22581,
        'drivetype' : 'AWD'
    },
    {
        'make':'Mercedes',
        'model':'E63 AMG',
        'year':'2007',
        'hp':507,
        'weight':4035,
        'price':30700,
        'drivetype' : 'RWD'
    },
    {
        'make':'Audi',
        'model':'S4 Avant',
        'year':'2007',
        'hp':340,
        'weight':3979,
        'price':23635,
        'drivetype' : 'AWD'
    },
    {
        'make':'Audi',
        'model':'RS4 Avant',
        'year':'2013',
        'hp':450,
        'weight':4200,
        'price':96000,
        'drivetype' : 'AWD'
    },
    {
        'make':'Hyundai',
        'model':'Sonata GLS',
        'year':'2006',
        'hp':235,
        'weight':3458,
        'price':6830,
        'drivetype' : 'FWD'
    },
    {
        'make':'Lexus',
        'model':'IS 350',
        'year':'2007',
        'hp':306,
        'weight':3527,
        'price':16955,
        'drivetype' : 'RWD'
    },
    {
        'make':'Mercedes',
        'model':'CL600 5.5L V12',
        'year':'2003',
        'hp':493,
        'weight':4300,
        'price':14741,
        'drivetype' : 'RWD'
    }];

    //--getAllMakes,        // return an object of all makes (CouchDB--possibly extend with Edmunds API to fill in missing makes)
    //--getModelsByMake,    // return all models by make (CouchDB--possibly extend with Edmunds API to fill in missing models)
    //--getStylesByModel,   // return all styles (trim) by model (CouchDB, extend with Edmunds API)
    //--saveVehicle,        // save a vehicle to CouchDB (including all requested YMMM+style+engine+etc. JSON)
    //getVehicle,           // public function that finds a vehicle by YMMM; looks in DB first, then pulls from Edmunds API
    //addVehicle,           // public function that adds a vehicle to the view model after parsing it
    //simplifyVehicle,      // public function that flattens out the vehicle objects returned from Edmunds API
    //--addNewVehicle;      // public function that calls getVehicle, simplifyVehicle, then addVehicle in order

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

    return {
        viewModel: {
            vehicles: ko.observableArray(_.map(vehiclesList, getVehiclePowerStats))
        },
        addNewVehicle: function (options) {
            var self = this;
            return getVehicle(options).then(function (vehicle) {
                vehicle = simplifyVehicle(vehicle);
                vehicle = getVehiclePowerStats(vehicle);
                self.viewModel.vehicles.push(vehicle);
            });
        }
    };

})();

$(function(){

    var viewModel = powerrr.viewModel;
    ko.applyBindings(viewModel);
    $("#cars_list").tablesorter({ sortList: [[6,1]] });

    // update ko viewModel and let other non-ko UI elements know
    var ajaxvehicle = powerrr.addNewVehicle({make: "Honda", model: "S2000", year: 2004});
    ajaxvehicle.then(function (vehicle) {
        $("#cars_list").trigger("update");
        //update highcharts
    });

    var charts = {};
    charts.price = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'column'
        },
        title: {
            text: 'Cost of Performance'
        },
        subtitle: {
            text: 'Source: Edmunds.com'
        },
        plotOptions: {
            line: {
                tooltip: {
                    enabled: true
                }
            }
        },
        xAxis: {
        },
        series: [{
            name: "Value (Horsepower per US ton per $1k",
            data: _.map(viewModel.vehicles(), function (vehicle) {
                return { name: vehicle.model, y: parseFloat(vehicle.performancevalue)};
            }).sort(function(a,b) {
                return a.y - b.y;
            })
        }]
    });

    charts.weight = new Highcharts.Chart({
        chart: {
            renderTo: 'hp_weight',
            type: 'scatter'
        },
        title: {
            text: 'Power to Weight'
        },
        subtitle: {
            text: 'Source: Edmunds.com'
        },
        plotOptions: {
            line: {
                tooltip: {
                    enabled: true
                }
            }
        },
        xAxis: {
            title: {
                text: "Horsepower (hp)"
            }
        },
        yAxis: {
            title: {
                text: "Weight (lbs)"
            }
        },
        tooltip: {
            formatter: function() {
                    return "<strong>"+this.point.name + ":</strong><br />" + this.x + "hp<br />" + this.y + "lbs";
            }
        },
        series: [{
            name: "Power to Weight",
            data: _.map(viewModel.vehicles(), function (vehicle) {
                return { name: vehicle.model, x: parseInt(vehicle.hp, 10), y: parseInt(vehicle.weight, 10) };
            }).sort(function(a,b) {
                return a.x - b.x;
            })
        }]
    });

});