CREATE FUNCTION `InsertCandidato` (id_candidato varchar(50),nombre_candidato varchar(75), apellido_candidato varchar(75), documento_candidato int, correo_candidato varchar(75), telefono_candidato int, curriculum_candidato longtext)
RETURNS INTEGER
BEGIN

	INSERT INTO lista_candidato ()
RETURN 1;
END
CREATE TABLE `lista_candidato` (
   `id_candidato` varchar(50) NOT NULL,
   `nombre_candidato` varchar(75) NOT NULL,
   `apellido_candidato` varchar(75) NOT NULL,
   `documento_candidato` int NOT NULL,
   `correo_candidato` varchar(75) NOT NULL,
   `telefono_candidato` int NOT NULL,
   `curriculum_candidato` longtext NOT NULL,
   `alta_candidato` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (`id_candidato`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

 IN id__candidato varchar(50),
 IN nombre__candidato varchar(75),
 IN apellido__candidato varchar(75),
 IN documento__candidato int,
 IN correo__candidato varchar(75),
 IN telefono__candidato int,
 IN curriculum__candidato longtext

 id_candidato = IFNULL(id__candidato,id_candidato), nombre_candidato = IFNULL(nombre__candidato,nombre_candidato), apellido_candidato = IFNULL(apellido__candidato,apellido_candidato), documento_candidato = IFNULL(documento__candidato,documento_candidato), correo_candidato = IFNULL(correo__candidato,correo_candidato), telefono_candidato = IFNULL(telefono__candidato,telefono_candidato), curriculum_candidato = IFNULL(curriculum__candidato,curriculum_candidato)