asyncTest( "powerrr public methods", function() {
	var vehicles = powerrr.vehicles();
	var addNewVehicle = powerrr.addNewVehicle({make: "Honda", model: "S2000", year: 2004});
	ok(_.isArray(vehicles), "powerrr view model contains an array of vehicles");
	ok(addNewVehicle.promise, "addNewVehicle returns a $.promise");
	addNewVehicle.then(function() {
		var foundS2000 = _.find(vehicles, function (vehicle) { return vehicle.model === "S2000"; });
		ok(_.isObject(foundS2000), "powerrr.viewModel contains the new vehicle");
		var hp = 240;
		var weight = 2835;
		//var price = 11713;				
		//new object should have correct values for hp, price, weight, etc.
		equal(foundS2000.hpperton, Math.round(hp / (weight/2000)), "hp per ton calculated correctly");
		//if addNewVehicle is already in DB, it should not call edmunds api
		start();
	});
	
});

//mockjax:
//http://api.edmunds.com/v1/api/vehicle/stylerepository/findstylesbymakemodelyear?callback=jQuery19109901617881841958_1365111248252&make=Honda&model=S2000&year=2004&api_key=vvkfrmvw29edq9a4zdyprc9h&fmt=json&_=1365111248253