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
        
        $form = $this->createFormBuilder(DeviceType::class)->getForm();
        $form->submit(json_decode($request->getContent(), true));

        if($form->isSubmitted && $form->isValid()){
            $devices = $form->getData();
            $em = $this->getDoctrine()->getManager();
            $em->persist($devices);
            $em->flush();
        };



    }

}