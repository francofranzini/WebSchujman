<?php
// procesar_registro.php
include('conexionDB.php');
// Obtener los datos enviados por el formulario
$email = $_POST['email'];
$pass = $_POST['pass'];

function generarContrasena() {
  $longitud = 8;
  $contrasena = '';

  for ($i = 0; $i < $longitud; $i++) {
    $ascii = rand(33, 126);
    $caracter = chr($ascii);
    $contrasena .= $caracter;
  }

  return $contrasena;
}

function enviar_mail($pass){
  $asunto = "Bienvenido a tu sitio web";
  $mensaje = "Hola,\n\nGracias por registrarte en nuestro sitio web. Tu contraseña es: $pass\n\nSaludos,\nEquipo del sitio web";
  $cabeceras = "From: francofranzini12@gmail.com\r\n";
  $cabeceras .= "Reply-To: francofranzini12@gmail.com\r\n";
  $cabeceras .= "Content-Type: text/plain; charset=UTF-8\r\n";

  mail($email, $asunto, $mensaje,$cabeceras);
}

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
  $consulta = "INSERT INTO usuarios (email, pass) VALUES ('$email', '$passHash')";
  $resultado = mysqli_query($con, $consulta);

  if ($resultado) {
    // Registro exitoso
    exit();
  } else {
    // Error al insertar el usuario, mostrar un mensaje de error
    echo 'Error al registrar el usuario';
  }
}
?>