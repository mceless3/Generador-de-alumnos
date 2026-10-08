var salida= "";

const sexos = ["Mujer", "Hombre", "No Binario"];

function fechaAleatoria() {
    var inicio = new Date(1998, 0, 1);
    var fin = new Date(2006, 11, 31);
    var fecha = new Date(inicio.getTime() + Math.random() * (fin.getTime() - inicio.getTime()));
    var anio = fecha.getFullYear();
    var mes = String(fecha.getMonth() + 1).padStart(2, '0');
    var dia = String(fecha.getDate()).padStart(2, '0');
    return `${anio}-${mes}-${dia}`;
}

const apepat = [
    "Hernández", "García", "Martínez", "López", "González",
    "Pérez", "Rodríguez", "Sánchez", "Ramírez", "Cruz",
    "Flores", "Gómez", "Morales", "Vázquez", "Jiménez",
    "Reyes", "Díaz", "Torres", "Gutiérrez", "Ruiz",
    "Mendoza", "Aguilar", "Ortiz", "Moreno", "Castillo",
    "Romero", "Álvarez", "Méndez", "Chávez", "Rivera",
    "Juárez", "Domínguez", "Herrera", "Medina", "Ramos",
    "Castro", "Ortega", "Vargas", "Santiago", "Salazar",
    "Rojas", "De la Cruz", "Guzmán", "Franco", "Silva",
    "Luna", "Muñoz", "Cabrera", "Delgado", "Contreras",
    "León", "Ríos", "Estrada", "Bautista", "Meza",
    "Gallegos", "Miranda", "Carrillo", "Valencia", "Nava",
    "Lara", "Pacheco", "Soto", "Cervantes", "Robledo",
    "Esquivel", "Salinas", "Maldonado", "Marín", "Calderón",
    "Lugo", "Rosas", "Padilla", "Fuentes", "Espinoza",
    "Rangel", "Acosta", "Sandoval", "Villegas", "Valdés",
    "Alfaro", "Camacho", "Guerrero", "Lozano", "Guevara",
    "Galindo", "Beltrán", "Orozco", "Pineda", "Navarro",
    "Parra", "Villalobos", "Duarte", "Serrano", "Ávila",
    "Ibarra", "Téllez", "Rocha", "Trejo", "Esparza"
];
const apemat = [
    "NULL", "Petrov", "Sidorov", "Smirnov", "Kuznetsov", "Popov", "Vasiliev", "Sokolov", "Mikhailov", "Novikov",
    "Fedorov", "Morozov", "Volkov", "Alekseev", "Lebedev", "Semenov", "Egorov", "Pavlov", "Kozlov", "Stepanov",
    "Nikolaev", "Orlov", "Andreev", "Makarov", "Zakharov", "Zaitsev", "Soloviev", "Belov", "Komarov", "Grigoriev",
    "Romanov", "Pakhomov", "Antonov", "Tarasov", "Medvedev", "Zhukov", "Frolov", "Baranov", "Kulikov", "Gavrilov",
    "Yakovlev", "Kalinin", "Chernov", "Bykov", "Korolev", "Ponomarev", "Gusev", "Danilov", "Zorin", "Belyaev",
    "Demidov", "Larionov", "Timofeev", "Savelyev", "Ignatov", "Kapustin", "Ryabov", "Dorofeev", "Melnikov", "Fomin",
    "Tikhonov", "Golubev", "Sergeev", "Mironov", "Lapshin", "Seleznev", "Prokhorov", "Ustinov", "Borodin", "Martynov",
    "Krylov", "Ovchinnikov", "Shestakov", "Losev", "Dyakov", "Pankratov", "Sapozhnikov", "Kiselev", "Rozhkov", "Kravtsov",
    "Shiryaev", "Klimov", "Fadeev", "Chistyakov", "Trofimov", "Eliseev", "Nazarov", "Goncharov", "Karpov", "Lytkin",
    "Bondarev", "Fedoseev", "Sukhanov", "Pisarev", "Lukyanov", "Ostrovsky", "Meshkov", "Shuvalov", "Plotnikov", "Gordeev"
];
const nombre1 = [
    "Juan", "José", "Luis", "Carlos", "Miguel", "Pedro", "Jorge", "Fernando", "Ricardo", "Alejandro",
    "Daniel", "David", "Eduardo", "Francisco", "Manuel", "Roberto", "Andrés", "Sergio", "Raúl", "Iván",
    "Héctor", "Arturo", "Alberto", "Mario", "Óscar", "Rubén", "Enrique", "Javier", "Adrián", "Esteban",
    "Diego", "Emilio", "Rodrigo", "Guillermo", "Salvador", "Hugo", "Alfonso", "Ramón", "Ignacio", "Tomás",
    "Benjamín", "Sebastián", "Pablo", "Leonardo", "Mauricio", "Ulises", "Federico", "Ernesto", "César", "Fabián",
    "Gael", "Damián", "Bruno", "Alan", "Axel", "Iker", "Kevin", "Jonathan", "Brian", "Edgar",
    "Ángel", "Jesús", "Cristian", "Marco", "Omar", "Ismael", "Abraham", "Samuel", "Josué", "Emanuel",
    "Noé", "Ezequiel", "Elías", "Matías", "Saúl", "Uriel", "Elian", "Lorenzo", "Nicolás", "Thiago",
    "Emiliano", "Santiago", "Máximo", "Camilo", "Gael", "Valentín", "Julián", "Cristóbal", "Iván", "Bautista",
    "Alexis", "Kevin", "Brayan", "Brandon", "Dylan", "Ian", "Álvaro", "Darío", "Rafael", "Teodoro"
];
const nombre2 = [
    "Jean", "Pierre", "Paul", "Louis", "Jacques", "Michel", "Claude", "André", "Philippe", "Bernard",
    "François", "Julien", "Nicolas", "Thomas", "Antoine", "Sébastien", "Alexandre", "Mathieu", "Christophe", "Laurent",
    "Olivier", "Damien", "Romain", "Victor", "Hugo", "Lucas", "Maxime", "Baptiste", "Éric", "Loïc",
    "Théo", "Clément", "Florian", "Adrien", "Guillaume", "Benjamin", "Jérôme", "Rémi", "Yann", "Cédric",
    "Sophie", "Marie", "Camille", "Julie", "Claire", "Élise", "Chloé", "Manon", "Lucie", "Pauline",
    "Laura", "Émilie", "Caroline", "Sandrine", "Valérie", "Nathalie", "Isabelle", "Catherine", "Brigitte", "Monique",
    "Amandine", "Aurélie", "Justine", "Mélanie", "Anaïs", "Océane", "Margaux", "Noémie", "Léa", "Inès",
    "Zoé", "Agathe", "Maëlle", "Élodie", "Clara", "Romane", "Salomé", "Maëva", "Tiphaine", "Constance",
    "Gabriel", "Arthur", "Raphaël", "Nathan", "Enzo", "Kylian", "Noah", "Adam", "Samuel", "Eliott",
    "Lina", "Nina", "Aya", "Yasmine", "Imane", "Farah", "Sarah", "Nour", "Mariam", "Leïla"
];
function generar() {
    var opcion = document.getElementById("opcion").value;

    switch (opcion) {
        case "1": generarSQL(); break;
        case "2": generarSQLpostgresql(); break;
        case "3": generarSQLCSV(); break;
        case "4": generarJSON(); break;

    }


}

