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
        ini_set('max_execution_time', 50);
        $zk = new ZKLibrary('192.168.1.205', 4370);
        $ret = $zk->connect();
        if ( $ret ){
            
            //$zk->disableDevice();
        };

        $data = $zk->getAttendance();
        //$zk->enableDevice();
        $zk->disconnect();
        $data = $this->get('jms_serializer')->serialize($data, 'json');
        return new Response($data, Response::HTTP_OK, ["Content-Type"=>"application/json"]);
    }

    /**
     * @Route("/api/get-device-data");
     */
    public function getDeviceData()
    {
        
        error_reporting(0);
        ini_set('max_execution_time', 999999);
        $zk = new ZKLibrary('192.168.1.205', 4370);
        $ret = $zk->connect();
        $data = $zk->getAttendance();
        $zk->disconnect();
        
        $em = $this->getDoctrine()->getManager();
        
        $qb = $em->createQueryBuilder();

        $result = $qb->select('Log.time')->from(Logs::class, 'Log')->orderBy('Log.time', 'DESC')->setMaxResults(1)->getQuery()->getResult();
        
        $lastInsertedDate = $result[0]['time'];
        
        //dump($lastInsertedDate);
        foreach($data as $row){
            $dateToInsert = new \DateTime($row[3]);
            
            
            //if($dateToInsert > $lastInsertedDate){
                //dump($dateToInsert);
                
                $user = $em->getRepository(Users::class)->findOneBy(array('id'=>$row[1]));
                $log = new Logs();
                $log->setTime(new \DateTime($row[3]));
                $log->setUser($user);
                $em->persist($log);
                $em->flush();
            //};
            
        };
        
        
        
        $data = $this->get('jms_serializer')->serialize($data, 'json');
        return new Response($data, Response::HTTP_OK, ["Content-Type"=>"application/json"]);
        
    }
}