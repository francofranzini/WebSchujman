<?php
// procesar_login.php
include('conexionDB.php');
// Obtener los datos enviados por el formulario
$email = $_POST['email'];
$pass = $_POST['pass'];

// Realizar la validación de usuario y contraseña
// (asumiendo que tienes una conexión a la base de datos establecida)
$consulta = "SELECT * FROM usuarios WHERE email = '$email'";
$resultado = mysqli_query($con, $consulta);

// Verificar si se encontró un registro con el email proporcionado
if (mysqli_num_rows($resultado) == 1) {
  $fila = mysqli_fetch_assoc($resultado);
  $contrasenaAlmacenada = $fila['pass'];

  // Verificar si la contraseña ingresada coincide con la almacenada
  if (password_verify($pass, $contrasenaAlmacenada)) {
    // Inicio de sesión exitoso
    // Crear una sesión de usuario (ver paso 3)
    session_start();
    $_SESSION['email'] = $email;
    $_SESSION['id'] = $fila['id'];
    $_SESSION['nombre'] = $fila['nombre'];
    // Redirigir al usuario a la página principal, por ejemplo:
    exit();
  } else {
    // Contraseña incorrecta
    // Manejar el error o mostrar un mensaje de error al usuario
    echo 'Contraseña incorrecta';
  }
} else {
  // Email no encontrado
  // Manejar el error o mostrar un mensaje de error al usuario
  echo 'Email no encontrado';
}
