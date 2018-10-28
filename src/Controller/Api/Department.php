<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use App\Entity\Departments as EntityDepartments;
use App\Entity\Users;

class Department extends Controller
{
    /**
     * @Route("/api/department")
     * @Method("GET")
     */
    public function departments()
    {
        $em = $this->getDoctrine()->getManager();
        $data = $em->getRepository(EntityDepartments::class)->findAll();
        $data = $this->get('jms_serializer')->serialize($data, 'json');
        $response =  new Response($data, Response::HTTP_OK);
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;
    }
}