function generarSQL() {
    salida = "";
    var matricula = 224250000;
    var nombre = "";
    var registros = 0;
    registros = document.getElementById('registros').value;
    var nom2 = "";
    for (let i = 0; i < registros; i++) {
        let app1 = apepat[Math.floor(Math.random() * apepat.length)];
        let app2 = apemat[Math.floor(Math.random() * apemat.length)];
        let tieneSegundoNombre = Math.random() < 0.5;
        let sexo = sexos[Math.floor(Math.random() * sexos.length)];
        let fecha = fechaAleatoria();
        let segundoApellido;
        if (app2 === "NULL") {
            segundoApellido = "NULL";
        } else {
            segundoApellido = `UPPER('${app2}')`;
        }
        nombre = "";
        nom2 = "";
        if (tieneSegundoNombre == 0) {
            nombre = nombre1[Math.floor(Math.random() * nombre1.length)];
        } else {
            nombre = nombre1[Math.floor(Math.random() * nombre1.length)];
            nom2 = nombre2[Math.floor(Math.random() * nombre2.length)];
            nombre += ` ${nom2}`;
        }
        salida += `INSERT INTO alumnos VALUES(${matricula + i},UPPER('${app1}'), ${segundoApellido}, '${nombre}','a${matricula + i}@unison.mx','${fecha}','${sexo}');\n`;
    }
    document.getElementById("salida").innerHTML = salida;
}
function generarSQLpostgresql() {
    var ddl = "";
    ddl += "-- Configurar encoding UTF-8 para soporte de acentos\n";
    ddl += "\\encoding UTF8\n";
    ddl += "SET client_encoding TO 'UTF8';\n\n";
    ddl += "-- Crear tipo ENUM para sexo\n";
    ddl += "DROP TYPE IF EXISTS sexo_enum CASCADE;\n";
    ddl += "CREATE TYPE sexo_enum AS ENUM ('Mujer', 'Hombre', 'No Binario');\n\n";
    ddl += "-- Crear tabla alumnos\n";
    ddl += "DROP TABLE IF EXISTS alumnos;\n";
    ddl += "CREATE TABLE IF NOT EXISTS alumnos (\n";
    ddl += "    expediente BIGINT NOT NULL UNIQUE CHECK (LENGTH(CAST(expediente AS TEXT)) = 9 AND expediente > 0),\n";
    ddl += "    app1 VARCHAR(255) NOT NULL CHECK(LENGTH(TRIM(app1)) > 0),\n";
    ddl += "    app2 VARCHAR(255) CHECK(app2 IS NULL OR LENGTH(TRIM(app2)) > 0),\n";
    ddl += "    nombres VARCHAR(255) NOT NULL CHECK(LENGTH(TRIM(nombres)) > 0),\n";
    ddl += "    correo VARCHAR(255) NOT NULL UNIQUE,\n";
    ddl += "    fecha_nacimiento DATE NOT NULL,\n";
    ddl += "    sexo sexo_enum NOT NULL,\n";
    ddl += "    CHECK(correo = 'a' || CAST(expediente AS TEXT) || '@unison.mx')\n";
    ddl += ");\n\n";
    ddl += "-- Funcion y trigger para TRIM en app1\n";
    ddl += "CREATE OR REPLACE FUNCTION fn_trim_app1()\n";
    ddl += "RETURNS TRIGGER AS $$\n";
    ddl += "BEGIN\n";
    ddl += "    NEW.app1 := TRIM(NEW.app1);\n";
    ddl += "    RETURN NEW;\n";
    ddl += "END;\n";
    ddl += "$$ LANGUAGE plpgsql;\n\n";
    ddl += "CREATE TRIGGER bi_alumnos_app1\n";
    ddl += "BEFORE INSERT ON alumnos\n";
    ddl += "FOR EACH ROW\n";
    ddl += "EXECUTE FUNCTION fn_trim_app1();\n\n";
    var inserts = "";
    var matricula = 224250000;
    var nombre = "";
    var registros = 0;
    registros = document.getElementById('registros').value;
    var nom2 = "";
    for (let i = 0; i < registros; i++) {
        let app1 = apepat[Math.floor(Math.random() * apepat.length)];
        let app2 = apemat[Math.floor(Math.random() * apemat.length)];
        let tieneSegundoNombre = Math.random() < 0.5;
        let sexo = sexos[Math.floor(Math.random() * sexos.length)];
        let fecha = fechaAleatoria();
        let segundoApellido;
        if (app2 === "NULL") {
            segundoApellido = "NULL";
        } else {
            segundoApellido = `UPPER('${app2}')`;
        }
        nombre = "";
        nom2 = "";
        if (tieneSegundoNombre == 0) {
            nombre = nombre1[Math.floor(Math.random() * nombre1.length)];
        } else {
            nombre = nombre1[Math.floor(Math.random() * nombre1.length)];
            nom2 = nombre2[Math.floor(Math.random() * nombre2.length)];
            nombre += ` ${nom2}`;
        }
        inserts += `INSERT INTO alumnos VALUES(${matricula + i},UPPER('${app1}'), ${segundoApellido}, '${nombre}','a${matricula + i}@unison.mx','${fecha}','${sexo}');\n`;
    }
    salida = ddl + inserts;
    document.getElementById("salida").innerText = inserts;
}
function generarSQLCSV() {
    salida = "matricula, apellido1, apellido2, nombre, correo, fecha_nacimiento, sexo\n";
    var matricula = 224250000;
    var nombre = "";
    var registros = 0;
    registros = document.getElementById('registros').value;
    var nom2 = "";
    for (let i = 0; i < registros; i++) {
        let app1 = apepat[Math.floor(Math.random() * apepat.length)];
        let app2 = apemat[Math.floor(Math.random() * apemat.length)];
        let tieneSegundoNombre = Math.random() < 0.5;
        let sexo = sexos[Math.floor(Math.random() * sexos.length)];
        let fecha = fechaAleatoria();
        let segundoApellido;
        if (app2 === "NULL") {
            segundoApellido = "NULL";
        } else {
            segundoApellido = `${app2}`;
        }
        nombre = "";
        nom2 = "";
        if (tieneSegundoNombre == 0) {
            nombre = nombre1[Math.floor(Math.random() * nombre1.length)];
        } else {
            nombre = nombre1[Math.floor(Math.random() * nombre1.length)];
            nom2 = nombre2[Math.floor(Math.random() * nombre2.length)];
            nombre += ` ${nom2}`;
        }
        salida += `${matricula + i},${app1},${segundoApellido},${nombre},a${matricula + i}@unison.mx,${fecha},${sexo}\n`;
    }
    // salida = salida.slice(0, 0);
    document.getElementById("salida").innerHTML = salida;
}
function generarJSON() {
    var matricula = 224250000;
    var nombre = "";
    var registros = 0;
    registros = document.getElementById('registros').value;
    var nom2 = "";
    var datos = [];
    for (let i = 0; i < registros; i++) {
        let app1 = apepat[Math.floor(Math.random() * apepat.length)];
        let app2 = apemat[Math.floor(Math.random() * apemat.length)];
        let tieneSegundoNombre = Math.random() < 0.5;
        console.log(tieneSegundoNombre);
        let segundoApellido;
        if (app2 === "NULL") {
            segundoApellido = null;
        } else {
            segundoApellido = app2;
        }
        nombre = "";
        nom2 = "";
        if (tieneSegundoNombre == 0) {
            nombre = nombre1[Math.floor(Math.random() * nombre1.length)];
        } else {
            nombre = nombre1[Math.floor(Math.random() * nombre1.length)];
            nom2 = nombre2[Math.floor(Math.random() * nombre2.length)];
            nombre += ` ${nom2}`;
        }
        datos.push({
            matricula: matricula + i,
            apellido1: app1,
            apellido2: segundoApellido,
            nombre: nombre,
            correo: `a${matricula + i}@unison.mx`,
            fecha_nacimiento: fechaAleatoria(),
            sexo: sexos[Math.floor(Math.random() * sexos.length)]
        });
    }
    salida = JSON.stringify(datos, null, 4);
    document.getElementById("salida").innerText = salida;
}

function guardarArchivo() {
        var var1 = document.createElement("a");
        var bom = new Uint8Array([0xEF, 0xBB, 0xBF]); // UTF-8 BOM
        var blob = new Blob([bom, salida], {type: "text/plain;charset=UTF-8"});
        var url = URL.createObjectURL(blob);
        var1.setAttribute("href", url);

            var opcion = document.getElementById("opcion").value;

    switch (opcion) {
        case "1": var1.setAttribute("download", "sistema_escolar.sql");alert("Generando archivo SQL");break;
        case "2":var1.setAttribute("download", "sistema_escolar_pg.sql");alert("Generando archivo Postgres");break;
        case "3":var1.setAttribute("download", "sistema_escolar.csv");alert("Generando archivo CSV");break;
        case "4":var1.setAttribute("download", "sistema_escolar.json");alert("Generando archivo JSON");break;

    }

        var1.style.display = "none";
        document.body.appendChild(var1);
        var1.click();
        document.body.removeChild(var1);
        URL.revokeObjectURL(url);

}
