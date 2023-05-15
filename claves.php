<?php
//
//establecemos conexion con el servidor
//
$HOST = "ipdelserver";
$USER = "nueve";
$PASS = "9999nueve9";
$con = mysqli_connect ($HOST ,$USER , $PASS );

//
//verifica que se haya establecido la conexion con el servidor
//
if (! $con ) {
    die ("Error de Conexion (" . mysqli_connect_errno () . ") ".mysqli_connect_error () );
}

//
//creamos la base de datos
//
$db_name = "IPS";
$charset_name = "UTF8";
$collation_name = "utf8_bin";
$sql = " CREATE DATABASE IF NOT EXISTS $db_name CHARACTER SET $charset_name
COLLATE $collation_name ";

if (! $result = mysqli_query ($con , $sql )) die( mysqli_error ( $con )); //verifica que
//no haya errores en la conexion a la base de datos

mysqli_close ( $con ) ;

//
//nos conectamos con la base de datos
//
$DB = "IPS";
$con = mysqli_connect ($HOST ,$USER ,$PASS , $DB );
if (! $con ) {
    die ("Error de Conexion (".mysqli_connect_errno().") ".mysqli_connect_error () );
}
mysqli_close($con);

//creamos ahora si, la tabla que almacena datos en nuestra DB
//
//se conecta con la tabla
//
$con = mysqli_connect ($HOST ,$USER ,$PASS , $DB );
if (! $con ) {
    die("Error de Conexion (".mysqli_connect_errno () .") ".mysqli_connect_error());
}
//
//crea la tabla
//
$sql = " CREATE TABLE alumnos (id INT AUTO_INCREMENT PRIMARY KEY , nombre TEXT
NOT NULL , apellido TEXT NOT NULL , direccion VARCHAR (255) NOT NULL , curso
INT NOT NULL )";
//
//en esta linea verifica que se pueda conectar con la tabla(?)
//
if (! $result = mysqli_query ($con , $sql )) die( mysqli_error ( $con ));
mysqli_close ( $con ) ;

?>