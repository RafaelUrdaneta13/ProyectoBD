CREATE DATABASE database_proyect;

USE database_proyect;

CREATE TABLE Sede(
    nombreFiscal INT(10) NOT NULL,
    ubicacion VARCHAR(60) NOT NULL,
    horario DATETIME(6) NOT NULL
);


ALTER TABLE Sede
    ADD PRIMARY KEY (nombreFiscal);

ALTER TABLE Sede
    MODIFY nombreFiscal INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE Sede;