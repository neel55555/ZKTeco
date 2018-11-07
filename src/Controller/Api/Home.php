<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use App\Controller\BaseController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Users;
use App\Entity\Departments;
use App\Entity\Logs;
use App\PDF\PDF;


class Home extends BaseController
{
    
    /**
     *@Route("/api/user-log", name="homePage")
     *@Method("GET")
     */
    public function userLog(Request $request)
    {

        $em = $this->getDoctrine()->getManager();
        $_date = $request->query->get('date');
        $_badgenumber = $request->query->get('uid');
        $_department = $request->query->get('department');
        $LogRepo = $em->getRepository(Logs::class);

        if(empty($_date)){
            $dateTime = new \DateTime('now');
            $_date = $dateTime->format('d-m-Y.d-m-Y');
        };

        list($dateRangeFrom, $dateRangeTo) = explode('.', str_replace(' ', '', $_date));
        
        $log = array();
        $allDates = [];

        $dateRangeTo = new \DateTime($dateRangeTo);
        $dateRangeTo->add(new \DateInterval('P1D'));
        
        $period = new \DatePeriod(new \DateTime($dateRangeFrom), new \DateInterval('P1D'), $dateRangeTo);

        foreach($period as $k=>$v){
            $allDates[] =  $v->format('d-m-Y');
        };

        $singleUserMonthlyLog = [];
        
        $badgenumbers = $LogRepo->findAllBadgenumber($_department, $_badgenumber);
        
        foreach ($allDates as $singleDate) {
            foreach($badgenumbers as $badgenumber){
                $singleLog = $LogRepo->findOneInOut($badgenumber['id'], $singleDate);
                $singleLog[0]['date'] = $singleDate;
                $log[] = $singleLog;
            };
        };
        

        $log = $this->parseAttData($log);

        
        $pdf = new PDF();
        
        $pdf->setData($log);
        $pdf->basicTable();
        $output = $pdf->Output('S');

        
        //$singleUserMonthlyLogJSON = $this->get('jms_serializer')->serialize($log, 'json');
        //$response = new Response($singleUserMonthlyLogJSON, Response::HTTP_OK, ["Access-Control-Allow-Origin"=>"*"]);
        //$response->headers->set('Content-Type','application/json');
        
        $response = new Response($output, Response::HTTP_OK);
        $response->headers->set('Content-Type', 'application/x-download');
        $response->headers->set('Content-Disposition', 'attachment; filename="downloaded.pdf"');
        $response->headers->set('Cache-Control', 'private, max-age=0, must-revalidate');
        $response->headers->set('Pragma', 'public');
        
        return $response;
    }

    /**
     * @Route("/api/user", name="api_user")
     * @Method("GET")
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