<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity(repositoryClass="DeviceRepository")
 * @ORM\Table(name="devices")
 */
class Devices
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(name="id", type="integer")
     */
    private $id;

    /**
     * @ORM\Column(name="ip", type="string", length=15)
     */
    private $ip;

    /**
     * @ORM\Column(name="port", type="string")
     */
    private $port;

    /**
     * @ORM\Column(name="serial_number", type="string")
     */
    private $serialNumber;
    
    /**
     * @ORM\Column(name="time_last_log", type="datetime")
     */
    private $timeLastLog;

    public function setIp($ip)
    {
        $this->ip = $ip;
    }

    public function setPort($port)
    {
        $this->port = $port;
    }

    public function setSerialNumber($serialNumber)
    {
        $this->serialNumber = $serialNumber;
    }

    public function setTimeLastLog($timeLastLog)
    {
        $this->timeLastLog = $timeLastLog;
    }

    public function getIp()
    {
        return $this->ip;
    }

    public function getPort()
    {
        return $this->port;
    }

    public function getSerialNumber()
    {
        return $this->serialNumber;
    }

    public function getTimeLastLog()
    {
        return $this->timeLastLog;
    }
}