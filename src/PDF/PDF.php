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
        $this->AddPage();
        
        
        // Header
        $this->SetFont('Arial','B',16);
        $this->Cell(63,7,'',0);
        $this->Cell(62,7,'PFC ATTENDANCE',0);
        $this->Cell(63,7,'',0);
        $this->Ln();
        $this->Ln();

        
        //Table Head
        $this->SetFont('Arial','B',8);
        $this->Cell(38,7,'Date',1);
        $this->Cell(42,7,'Name',1);
        $this->Cell(42,7,'Department',1);
        $this->Cell(33,7,'in-Time',1);
        $this->Cell(33,7,'Out-Time',1);
        $this->Ln();

        // Table Data
        foreach($this->data as $row)
        {
            $this->Cell(38,6,$row['date'],1);
            $this->Cell(42,6,$row['name'],1);
            $this->Cell(42,6,$row['department_name'],1);
            $this->Cell(33,6,$row['in_time'],1);
            $this->Cell(33,6,$row['out_time'],1);
            $this->Ln();
        }
    }

}