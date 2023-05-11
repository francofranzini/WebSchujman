<?php
$host = "localhost";
$user = "nueve";
$pass = "9999nueve9";
$base = "nueve";

$con = mysqli_connect($host, $user, $pass);

if (! $con ) {
die ("Error de Conexion (" .mysqli_connect_errno () . ") "
. mysqli_connect_error () );

}
mysqli_close ( $con ) ;
?>