<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use JMS\Serializer\Annotation\SerializedName;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @ORM\Table(name="users")
 */
class Users
{
    public function __construct()
    {
        
    }

    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(name="id", type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity="Departments")
     */
    private $department;

    /**
     * @ORM\ManyToOne(targetEntity="Shifts")
     */
    private $shift;

    public function getId()
    {
        return $this->id;
    }

    public function getName()
    {
        return $this->Name;
    }

    public function getDepartment()
    {
        return $this->department;
    }

    public function getShift()
    {
        return $this->shift;
    }
}