CREATE DATABASE database_proyect;

USE database_proyect;

CREATE TABLE Sede(
    nombreFiscal VARCHAR() NOT NULL,
    locacion VARCHAR() NOT NULL
);


ALTER TABLE Sede
    ADD PRIMARY KEY (nombreFiscal);

DESCRIBE Sede;