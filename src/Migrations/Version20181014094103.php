<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20181014094103 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE acc_monitor_log (id INT NOT NULL, pin INT DEFAULT NULL, time DATETIME NOT NULL, INDEX IDX_405275ACB5852DF3 (pin), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE DEPARTMENTS (DEPTID INT NOT NULL, DEPTNAME VARCHAR(255) NOT NULL, PRIMARY KEY(DEPTID)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE USERINFO (USERID INT NOT NULL, Badgenumber INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, DEFAULTDEPTID INT DEFAULT NULL, INDEX IDX_ABC7D56AF000BB1A (DEFAULTDEPTID), PRIMARY KEY(Badgenumber)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE acc_monitor_log ADD CONSTRAINT FK_405275ACB5852DF3 FOREIGN KEY (pin) REFERENCES USERINFO (Badgenumber)');
        $this->addSql('ALTER TABLE USERINFO ADD CONSTRAINT FK_ABC7D56AF000BB1A FOREIGN KEY (DEFAULTDEPTID) REFERENCES DEPARTMENTS (DEPTID)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE USERINFO DROP FOREIGN KEY FK_ABC7D56AF000BB1A');
        $this->addSql('ALTER TABLE acc_monitor_log DROP FOREIGN KEY FK_405275ACB5852DF3');
        $this->addSql('DROP TABLE acc_monitor_log');
        $this->addSql('DROP TABLE DEPARTMENTS');
        $this->addSql('DROP TABLE USERINFO');
    }
}
