<?php

namespace App\Controller\Api;

use App\Controller\BaseController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

use App\Entity\Device as EntityDevice;


class Device extends BaseController
{

    /**
     * @Route("/api/device")
     * @Method("POST")
     */
    public function addDevice(Request $request)
    {
        return new Response(' ');
    }

}