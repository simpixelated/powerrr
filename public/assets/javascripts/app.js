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
            name: "Power to Weight",
            data: _.map(viewModel.vehicles(), function (vehicle) {
                return { name: vehicle.model, x: parseInt(vehicle.hp, 10), y: parseInt(vehicle.weight, 10) };
            }).sort(function(a,b) {
                return a.x - b.x;
            })
        }]
    });

});