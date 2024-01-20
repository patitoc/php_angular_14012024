<?php
require_once('../Models/Cliente.model.php');
$cliente = new Clase_Cliente;
switch ($_GET["op"]) {
    case 'todos':
        $datos = array(); //defino un arreglo
        $datos = $cliente->todos(); //llamo al modelo de usuarios e invoco al procedimiento todos y almaceno en una variable
        while ($fila = mysqli_fetch_assoc($datos)) { //recorro el arreglo de datos
            $todos[] = $fila;
        }
        echo json_encode($todos); //devuelvo el arreglo en formato json
        break;
        
    case "uno":
        $ID_cliente = $_POST["ID_cliente"]; //defino una variable para almacenar el id del cliente, la variable se obtiene mediante POST
        $datos = array(); //defino un arreglo
        $datos = $cliente->uno($ID_cliente); //llamo al modelo de usuarios e invoco al procedimiento uno y almaceno en una variable
        $uno = mysqli_fetch_assoc($datos); //recorro el arreglo de datos
        echo json_encode($uno); //devuelvo el arreglo en formato json
        break;
    case 'insertar':
        $Cedula = $_POST["Cedula"];
        $NombresCliente = $_POST["NombresCliente"];
        $Direccion = $_POST["Direccion"];
        $Telefono = $_POST["Telefono"];
        $Correo = $_POST["Correo"];
        $Contrasenia=$_POS["Contrasenia"];
        $Rol = $_POST["Rol"];

        $datos = array(); //defino un arreglo
        $datos = $cliente->insertar($Cedula, $NombresCliente, $Direccion, $Telefono, $Correo, $Contrasenia, $Rol); //llamo al modelo de usuarios e invoco al procedimiento insertar
        echo json_encode($datos); //devuelvo el arreglo en formato json
        break;
    case 'actualizar':
        $ID_cliente = $_POST["ID_cliente"];
        $Cedula = $_POST["Cedula"];
        $NombresCliente = $_POST["NombresCliente"];
        $Direccion = $_POST["Direccion"];
        $Telefono = $_POST["Telefono"];
        $Correo = $_POST["Correo"];
        $Contrasenia = $_POST["Contrasenia"];
        $Rol = $_POST["Rol"];

        $datos = array(); //defino un arreglo
        $datos = $cliente->actualizar($ID_cliente, $Cedula, $Nombres, $Apellidos, $Telefono, $Contrasenia, $Correo, $Rol); //llamo al modelo de usuarios e invoco al procedimiento actual
        echo json_encode($datos); //devuelvo el arreglo en formato json
        break;
    case 'eliminar':
        $ID_cliente = $_POST["ID_cliente"]; //defino una variable para almacenar el id del usuario, la variable se obtiene mediante POST
        $datos = array(); //defino un arreglo
        $datos = $cliente->eliminar($ID_cliente); //llamo al modelo de usuarios e invoco al procedimiento uno y almaceno en una variable
        echo json_encode($datos); //devuelvo el arreglo en formato json
        break;
}
