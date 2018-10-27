<?php

namespace App\Report;
use koolreport\KoolReport;
use koolreport\processes\Group;
use koolreport\processes\Limit;
use koolreport\processes\Sort;

class Report extends KoolReport
{
    private $data;

    public function settings()
    {
        return array(
            "dataSources"=>array(
                "array_datasource"=>array(
                    "class"=>'\koolreport\datasources\ArrayDataSource',
                    "dataFormat"=>"associate",
                    "data"=> $this->data
                ),
            )
        );
    }

    public function setup()
    {
        $this->src('array_datasource')
        ->pipe(new Group(array(
            "by"=>"status",
            "count"=>"user_id"
        )))
        ->pipe(new Sort(array(
            "dollar_sales"=>"desc"
        )))
        ->pipe(new Limit(array(10)))
        ->pipe($this->dataStore('sales_by_customer'));
    }

    public function setData($data)
    {
        $this->data = $data;
    }

}