<?php
// procesar_registro.php
include('conexionDB.php');
// Obtener los datos enviados por el formulario
$email = $_POST['email'];


// Verificar si el email ya está registrado
$consulta = "SELECT * FROM usuarios WHERE email = '$email'";
$resultado = mysqli_query($con, $consulta);

if (mysqli_num_rows($resultado) > 0) {
  // El email ya está registrado, mostrar un mensaje de error
  echo 'El email ya está registrado';
} 
else{
  // El email no está registrado, crear un nuevo usuario
  $passHash = password_hash($pass, PASSWORD_DEFAULT);

  // Insertar el nuevo usuario en la base de datos
  $consulta = "INSERT INTO usuarios (nombre, email, pass) VALUES ('$nombre', '$email', '$passHash')";
  $resultado = mysqli_query($con, $consulta);

  if ($resultado) {
    // Registro exitoso
    exit();
  } else {
    // Error al insertar el usuario, mostrar un mensaje de error
    echo 'Error al registrar el usuario';
  }
}
