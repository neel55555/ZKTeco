<?php

namespace App\Controller\Web;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\Routing\Annotation\Route;

use App\Entity\UserInfo;


class Home extends Controller
{
    /**
     * @Route("/", name="home")
     */
    public function home()
    {
        return $this->render('home.html.twig');
    }

    /**
     * @Route("/user", name="user")
     */
    public function user()
    {
        return $this->render('home.html.twig');
    }

    /**
     * @Route("/user-log", name="user_log")
     */
    public function userLog()
    {
        return $this->render('home.html.twig');
    }

    /**
     * @Route("/report", name="report")
     */
    public function report()
    {
        
        return $this->render('home.html.twig');
    }

    /**
     * @Route("/device", name="device")
     */
    public function device()
    {
        return $this->render('home.html.twig');
    }

}