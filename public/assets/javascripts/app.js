(function () { 
    "use strict";

    var driveTypeMultiplier = {
            "RWD":.9,
            "AWD":.85,
            "FWD":1
        },
        charts = {},
        cars,        
        carValue,
        carHpWeight;        

    cars = [{
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
    }];

    cars = _.map(cars, function (car, key, list) {
        car.hpperton = Math.round(car.hp / (car.weight/2000));
        if(!car.drivetype) { car.drivetype = "FWD"; }
        car.zerotosixty = Math.round((Math.pow(car.weight / car.hp * driveTypeMultiplier[car.drivetype], .75)) * 1000) / 1000;
        car.ratio = Math.round((car.hp / car.weight)*1000)/1000;
        car.performancevalue = Math.round((car.hpperton / (car.price/1000))*10)/10;
        return car;
    });

    carValue = _.map(cars, function (car) {
        return { name: car.model, y: parseFloat(car.performancevalue)};
    }).sort(function(a,b) {
        return a.y - b.y;
    });

    carHpWeight = _.map(cars, function (car) {
        return { name: car.model, x: parseInt(car.hp), y: parseInt(car.weight) };
    }).sort(function(a,b) {
        return a.x - b.x;
    });

    $(function(){

        var parameters = {
            cmd:"getTrims", 
            min_year:"2009",
            sold_in_us: 1,
            body: "Hatchback",
            doors: 5,
            keyword: "Automatic",
            min_torque: 200
        }

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
                data: carValue
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
                data: carHpWeight
            }]
        });

        ko.applyBindings({cars: cars});

        $( "#cars_list" ).tablesorter({ sortList: [[5,1]] });

    });

})();