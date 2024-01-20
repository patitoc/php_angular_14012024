<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if ($method == "OPTIONS") {
    die();
}

require_once('../Models/Poliza.model.php');
$polizas = new Clase_Poliza;
switch ($_GET["op"]) {
    case 'todos':
        $datos = array(); //defino un arreglo
        $datos = $polizas->todos(); //llamo al modelo de usuarios e invoco al procedimiento todos y almaceno en una variable
        while ($fila = mysqli_fetch_assoc($datos)) { //recorro el arreglo de datos
            $todos[] = $fila;
        }
        echo json_encode($todos); //devuelvo el arreglo en formato json
        break;
    case "uno":
        $ID_poliza = $_POST["ID_poliza"]; //defino una variable para almacenar el id del usuario, la variable se obtiene mediante POST
        $datos = array(); //defino un arreglo
        $datos = $polizas->uno($ID_poliza); //llamo al modelo de usuarios e invoco al procedimiento uno y almaceno en una variable
        $uno = mysqli_fetch_assoc($datos); //recorro el arreglo de datos
        echo json_encode($uno); //devuelvo el arreglo en formato json
        break;
    case 'insertar':
        $ID_aseguradora = $_POST["ID_aseguradora"];
        $ID_cliente = $_POST["ID_cliente"];
        $Tipo_cobertura = $_POST["Tipo_cobertura"];
        $Monto = $_POST["Monto"];
        $datos = array(); //defino un arreglo
        $datos = $polizas->insertar($ID_aseguradora, $ID_cliente, $Tipo_cobertura, $Monto); //llamo al modelo de usuarios e invoco al procedimiento insertar
        echo json_encode($datos); //devuelvo el arreglo en formato json
        break;
    case 'actualizar':
        $ID_poliza = $_POST["ID_poliza"];
        $ID_aseguradora = $_POST["ID_aseguradora"];
        $ID_cliente = $_POST["ID_cliente"];
        $Tipo_cobertura = $_POST["Tipo_cobertura"];
        $Monto = $_POST["Monto"];
        $datos = array(); //defino un arreglo
        $datos = $polizas->actualizar($ID_poliza, $ID_aseguradora, $ID_cliente, $Tipo_cobertura, $Monto); //llamo al modelo de usuarios e invoco al procedimiento actual
        echo json_encode($datos); //devuelvo el arreglo en formato json
        break;

    case 'eliminar':
        $ID_poliza = $_POST["ID_poliza"]; //defino una variable para almacenar el id del usuario, la variable se obtiene mediante POST
        $datos = array(); //defino un arreglo
        $datos = $polizas->eliminar($ID_poliza); //llamo al modelo de usuarios e invoco al procedimiento uno y almaceno en una variable
        echo json_encode($datos); //devuelvo el arreglo en formato json
        break;
}
