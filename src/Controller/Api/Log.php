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
use App\Entity\Logs;
use App\PDF\PDF;


class Log extends BaseController
{
    
    /**
     *@Route("/api/log", name="homePage", methods={"GET"})
     */
    public function userLog(Request $request)
    {

        $contentType = $request->getAcceptableContentTypes();
        $requestUri = $request->getRequestUri();
        $em = $this->getDoctrine()->getManager();
        $_date = $request->query->get('date');
        $_userId = $request->query->get('uid');
        $_department = $request->query->get('department');
        $LogRepo = $em->getRepository(Logs::class);
        $userRepo = $em->getRepository(Users::class);

        if($_department){

        };

        

        if(empty($_date)){
            $dateTime = new \DateTime('now');
            $_date = $dateTime->format('d-m-Y.d-m-Y');
        };

        list($dateRangeFrom, $dateRangeTo) = explode('.', str_replace(' ', '', $_date));
        
        $attendance = array();
        $allDates = [];

        $dateRangeTo = new \DateTime($dateRangeTo);
        $dateRangeTo->add(new \DateInterval('P1D'));
        $period = new \DatePeriod(new \DateTime($dateRangeFrom), new \DateInterval('P1D'), $dateRangeTo);

        foreach($period as $k=>$v){
            $allDates[] =  $v->format('d-m-Y');
        };

        $singleUserMonthlyLog = [];
        
        $userIds = $userRepo->findAllUserId($_department, $_userId);
        
        foreach ($allDates as $singleDate) {
            foreach($userIds as $userId){
                $singleLog = $LogRepo->findOneInOut($userId['id'], $singleDate);
                $singleLog[0]['date'] = $singleDate;
                $attendance[] = $singleLog;
            };
        };
        
        $attendance = $this->parseAttData($attendance);

        //Send json


        $uris = [
            "self" => $requestUri, 
            "pdf" => $requestUri . '&accept=pdf'
        ];
        $halAttendanceData = $this->parseTohalJson($attendance, $uris);
        $response = new Response($halAttendanceData, Response::HTTP_OK, ["Access-Control-Allow-Origin"=>"*"]);
        $response->headers->set('Content-Type','application/hal+json');

        //Send pdf file
        if($request->query->get('accept') == 'pdf'){
            $pdf = new PDF();
            $pdf->setData($halAttendanceData);
            $pdf->basicTable();
            $output = $pdf->Output('S');
            $response = new Response($output, Response::HTTP_OK);
            $response->headers->set('Content-Type', 'application/pdf');
            $response->headers->set('Access-Control-Allow-Origin', '*');
            $response->headers->set('Content-Disposition', 'attachment; filename="Attendance.pdf"');
            $response->headers->set('Cache-Control', 'private, max-age=0, must-revalidate');
            $response->headers->set('Pragma', 'public');
        };
        
        return $response;
    }

    
}