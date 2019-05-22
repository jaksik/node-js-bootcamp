CREATE DATABASE burgers_db;
USE vnvvfelf07zwx0go;

DROP TABLE IF EXISTS `burgers`;

CREATE TABLE `burgers` (
	`id` INT(11) AUTO_INCREMENT NOT NULL,
    `burger_name` VARCHAR(255) NOT NULL,
    `devoured` BOOLEAN DEFAULT false,
    `createdAt` TIMESTAMP NOT NULL,
    PRIMARY KEY (`id`)
);

SELECT * FROM burgers
