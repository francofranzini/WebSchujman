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
//
//verificar que se haya creado la tabla
//
$mysql= mysqli_query($con,$sql);
  if($mysql)
  {
    echo "Tabla creada";
  }
  else{
     die('Query Error'. mysqli_error($con));
  }

?>