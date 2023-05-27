<?php
include ('conexionDB.php');

$sql = "CREATE TABLE IF NOT EXISTS alumnos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(60),
    edad INT NOT NULL,
    email VARCHAR (255) NOT NULL,
    dni INT NOT NULL,
    imagen TEXT
)";

$sql2 = "CREATE TABLE IF NOT EXISTS usuarios(
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre varchar(60),
  email varchar(255) NOT NULL,
  pass varchar(255) NOT NULL
)";
//
//verificar que se haya creado la tabla
//
$mysql= mysqli_query($con,$sql);
  if(!$mysql){
     die('Query Error'. mysqli_error($con));
  }
$mysql2 = mysqli_query($con, $sql2);
if(!$mysql){
  die('Query Error'. mysqli_error($con));
}

echo "tablas creadas correctamente";

?>