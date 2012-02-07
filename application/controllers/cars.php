<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Cars extends CI_Controller {

    public function index()
    {

        $this->load->model('car_model');
        $cars = $this->car_model->getAll();
        $data['cars'] = $cars;
        
        $this->load->view('list',$data);
    }
}

/* End of file list.php */
/* Location: ./application/controllers/welcome.php */