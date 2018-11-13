<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ShiftRepository")
 * @ORM\Table(name="shifts")
 */
class Shifts
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
     * @ORM\Column(type="string")
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=512)
     */
    private $shift;

    public function getShift()
    {
        return $this->shift;
    }

    public function getName()
    {
        return $this->name;
    }
}