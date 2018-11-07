<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Entity\Users;
use App\Entity\Devices;

/**
 * @ORM\Entity(repositoryClass="App\Repository\LogRepository")
 * @ORM\Table(name="Logs")
 */
class Logs
{
    public function __construct()
    {
        
    }

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     */
    private $time;

    /**
     * @ORM\ManyToOne(targetEntity="Users")
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="Devices")
     */
    private $device;

    public function getId()
    {
        return $this->id;
    }

    public function getTime()
    {
        return $this->time;
    }

    public function setTime($time)
    {
        $this->time = $time;
    }

    public function setUser($user)
    {
        $this->user = $user;
    }

    public function setDevice($device)
    {
        $this->device = $device;
    }
}