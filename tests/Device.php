<?php

namespace App;

use PHPUnit\Framework\TestCase;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use GuzzleHttp\Client;

class Device extends WebTestCase
{   
    public function testShowPost()
    {
        $client = static::createClient();

        $client->request('GET', 'http://192.168.1.98/api/user');

        $this->assertEquals(200, $client->getResponse()->getStatusCode());
    }
}