$(function(){

    var app = powerrr;
    app.init(function () {
        // callback function that runs when init finishes
        $("#cars_list").tablesorter({ sortList: [[6,1]] });

        // update charts once on init (after initial load of vehicles)
        updateCharts(app.vehicles());
        // update charts/whatever everytime the vehicles array gets modified
        app.vehicles.subscribe(function (data) {
            updateCharts(data);
            $("#cars_list").trigger("update");
        });

        app.addNewVehicle({make: "Honda", model: "Civic", year: 2012});
    });

    function updateCharts (data) {
        var hData1 = _.map(data, function (vehicle) {
            return { name: vehicle.model, y: parseFloat(vehicle.performancevalue)};
        }).sort(function(a,b) {
            return a.y - b.y;
        });
        $("#container").highcharts().series[0].setData(hData1);

        var hData2 = _.map(data, function (vehicle) {
            return { name: vehicle.model, x: parseInt(vehicle.hp, 10), y: parseInt(vehicle.weight, 10) };
        }).sort(function(a,b) {
            return a.x - b.x;
        });
        $("#hp_weight").highcharts().series[0].setData(hData2);
    }

    $("#container").highcharts({
        chart: {
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
        series: [{
            name: "Value (Horsepower per US ton per $1k"
        }]
    });

    $("#hp_weight").highcharts({
        chart: {
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
            name: "Power to Weight"
        }]
    });

});