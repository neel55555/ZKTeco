<?php

namespace App\Controller\Api;

use App\Controller\BaseController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

use App\Form\DeviceType;

use App\Entity\Device as EntityDevice;


class Device extends BaseController
{

    /**
     * @Route("/api/device")
     * @Method("POST")
     */
    public function addDevice(Request $request)
    {
        
        $form = $this->createForm(DeviceType::class);
        $data = json_decode($request->getContent(), true);
        $form->submit($data);

        if($form->isSubmitted() && $form->isValid()){
            $devices = $form->getData();
            $devices->setTimeLastLog(new \DateTime($data['timeLastLog']));

            $em = $this->getDoctrine()->getManager();
            $em->persist($devices);
            $em->flush();
            
            $response = new Response(json_encode([]));
            $response->setStatusCode(Response::HTTP_CREATED);
            $response->headers->set('Access-Control-Allow-Origin', '*');
            return $response;
        };

        

    }

}