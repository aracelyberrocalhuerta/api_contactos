CREATE DATABASE IF NOT EXISTS contactos;

USE contactos;

CREATE TABLE contacto
(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(200) NOT NULL,
    apellido VARCHAR(200) DEFAULT NULL,
    telefono INT(9) NOT NULL,
    correo varchar(200)NOT NULL,
    ciudad varchar(200) NOT NULL,
    favorito bit NOT NULL,
    PRIMARY KEY(id)
);

DESCRIBE contacto;

alter table contacto add avatar varchar(1000) not null;
