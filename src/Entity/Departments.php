<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use JMS\Serializer\Annotation\SerializedName;

/**
 * @ORM\Entity(repositoryClass="App\Repository\DepartmentRepository")
 * @ORM\Table(name="departments")
 */
class Departments
{
    public function __construct()
    {
        $this->users = new ArrayCollection();
    }
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     * @SerializedName("id")
     */
    private $id;

    /**
     * @ORM\Column(type="string", name="name")
     * @SerializedName("name")
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity="Users", mappedBy="department")
     */
    private $users;

    public function getName()
    {
        return $this->name;
    }

    public function getUsers()
    {
        return $this->users;
    }


}