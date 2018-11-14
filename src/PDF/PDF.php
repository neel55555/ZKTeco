<?php

namespace App\PDF;

class PDF extends \FPDF
{
    
    private $data;

    public function __construct()
    {
        parent::__construct();
    }

    public function setData($data)
    {
        $this->data = $data;
    }

    public function basicTable()
    {
        $data = json_decode($this->data, true);
        $Y_coord_img_block = 26.3;
        $is_bordered = 0;
        $this->AddPage();
        
        //Total width of cells should be 190
        // Header
        $this->SetFont('Arial','B',16);
        $this->Cell(70,7,'',$is_bordered);
        $this->Cell(64,7,'PFC ATTENDANCE',$is_bordered);
        $this->Cell(56,7,'',$is_bordered);
        $this->Ln();
        $this->Ln();
        //Attendance stats
        
        $this->SetFont('Arial', 'B', 8);
        $this->Image('./images/block.png', 10, $Y_coord_img_block, 2, 2);
        $this->Image('./images/block.png', 48, $Y_coord_img_block, 2, 2);
        $this->Image('./images/block.png', 86, $Y_coord_img_block, 2, 2);
        $this->Image('./images/block.png', 124, $Y_coord_img_block, 2, 2);
        //$this->Image('./images/block.png', 162, $Y_coord_img_block, 2, 2);

        $this->Cell(2, 7, '', $is_bordered);
        $this->Cell(36, 7, 'Normal ' . $data[0]['totalNormal'], $is_bordered);
        $this->Cell(2, 7, '', $is_bordered);
        $this->Cell(36, 7, 'Late ' . $data[0]['totalLate'], $is_bordered);
        $this->Cell(2, 7, '', $is_bordered);
        $this->Cell(36, 7, 'Early ' . $data[0]['totalEarly'], $is_bordered);
        $this->Cell(2, 7, '', $is_bordered);
        $this->Cell(36, 7, 'Absent ' . $data[0]['totalAbsent'], $is_bordered);
        $this->Ln();
        //Table Head
        $this->SetFont('Arial', 'B', 8);
        $this->Cell(38,7,'Date',1);
        $this->Cell(43,7,'Name',1);
        $this->Cell(43,7,'Department',1);
        $this->Cell(33,7,'in-Time',1);
        $this->Cell(33,7,'Out-Time',1);
        $this->Ln();
        
        
        // Table Data
        foreach($data[0]['_embedded']['attendance'] as $row)
        {
            $this->Cell(38,6,$row['date'],1);
            $this->Cell(43,6,$row['name'],1);
            $this->Cell(43,6,$row['department_name'],1);
            $this->Cell(33,6,$row['in_time'],1);
            $this->Cell(33,6,$row['out_time'],1);
            $this->Ln();
        }
    }

}