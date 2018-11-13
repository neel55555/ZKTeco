<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use App\Entity\Users;

class BaseController extends Controller
{
    public function __construct()
    {

    }

    public function parseAttData(array $data)
    {
        $data1 = [];
        $em = $this->getDoctrine()->getManager();
        
        foreach($data as $row){

            foreach($row as $nextRow){
                
                
                //ROW MANIPULATION FOR DATE TIME
                $nextRow['status'] = "";
                
                if(isset($nextRow['in_time'])){
                    $dateTime = new \DateTime($nextRow['in_time']);
                    $nextRow['in_time'] = $dateTime->format('g:iA');
                };
                if(isset($nextRow['out_time'])){
                    $dateTime1 = new \DateTime($nextRow['out_time']);
                    $nextRow['out_time'] = $dateTime1->format('g:iA');
                };

                $in_time = (isset($nextRow['in_time'])) ? $nextRow['in_time'] : 'NO IN TIME';
                $out_time = (isset($nextRow['out_time'])) ? $nextRow['out_time'] : 'NO OUT TIME';
                
                $nextRow['in_time'] = $in_time;
                $nextRow['out_time'] = $out_time;

                if($in_time === $out_time){
                    $nextRow['out_time'] = 'NO OUT TIME';
                };

                //STATUS ASSIGNING======================================
                $user = $em->getRepository(Users::class)->findOneById($nextRow['user_id']);
                $shift = json_decode($user->getShift()->getShift(), true);
                
                $date = new \DateTime($nextRow['date']);
                $day = strtolower($date->format('l'));
                $start = $shift[0][$day]['start'];
                $end = $shift[0][$day]['end'];

                $office_start_time = new \DateTime($start);
                $office_end_time = new \DateTime($end);
                
                if($nextRow['in_time'] != 'NO IN TIME'){
                    
                    $checkin_time = new \DateTime($nextRow['in_time']);

                    if($checkin_time > $office_start_time){
                        $nextRow['status'] = 'LATE';
                    };
                };

                if($nextRow['out_time'] != 'NO OUT TIME'){
                    
                    $checkout_time = new \DateTime($nextRow['out_time']);

                    if($checkout_time < $office_end_time){
                        $nextRow['status'] = 'EARLY';
                    };
                };

                if(($nextRow['in_time'] != 'NO IN TIME') AND ($nextRow['out_time'] != 'NO OUT TIME')){
                    $checkin_time = new \DateTime($nextRow['in_time']);
                    $checkout_time = new \DateTime($nextRow['out_time']);

                    if(($checkin_time > $office_start_time) AND ($checkout_time < $office_end_time)){
                        $nextRow['status'] = 'LATE AND EARLY';
                    };
                };

                if(($nextRow['in_time'] == 'NO IN TIME') AND ($nextRow['out_time'] == 'NO OUT TIME')){
                    $nextRow['status'] = 'ABSENT';
                };

                if(($nextRow['in_time'] != 'NO IN TIME') AND ($nextRow['out_time'] != 'NO OUT TIME') AND ($checkin_time <= $office_start_time) AND ($checkout_time >= $office_end_time)){
                    $nextRow['status'] = 'NORMAL';
                };

                $today = new \DateTime();
                $date = new \DateTime($nextRow['date']);

                if($date->format('d-m-Y') == $today->format('d-m-Y')){
                    $nextRow['status'] = 'NO OUT TIME YET';
                };

                
                $day_name = $date->format('l');

                if($day_name == 'Friday'){
                    $nextRow['status'] = 'WEEKEND';
                };

                $nextRow['date'] .= ' ' . $day_name;

                

                $data1[] = $nextRow;
            }
        };

        return $data1;
    }

    private function attendanceStatusCount($data)
    {
        $status = [];
        $late = 0;
        $early = 0;
        $absent = 0;
        $normal = 0;

        foreach($data as $row){
            $late = ($row['status'] == "LATE") ? $late+1 : $late;
            $early = ($row['status'] == "EARLY") ? $early+1 : $early;
            $absent = ($row['status'] == "ABSENT") ? $absent+1 : $absent;
            $normal = ($row['status'] == "NORMAL") ? $normal+1 : $normal;
        };

        $status['late'] = $late;
        $status['early'] = $early;
        $status['absent'] = $absent;
        $status['normal'] = $normal;

        return $status;
    }

    public function parseToHalJson($data, $uris)
    {

        
        $status = $this->attendanceStatusCount($data);
        
        $halArray = [[
            "_links"=> [
                "self"=> [
                    "href"=>$uris['self']
                ],
                "download"=> [
                    "pdf"=> [
                        "href"=> $uris['pdf']
                    ]
                ]
            ],
            "totalLate"=> $status['late'],
            "totalEarly"=> $status['early'],
            "totalAbsent"=> $status['absent'],
            "totalNormal"=>$status['normal'],
            "_embedded"=> [
                "attendance"=> $data
            ]
        ]];

        return $this->get('jms_serializer')->serialize($halArray, 'json');
    }

    
}