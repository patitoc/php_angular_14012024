<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if ($method == "OPTIONS") {
    die();
}

require_once('../Models/Aseguradora.model.php');
$aseguradoras = new Clase_Aseguradoras;
switch ($_GET["op"]) {
    case 'todos':
        $datos = array(); //defino un arreglo
        $datos = $aseguradoras->todos(); //llamo al modelo de usuarios e invoco al procedimiento todos y almaceno en una variable
        while ($fila = mysqli_fetch_assoc($datos)) { //recorro el arreglo de datos
            $todos[] = $fila;
        }
        echo json_encode($todos); //devuelvo el arreglo en formato json
        break;
    case "uno":
        $ID_aseguradora = $_POST["ID_aseguradora"]; //defino una variable para almacenar el id del usuario, la variable se obtiene mediante POST
        $datos = array(); //defino un arreglo
        $datos = $aseguradoras->uno($ID_aseguradora); //llamo al modelo de usuarios e invoco al procedimiento uno y almaceno en una variable
        $uno = mysqli_fetch_assoc($datos); //recorro el arreglo de datos
        echo json_encode($uno); //devuelvo el arreglo en formato json
        break;
    case 'insertar':
        $Nombre = $_POST["Nombre"];
        $Tipo_poliza = $_POST["Tipo_poliza"];
        $Cobertura = $_POST["Cobertura"];
        $datos = array(); //defino un arreglo
        $datos = $aseguradoras->insertar($Nombre, $Tipo_poliza, $Cobertura); //llamo al modelo de usuarios e invoco al procedimiento insertar
        echo json_encode($datos); //devuelvo el arreglo en formato json
        break;
    case 'actualizar':
        $ID_aseguradora = $_POST["ID_aseguradora"];
        $Nombre = $_POST["Nombre"];
        $Tipo_poliza = $_POST["Tipo_poliza"];
        $Cobertura = $_POST["Cobertura"];
        $datos = array(); //defino un arreglo
        $datos = $aseguradoras->actualizar($ID_aseguradora, $Nombre, $Tipo_poliza, $Cobertura); //llamo al modelo de usuarios e invoco al procedimiento actual
        echo json_encode($datos); //devuelvo el arreglo en formato json
        break;

    case 'eliminar':
        $ID_aseguradora = $_POST["ID_aseguradora"]; //defino una variable para almacenar el id del usuario, la variable se obtiene mediante POST
        $datos = array(); //defino un arreglo
        $datos = $aseguradoras->eliminar($ID_aseguradora); //llamo al modelo de usuarios e invoco al procedimiento uno y almaceno en una variable
        echo json_encode($datos); //devuelvo el arreglo en formato json
        break;
}
