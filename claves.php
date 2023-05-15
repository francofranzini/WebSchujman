<?php

//establecemos conexion con el servidor
$HOST = "ipdelserver";
$USER = "nueve";
$PASS = "9999nueve9";
$con = mysqli_connect ($HOST ,$USER , $PASS );

if (! $con ) {
    die ("Error de Conexion (" . mysqli_connect_errno () . ") ".mysqli_connect_error () );
    }

mysqli_close( $con );

//creamos la base de datos
$db_name = "IPS ";
$charset_name = " UTF8 ";
$collation_name = " utf8_bin ";
$sql = " CREATE DATABASE IF NOT EXISTS $db_name CHARACTER SET $charset_name
COLLATE $collation_name ";

if (! $result = mysqli_query ($con , $sql )) die( mysqli_error ( $con ));

mysqli_close ( $con ) ;


//nos conectamos con la base de datos
$HOST = "ipdelservidor";
$USER = "nueve";
$PASS = "9999nueve9";
$DB = "IPS";
$con = mysqli_connect ($HOST ,$USER ,$PASS , $DB );
if (! $con ) {
    die ("Error de Conexion (".mysqli_connect_errno().") ".mysqli_connect_error () );
}



?>