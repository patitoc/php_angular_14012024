<?php
require_once('../Config/cls_conexion.model.php');
class Clase_Poliza
{
    public function todos()
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "SELECT polizas.*, aseguradoras.Nombre as aseguradoras, clientes.NombresCliente as clientes FROM `polizas` inner JOIN clientes on polizas.ID_cliente = clientes.ID_cliente INNER JOIN aseguradoras on polizas.ID_aseguradora = aseguradoras.ID_aseguradora";
            //$cadena = "SELECT * FROM `stocks`";
            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
    public function uno($ID_poliza)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "SELECT * FROM `polizas` WHERE ID_poliza=$ID_poliza";
            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
    public function insertar($ID_aseguradora, $ID_cliente, $Tipo_cobertura, $Monto)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "INSERT INTO `polizas`( `ID_aseguradora`, `ID_cliente`, `Tipo_cobertura`, `Monto`) VALUES ('$ID_aseguradora','$ID_cliente',$Tipo_cobertura,'$Precio_Venta')";
            //INSERT INTO `polizas` (`ID_poliza`, `ID_aseguradora`, `ID_cliente`, `Tipo_cobertura`, `Monto`) VALUES (NULL, '2', '2', 'Cobertura integral', '10000');
            $result = mysqli_query($con, $cadena);
            return 'ok';
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
    public function actualizar($ID_poliza, $ID_aseguradora, $ID_cliente, $Tipo_cobertura, $Monto)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "UPDATE `polizas` SET `ID_aseguradora`='$ID_aseguradora',`ID_cliente`='$ID_cliente',`Tipo_cobertura`='$Tipo_cobertura',`Monto`='$Monto' WHERE `ID_poliza`=$ID_poliza";
            $result = mysqli_query($con, $cadena);
            return "ok";
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
    public function eliminar($ID_poliza)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "delete from polizas where ID_poliza=$ID_poliza";
            $result = mysqli_query($con, $cadena);
            return "ok";
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
}
