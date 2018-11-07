<?php

namespace App\Controller\Api;

use App\Controller\BaseController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use App\ZKLibrary\ZKLibrary;

use App\Form\DeviceType;

use App\Entity\Logs;
use App\Entity\Users;
use App\Entity\Devices;

use App\Entity\Devices as EntityDevices;


class Device extends BaseController
{

    /**
     * @Route("/api/device/get-data")
     */
    public function getData()
    {
        $em = $this->getDoctrine()->getManager();

        //Fetching All Devices
        $devices = $em->getRepository(Devices::class)->findAll();

        //Fetching Last Insert Log Time
        $qb = $em->createQueryBuilder();
        $result = $qb->select('log.time')->from(Logs::class, 'log')->orderBy('log.id', 'DESC')->setMaxResults(1)->getQuery()->getResult();
        $lastInsertTime = $result[0]['time'];

        //Fetching Data From Devices
        
        error_reporting(0);
        ini_set('max_execution_time', 999999);
        foreach($devices as $device){

            $zk = new ZKLibrary($device->getIp(), $device->getPort());
            $ret = $zk->connect();
            $data = $zk->getAttendance();
            $zk->disconnect();

            foreach($data as $row){
                $dateToInsert = new \DateTime($row[3]);
                if($dateToInsert > $lastInsertTime){
                    $user = $em->getRepository(Users::class)->findOneBy(array('id'=>$row[1]));
                    $log = new Logs();
                    $log->setTime(new \DateTime($row[3]));
                    $log->setUser($user);
                    $log->setdevice($device);
                    $em->persist($log);
                    $em->flush();
                };
                
            };
        };

        $response = new Response('LOG CREATED SUCCESSFULLY');
        return $response;
    }

    /**
     * @Route("/api/device", methods={"GET"})
     */
    public function addDevice(Request $request)
    {
        
        $response = new Response();
        $em = $this->getDoctrine()->getManager();

        

        if($request->isMethod('post')){
            $form = $this->createForm(DeviceType::class);
            $data = json_decode($request->getContent(), true);
            $form->submit($data);

            if($form->isSubmitted() && $form->isValid()){
                $devices = $form->getData();
                $devices->setTimeLastLog(new \DateTime($data['timeLastLog']));

                $em->persist($devices);
                $em->flush();
                
                $response->setContent(json_encode(["status"=>"Device Created"]));
                $response->setStatusCode(Response::HTTP_CREATED);
                $response->headers->set('Access-Control-Allow-Origin', '*');
                return $response;
            };
        };

        if($request->isMethod('get')){
            $devices = $em->getRepository(EntityDevices::class)->findAll();
            foreach($devices as $key=>$device)
            {
                //$dataDevices[$key]['id'] = $device->getId();
                $dataDevices[$key]['ip'] = $device->getIp();
                $dataDevices[$key]['port'] = $device->getPort();
                $dataDevices[$key]['serial_number'] = $device->getSerialNumber();
            };
            
            $response->setContent(json_encode($dataDevices));
            $response->headers->set('Access-Control-Allow-Origin', '*');
            $response->headers->set('Content-Type', 'Application/json');
            return $response;
        }
    }

}