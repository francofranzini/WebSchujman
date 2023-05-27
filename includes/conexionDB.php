<?php
$HOST = "localhost";
$USER = "root";
$PASS = "";
$DB = "nueve";
//
//nos conectamos con la base de datos
//
$con = mysqli_connect ($HOST ,$USER ,$PASS , $DB );
if (!$con) {
    die("Error de Conexion (" . mysqli_connect_errno() . ") " . mysqli_connect_error());
}
?>