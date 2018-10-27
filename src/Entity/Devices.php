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
    private $serial_number;

    /**
     * @ORM\Column(name="time_last_log", type="datetime")
     */
    private $time_last_log;
}