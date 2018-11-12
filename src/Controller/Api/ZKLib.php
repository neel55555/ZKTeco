<?php

namespace App\Controller\Api;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use App\Entity\Logs;
use App\Entity\Users;

use App\ZKLibrary\ZKLibrary;


class ZKLib extends Controller
{
    /**
     * @Route("/api/zk");
     */
    public function zk()
    {
        error_reporting(0);
        ini_set('max_execution_time', 120);
        

        $requests = 10;
        for($n = 0; $n<=$requests; $n++){
            $zk = new ZKLibrary('192.168.1.205', 4370);
            //RETURN TRUE IF CONNECTED
            $ret = $zk->connect();
            //RETURNS FALCE IF FAIL
            $data = $zk->getAttendance();
            
            $zk->disconnect();
            if(!empty($data)){
                break;
            };
            sleep(10);
        };

        //$zk->enableDevice();
        
        $data = $this->get('jms_serializer')->serialize($data, 'json');
        return new Response($data, Response::HTTP_OK, ["Content-Type"=>"application/json"]);
    }

    
}