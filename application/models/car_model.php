<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Car_model extends CI_Model {

    function getAll()
    {

        $result = array();

        $result = array(
            array(
                'make'=>'Subaru',
                'model'=>'Imprezza WRX',
                'year'=>'2012',
                'hp'=>'265',
                'weight'=>'3208',
                'price'=>'25595',
                'drivetype' => 'AWD'
            ),
            array(
                'make'=>'Volkswagen',
                'model'=>'GTI',
                'year'=>'2012',
                'hp'=>'200',
                'weight'=>'3034',
                'price'=>'23995',
                'drivetype' => 'FWD'
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

	        array(
                'make'=>'Nissan',
                'model'=>'370Z',
                'year'=>'2009',
                'hp'=>332,
                'weight'=>3232,
                'price'=>24524,
                'drivetype' => 'RWD'
            ),
			array(
                'make'=>'Porsche',
                'model'=>'911 Turbo',
                'year'=>'2012',
                'hp'=>500,
                'weight'=>3461,
                'price'=>137500,
                'drivetype' => 'RWD'
            ),
            array(
                'make'=>'Ford',
                'model'=>'Shelby GT500',
                'year'=>'2013',
                'hp'=>650,
                'weight'=>3850,
                'price'=>60000,
                'drivetype' => 'RWD'
            ),
			array(
                'make'=>'Mitsubishi',
                'model'=>'Evolution X',
                'year'=>'2012',
                'hp'=>291,
                'weight'=>3514,
                'price'=>34495,
                'drivetype' => 'AWD'
            ),
			array(
                'make'=>'Mitsubishi',
                'model'=>'Lancer Ralliart',
                'year'=>'2012',
                'hp'=>237,
                'weight'=>3461,
                'price'=>27995,
                'drivetype' => 'AWD'
            ),
			array(
                'make'=>'Cadillac',
                'model'=>'CTS-V',
                'year'=>'2012',
                'hp'=>556,
                'weight'=>4222,
                'price'=>63215,
                'drivetype' => 'RWD'
            ),
            array(
                'make'=>'Cadillac',
                'model'=>'CTS-V',
                'year'=>'2007',
                'hp'=>400,
                'weight'=>3850,
                'price'=>21986,
                'drivetype' => 'RWD'
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
                'price'=>75600,
                'drivetype' => 'RWD'
            ),
			array(
                'make'=>'Ford',
                'model'=>'Mustang GT',
                'year'=>'2012',
                'hp'=>412,
                'weight'=>3605,
                'price'=>29710,
                'drivetype' => 'RWD'
            ),
            array(
                'make'=>'Ford',
                'model'=>'Mustang GT',
                'year'=>'2011',
                'hp'=>412,
                'weight'=>3605,
                'price'=>21122,
                'drivetype' => 'RWD'
            ),
			array(
                'make'=>'Toyota',
                'model'=>'Prius',
                'year'=>'2012',
                'hp'=>134,
                'weight'=>3042,
                'price'=>23015
            ),
            array(
                'make'=>'Lamborghini',
                'model'=>'Aventador',
                'year'=>'2012',
                'hp'=>700,
                'weight'=>3472,
                'price'=>387000,
                'drivetype' => 'AWD'
            ),
            array(
                'make'=>'Chevy',
                'model'=>'Cobalt SS',
                'year'=>'2008',
                'hp'=>260,
                'weight'=>2975,
                'price'=>12763,
                'drivetype' => 'FWD'
            ),
            array(
                'make'=>'Mazda',
                'model'=>'Mazdaspeed6',
                'year'=>'2006',
                'hp'=>274,
                'weight'=>3589,
                'price'=>13466,
                'drivetype' => 'AWD'
            ),
            array(
                'make'=>'Jeep',
                'model'=>'Grand Cherokee SRT-8',
                'year'=>'2007',
                'hp'=>420,
                'weight'=>4819,
                'price'=>22581,
                'drivetype' => 'AWD'
            ),
            array(
                'make'=>'Mercedes',
                'model'=>'E63 AMG',
                'year'=>'2007',
                'hp'=>507,
                'weight'=>4035,
                'price'=>30700,
                'drivetype' => 'RWD'
            ),
            array(
                'make'=>'Audi',
                'model'=>'S4 Avant',
                'year'=>'2007',
                'hp'=>340,
                'weight'=>3979,
                'price'=>23635,
                'drivetype' => 'AWD'
            ),
            array(
                'make'=>'Audi',
                'model'=>'RS4 Avant',
                'year'=>'2013',
                'hp'=>450,
                'weight'=>4200,
                'price'=>96000,
                'drivetype' => 'AWD'
            ),
            array(
                'make'=>'Hyundai',
                'model'=>'Sonata GLS',
                'year'=>'2006',
                'hp'=>235,
                'weight'=>3458,
                'price'=>6830,
                'drivetype' => 'FWD'
            ),
            array(
                'make'=>'Lexus',
                'model'=>'IS 350',
                'year'=>'2007',
                'hp'=>306,
                'weight'=>3527,
                'price'=>16955,
                'drivetype' => 'RWD'
            ),
        );
		
		foreach($result as $k=>$v)
		{
			$hp_per_ton = $this->getHPperTon($v['hp'], $v['weight']);
            // if no drive type is set, assume RWD
            $result[$k]['drivetype'] = $v['drivetype'] = (isset($v['drivetype'])) ? $v['drivetype'] : "FWD";
            if($v['drivetype'] === "RWD") {
                $drivetype = 1;
            } else if ($v['drivetype'] === "AWD") {
                $drivetype = 2;
            } else {
                $drivetype = 3;
            }
			$result[$k]['zerotosixty'] = $this->getzeroToSixty($v['hp'], $v['weight'], $drivetype);
			$result[$k]['ratio'] = $this->getPWRatio($v['hp'], $v['weight']);
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

    // estimated 0-60mph (based on 060calculator.com)
    function getzeroToSixty($power, $weight, $driveType) {
        if ($driveType === 1) {
            $driveTypeMultiplier = .9; // rwd
        } else if ($driveType === 2) {
            $driveTypeMultiplier = .85; // awd
        } else {
            $driveTypeMultiplier = 1; // fwd
        }
        return round((pow($weight / $power * $driveTypeMultiplier, .75)) * 1000) / 1000;
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