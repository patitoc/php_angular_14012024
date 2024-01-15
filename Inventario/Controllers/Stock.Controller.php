<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if ($method == "OPTIONS") {
    die();
}

require_once('../Models/Stock.model.php');
$stocks = new Clase_Stock;
switch ($_GET["op"]) {
    case 'todos':
        $datos = array(); //defino un arreglo
        $datos = $stocks->todos(); //llamo al modelo de usuarios e invoco al procedimiento todos y almaceno en una variable
        while ($fila = mysqli_fetch_assoc($datos)) { //recorro el arreglo de datos
            $todos[] = $fila;
        }
        echo json_encode($todos); //devuelvo el arreglo en formato json
        break;
    case "uno":
        $StockId = $_POST["StockId"]; //defino una variable para almacenar el id del usuario, la variable se obtiene mediante POST
        $datos = array(); //defino un arreglo
        $datos = $stocks->uno($StockId); //llamo al modelo de usuarios e invoco al procedimiento uno y almaceno en una variable
        $uno = mysqli_fetch_assoc($datos); //recorro el arreglo de datos
        echo json_encode($uno); //devuelvo el arreglo en formato json
        break;
    case 'insertar':
        $ProductoId = $_POST["ProductoId"];
        $ProveedorId = $_POST["ProveedorId"];
        $Cantidad = $_POST["Cantidad"];
        $Precio_Venta = $_POST["Precio_Venta"];


        $datos = array(); //defino un arreglo
        $datos = $stocks->insertar($ProductoId, $ProveedorId, $Cantidad, $Precio_Venta); //llamo al modelo de usuarios e invoco al procedimiento insertar
        echo json_encode($datos); //devuelvo el arreglo en formato json
        break;
    case 'actualizar':
        $StockId = $_POST["StockId"];
        $ProductoId = $_POST["ProductoId"];
        $ProveedorId = $_POST["ProveedorId"];
        $Cantidad = $_POST["Cantidad"];
        $Precio_Venta = $_POST["Precio_Venta"];
        $datos = array(); //defino un arreglo
        $datos = $stocks->actualizar($StockId, $ProductoId, $ProveedorId, $Cantidad, $Precio_Venta); //llamo al modelo de usuarios e invoco al procedimiento actual
        echo json_encode($datos); //devuelvo el arreglo en formato json
        break;

    case 'eliminar':
        $StockId = $_POST["StockId"]; //defino una variable para almacenar el id del usuario, la variable se obtiene mediante POST
        $datos = array(); //defino un arreglo
        $datos = $stocks->eliminar($StockId); //llamo al modelo de usuarios e invoco al procedimiento uno y almaceno en una variable
        echo json_encode($datos); //devuelvo el arreglo en formato json
        break;
}
