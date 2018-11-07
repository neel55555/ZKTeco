<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use App\Controller\BaseController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Users;
use App\Entity\Departments;


class User extends BaseController
{
    /**
     * @Route("/api/user", name="api_user", methods={"GET"})
     */
    public function user(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $departmentId = $request->query->get('department');

        $users = $em->getRepository(Users::Class)->findAll();
        $department = $em->getRepository(Departments::Class)->findOneById($departmentId);

        if($departmentId){
            $users = $em->getRepository(Users::Class)->findBy(["department"=>$department]);
        };
        
        $data = $this->container->get('jms_serializer')->serialize($users, 'json');
        $response = new Response($data, Response::HTTP_OK);
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;
    }

    
}