<?php

namespace App\Repository;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use App\Entity\Users;

class UserRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Users::class);
    }

    public function findAllUserId($department = null, $id = null)
    {
        $placeholder = [];

        $sql = 'SELECT id 
        FROM users WHERE 1 = 1';

        $sql.= ($department) ? " AND department_id = :department_id" : "";

        $sql.= ($id) ? " AND id = :id" : "";

        if($department)
            $placeholder[':department_id'] = $department;

        if($id)
            $placeholder[':id'] = $id;

        $stmt = $this->getEntityManager()->getConnection()->prepare($sql);
        $stmt->execute($placeholder);
        return $stmt->fetchAll();
    }

    
}