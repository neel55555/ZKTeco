<?php

namespace App\Controller\Api;

use App\Controller\BaseController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use App\Form\DeviceType;

use App\Entity\Devices as EntityDevices;


class Device extends BaseController
{

    /**
     * @Route("/api/device", methods={"GET", "POST"})
     */
    public function addDevice(Request $request)
    {
        
        $response = new Response();
        $em = $this->getDoctrine()->getManager();

        $form = $this->createForm(DeviceType::class);
        $data = json_decode($request->getContent(), true);
        $form->submit($data);

        if($request->isMethod('post')){

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

        $devices = $em->getRepository(EntityDevices::class)->findAll();


        $response->setContent(json_encode($devices));
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;
    }

}