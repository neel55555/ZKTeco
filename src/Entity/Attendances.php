<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Entity\Departments;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AttendanceRepository")
 * @ORM\Table(name="attendances")
 */
class Attendances
{
    /**
     * @ORM\Id();
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
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
     * @ORM\Column(type="string")
     */
    private $department_name;

    /**
     * @ORM\Column(type="string")
     */
    private $inTime;

    /**
     * @ORM\Column(type="string")
     */
    private $outTime;

    /**
     * @ORM\Column(type="string")
     */
    private $date;

    /**
     * @ORM\Column(type="string")
     */
    private $status;

    /**
     * @ORM\Column(type="string")
     */
    private $shift;

    /**
     * Get the value of id
     */ 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */ 
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Get the value of department
     */ 
    public function getDepartment()
    {
        return $this->department;
    }

    /**
     * Set the value of department
     *
     * @return  self
     */ 
    public function setDepartment($department)
    {
        $this->department = $department;

        return $this;
    }

    /**
     * Get the value of department_name
     */ 
    public function getDepartment_name()
    {
        return $this->department_name;
    }

    /**
     * Set the value of department_name
     *
     * @return  self
     */ 
    public function setDepartment_name($department_name)
    {
        $this->department_name = $department_name;

        return $this;
    }

    /**
     * Get the value of inTime
     */ 
    public function getInTime()
    {
        return $this->inTime;
    }

    /**
     * Set the value of inTime
     *
     * @return  self
     */ 
    public function setInTime($inTime)
    {
        $this->inTime = $inTime;

        return $this;
    }

    /**
     * Get the value of outTime
     */ 
    public function getOutTime()
    {
        return $this->outTime;
    }

    /**
     * Set the value of outTime
     *
     * @return  self
     */ 
    public function setOutTime($outTime)
    {
        $this->outTime = $outTime;

        return $this;
    }

    /**
     * Get the value of date
     */ 
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set the value of date
     *
     * @return  self
     */ 
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get the value of status
     */ 
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Set the value of status
     *
     * @return  self
     */ 
    public function setStatus($status)
    {
        $this->status = $status;

        return $this;
    }
}