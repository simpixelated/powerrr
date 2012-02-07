<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Welcome to CodeIgniter</title>
	<style>
	body {
		width: 990px;
		margin: 0 auto;
	}
	table {
		width: 100%;
	}
	</style>
</head>
<body>

    <table>
        <thead>
        <tr>
            <th>Year</th>			
            <th>Make / Model</th>
            <th>Horsepower</th>
            <th>Curb Weight (lbs)</th>
            <? /*<th>W/P Ratio</th>*/?>
			<th>HP/T (US)</th>
            <th>Price</th>
			<th>Value (HP/T/$1K)</th>
        </tr>
        </thead>
        <tbody>
        <? foreach($cars as $c){?>
        <tr>
            <td><?=$c['year']?></td>
			<td><?=$c['make']?> <?=$c['model']?></td>            
            <td><?=$c['hp']?></td>
            <td><?=$c['weight']?></td>
            <? /*<td><?=$c['ratio']?></td>*/?>
			<td><?=$c['hp_per_ton']?></td>
            <td><?=$c['price']?></td>
			<td><?=$c['value']?></td>
        </tr>
        <? } ?>
        </tbody>
    </table>

</body>
</html>