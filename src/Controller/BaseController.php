<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class BaseController extends Controller
{
    public function __construct()
    {

    }

    public function parseAttData(array $data)
    {
        $data1 = [];
        
        foreach($data as $row){

            foreach($row as $nextRow){
                //ROW MANIPULATION FOR DATE TIME
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
                $office_start_time = new \DateTime('10:00AM');
                $office_end_time = new \DateTime('6:00PM');
                
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

                $dateTime = new \DateTime($nextRow['date']);
                $day_name = $dateTime->format('l');

                $nextRow['date'] .= ' ' . $day_name;

                if($day_name == 'Friday'){
                    $nextRow['status'] = 'WEEKEND';
                };

                $today = new \DateTime();
                $date = new \DateTime($nextRow['date']);
                if($date>=$today){
                    $nextRow['status'] = ' ';
                };

                $data1[] = $nextRow;
            }
        };

        return $data1;
    }

    
}