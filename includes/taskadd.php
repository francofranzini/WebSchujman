<?php

    //En este archivo php nos encargaremos de añadir un nueva tarea
    //en nuestra base de datos.

    include('conexionDB.php');

    $nombre = $_POST['nombre'];
    $edad = $_POST['edad'];
    $email = $_POST['email'];
    $dni = $_POST['dni'];
    $imagen = $_POST['imagen'];

    //isset: determina si una variable está definida y no es null.
    if (isset($nombre) && isset($edad) && isset($email)&& isset($dni)) {
        //Con real_escape_string evitamos inyección SQL.
        $nombre = $con->real_escape_string($nombre);
        
        if (!empty($nombre)) {
            $query = "INSERT into alumnos (nombre, edad, email, dni) VALUES ('$nombre', '$edad', '$email', '$dni')";
            $result = mysqli_query($con, $query);

            if(!$result) {
                die('Query Error'. msqli_error($con));
            }

            echo "Task Added Successfully";
        }
    }
?>
