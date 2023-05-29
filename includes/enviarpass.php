<?php

// Enviar el correo electrónico al usuario con la contraseña

$destinatario = $_POST['email'];
$asunto = "Bienvenido a tu sitio web";
$mensaje = "Hola,\n\nGracias por registrarte en nuestro sitio web. Tu contraseña es: $contrasena\n\nSaludos,\nEquipo del sitio web";

// Configurar las cabeceras del correo
$cabeceras = "From: tu_nombre_de_correo@example.com\r\n";
$cabeceras .= "Reply-To: tu_nombre_de_correo@example.com\r\n";
$cabeceras .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Enviar el correo electrónico
if (mail($destinatario, $asunto, $mensaje, $cabeceras)) {
  // El correo electrónico se envió correctamente
  echo "Se ha enviado un correo electrónico con la contraseña al usuario";
} else {
  // Ocurrió un error al enviar el correo electrónico
  echo "No se pudo enviar el correo electrónico. Por favor, intenta nuevamente.";
}
?>