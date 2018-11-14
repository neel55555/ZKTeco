<?php

namespace App\Repository;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use App\Entity\Logs;

class LogRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Logs::class);
    }

    public function findOneInOut($id, $date, $departmentId = null)
    {
        $date = preg_replace('/(\d+)-(\d+)-(\d+)/', "$3-$2-$1", $date);
        
        $date1 = $date.' 00:00:00.00';
        $date2 = $date.' 23:59:59.999';
        $sql = "SELECT users.id as user_id, users.name, department_id, departments.name as department_name, 
        (SELECT time FROM Logs WHERE user_id = ? AND time BETWEEN ? AND ? ORDER BY time ASC LIMIT 1) as in_time,
        (SELECT time FROM Logs WHERE user_id = ? AND time BETWEEN ? AND ? ORDER BY time DESC LIMIT 1) as out_time
        FROM users 
        INNER JOIN Logs ON Logs.user_id = users.id 
        INNER JOIN departments ON departments.id = users.department_id 
        WHERE Logs.user_id = ?";

        $placeholeder = [0=>$id, 1=>$date1, 2=>$date2, 3=>$id, 4=>$date1, 5=>$date2, 6=>$id];
                
        if($departmentId){
            $sql.= ' AND departments.id = ?';
            $placeholeder[7] = $departmentId;
        };

        $sql .= ' LIMIT 1';

        $stmt =  $this->getEntityManager()->getConnection()->prepare($sql);
        $stmt->execute($placeholeder);
        $data = $stmt->fetchAll();
        //dump($data);
        //$data[0]['date'] = $date;
        return $data;
    }

    
}