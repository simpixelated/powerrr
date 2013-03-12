<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	
    <title>Powerrr!!</title>
    
    <link rel="stylesheet" href="public/assets/stylesheets/normalize.css">
    <link rel="stylesheet" href="public/assets/stylesheets/app.css">
    <link rel="stylesheet" href="public/assets/stylesheets/theme.default.css">
    <script src="public/assets/javascripts/vendor/custom.modernizr.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="public/assets/javascripts/vendor/underscore-min.js"></script>
    <script src="http://ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1.js"></script>
    <script src="public/assets/javascripts/vendor/highcharts.min.js"></script>
    <script src="public/assets/javascripts/vendor/jquery.tablesorter.min.js"></script>	
    <script src="public/assets/javascripts/app.js"></script>
</head>
<body>

    <!--[if lt IE 7]>
        <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
    <![endif]-->

    <div class="row">
        <div class="twelve columns">

            <h1>Powerrr!!</h1>

            <table id="cars_list">
                <thead>
                <tr>
                    <th>Year</th>			
                    <th>Make / Model</th>
                    <th>Drive</th>
                    <th>Horsepower</th>
                    <th>Curb Weight (lbs)</th>            
                    <th>P/W Ratio</th>
        			<th>HP/T (US)</th>
                    <th>0-60</th>
                    <th>Price</th>
        			<th>Value (HP/T/$1K)</th>
                </tr>
                </thead>
                <tbody data-bind="foreach: cars">
                    <tr>
                        <td data-bind="text: year"></td>
                        <td data-bind="text: make + ' ' + model"></td>
                        <td data-bind="text: drivetype"></td>
                        <td data-bind="text: hp"></td>
                        <td data-bind="text: weight"></td>
                        <td data-bind="text: ratio"></td>
                        <td data-bind="text: hpperton"></td>
                        <td data-bind="text: zerotosixty"></td>
                        <td data-bind="text: price"></td>
                        <td data-bind="text: performancevalue"></td>
                        <td data-bind="text: year"></td>
                    </tr>
                </tbody>
            </table>

            <div id="container" style="min-width: 400px; height: 400px; margin: 0 auto"></div>

            <div id="hp_weight" style="min-width: 400px; height: 400px; margin: 0 auto"></div>
        
        </div>
    </div>

</body>
</html>