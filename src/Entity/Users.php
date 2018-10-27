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
        $this->department = new ArrayCollection();
        
    }

    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(name="id", type="integer")
     * @SerializedName("id")
     */
    private $id;

    /**
     * @ORM\Column(type="string");
     * @SerializedName("name")
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity="Departments", inversedBy="users")
     * @SerializedName("department")
     */
    private $department;

    /**
     * @ORM\OneToMany(targetEntity="Logs", mappedBy="user")
     */
    private $Logs;

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

}