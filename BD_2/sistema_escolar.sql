DROP TABLE IF EXISTS alumnos;
CREATE TABLE IF NOT EXISTS alumnos (
    expediente BIGINT NOT NULL UNIQUE CHECK (LENGTH(expediente)=9 AND expediente > 0),
    app1 VARCHAR(255) NOT NULL CHECK(LENGTH(TRIM(app1))>0),
    app2 VARCHAR(255) CHECK(app2 IS NULL OR LENGTH(TRIM(app2))>0),
    nombres VARCHAR(255) NOT NULL CHECK(LENGTH(TRIM(nombres)) > 0),
    correo VARCHAR(255) NOT NULL UNIQUE,
    fecha_nacimiento DATE NOT NULL,
    sexo ENUM('Mujer','Hombre','No Binario') NOT NULL,
    CHECK(correo=CONCAT('a',expediente,'@unison.mx'))
);


-- El siguiente trigger elimina los espacios en blanco en la primera columna antes de hacer el insert

DELIMITER $$

CREATE TRIGGER bi_alumnos_app1
BEFORE INSERT ON alumnos
FOR EACH ROW
BEGIN
    SET NEW.app1 = TRIM(NEW.app1);
END$$

DELIMITER ;
-- 224210435

-- =============================================
-- PRUEBAS DE INTEGRIDAD (deben fallar)
-- =============================================

-- No expediente nulo (debe fallar: NOT NULL)
-- INSERT INTO alumnos VALUES(null, 'Abril','Garcia','Jose Humberto','a0@unison.mx','2003-05-15','Hombre');

-- Expediente no debe ser 0 (debe fallar: CHECK expediente > 0)
-- INSERT INTO alumnos VALUES(0, 'Abril','Garcia','Jose Humberto','a0@unison.mx','2003-05-15','Hombre');

-- No expedientes negativos (debe fallar: CHECK expediente > 0 y LENGTH != 9)
-- INSERT INTO alumnos VALUES(-22421043, 'Abril','Garcia','Jose Humberto','a-22421043@unison.mx','2003-05-15','Hombre');

-- Registros con espacios en blanco en app2 que solo son espacios (debe fallar: CHECK)
-- INSERT INTO alumnos VALUES(224210439, 'Abril', '                 ','Jose Humberto','a224210439@unison.mx','2001-12-05','No Binario');

-- Registros con espacios en blanco en nombres (debe fallar: CHECK)
-- INSERT INTO alumnos VALUES(224210441, 'Abril', 'Garcia','       ','a224210441@unison.mx','2002-04-22','Mujer');

-- Registros con nombres nulos (debe fallar: NOT NULL)
-- INSERT INTO alumnos VALUES(224210442, 'Abril', 'Garcia',NULL,'a224210442@unison.mx','2003-10-08','Hombre');

-- =============================================
-- INSERTS VALIDOS
-- =============================================

-- Registros con espacios en blanco en app1 (el trigger hace TRIM, deben pasar)

