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
  if (password_verify($pass, $contrasenaAlmacenada)){
    // Inicio de sesión exitoso
    // Crear una sesión de usuario (ver paso 3)
    session_start();
    
    $userdata = array();
   // while ($row = mysqli_fetch_array($resultado,1)) {
        $userdata[] = array(
            'id' => $fila['id'],
            'email' => $fila['email'],
            'isadmin' => $fila['isadmin']
        );
   // }
    
    $datastring = json_encode($userdata);
    
    echo $datastring;
    


    


    // Redirigir al usuario a la página principal, por ejemplo:
    //exit();
    }else
    {
      // Contraseña incorrecta
        echo NULL;
    }
  }else
  {
    // Email no encontrado
    echo NULL;
  }
