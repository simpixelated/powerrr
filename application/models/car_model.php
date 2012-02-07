<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Car_model extends CI_Model {

    function getAll()
    {

        $result = array();

        $result = array(
            array(
                'make'=>'Volkswagen',
                'model'=>'GTI',
                'year'=>'2012',
                'hp'=>'200',
                'weight'=>'3034',
                'price'=>'23995'
            ),
            array(
                'make'=>'Mazda',
                'model'=>'Mazda2',
                'year'=>'2012',
                'hp'=>'100',
                'weight'=>'2306',
                'price'=>'14530'
                ),
        array(
                'make'=>'Mazda',
                'model'=>'Mazdaspeed3',
                'year'=>'2012',
                'hp'=>'263',
                'weight'=>'3281',
                'price'=>'24000'
                ),

	       /*array(
                'make'=>'Nissan',
                'model'=>'370Z',
                'year'=>'2009',
                'hp'=>332,
                'weight'=>3232,
                'price'=>24524
            ),*/
			array(
                'make'=>'Porsche',
                'model'=>'911 Turbo',
                'year'=>'2012',
                'hp'=>500,
                'weight'=>3461,
                'price'=>137500
            ),
            array(
                'make'=>'Ford',
                'model'=>'Shelby GT500',
                'year'=>'2013',
                'hp'=>650,
                'weight'=>3850,
                'price'=>60000
            ),
			array(
                'make'=>'Mitsubishi',
                'model'=>'Evolution X',
                'year'=>'2012',
                'hp'=>291,
                'weight'=>3514,
                'price'=>34495
            ),
			array(
                'make'=>'Mitsubishi',
                'model'=>'Lancer Ralliart',
                'year'=>'2012',
                'hp'=>237,
                'weight'=>3461,
                'price'=>27995
            ),
			array(
                'make'=>'Cadillac',
                'model'=>'CTS-V',
                'year'=>'2012',
                'hp'=>556,
                'weight'=>4222,
                'price'=>63215
            ),
			array(
                'make'=>'Fiat',
                'model'=>'500',
                'year'=>'2012',
                'hp'=>101,
                'weight'=>2363,
                'price'=>17500
            ),
			array(
                'make'=>'Fiat',
                'model'=>'500 Abarth',
                'year'=>'2012',
                'hp'=>160,
                'weight'=>2533,
                'price'=>22000
            ),
			array(
                'make'=>'Mini',
                'model'=>'Cooper S',
                'year'=>'2012',
                'hp'=>181,
                'weight'=>2668,
                'price'=>23100
            ),
			array(
                'make'=>'Chevy',
                'model'=>'Corvette Z06',
                'year'=>'2012',
                'hp'=>505,
                'weight'=>3175,
                'price'=>75600
            ),
			array(
                'make'=>'Ford',
                'model'=>'Mustang GT',
                'year'=>'2012',
                'hp'=>412,
                'weight'=>3605,
                'price'=>29710
            ),
			array(
                'make'=>'Toyota',
                'model'=>'Prius',
                'year'=>'2012',
                'hp'=>134,
                'weight'=>3042,
                'price'=>23015
            )
        );
		
		foreach($result as $k=>$v)
		{
			$hp_per_ton = $this->getHPperTon($v['hp'], $v['weight']);
			
			$result[$k]['ratio'] = $this->getWPRatio($v['hp'], $v['weight']);
			$result[$k]['hp_per_ton'] = $hp_per_ton;
			$result[$k]['value'] = $this->getValue($v['price'], $hp_per_ton);
		}
		
		$result = $this->subval_sort($result,'value');
		
		return $result;
        
    }

    function getPWRatio($power, $weight)
    {
        $result = $power / $weight;
        $result = round($result,3);
        return $result;
    }

    function getWPRatio($power, $weight)
    {
        $result = $weight / $power;
        $result = round($result,1);
        return $result;
    }
	
	function getHPperTon($power, $weight)
	{
		$result = $power / ($weight/2000);
		$result = round($result);
		return $result;
	}
	
	// this is hp/ton per $1k
	function getValue($price, $hp_per_ton)
	{
		$result = round($hp_per_ton / ($price/1000),1);
		return $result;
	}
	
	function subval_sort($a,$subkey) {
		foreach($a as $k=>$v) {
			$b[$k] = strtolower($v[$subkey]);
		}
		arsort($b);
		foreach($b as $key=>$val) {
			$c[] = $a[$key];
		}
		return $c;
	}
}

/* End of file list.php */
/* Location: ./application/controllers/welcome.php */