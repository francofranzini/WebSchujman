<?php

    //En este archivo php nos encargaremos de actualizar
    //la información de una tarea.

    include('conexionDB.php');
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $edad = $_POST['edad'];
    $email = $_POST['email'];
    $dni = $_POST['dni'];
    $imagen = $_POST['imagen'];

    if (isset($nombre) && isset($edad) && isset($email)&& isset($dni)) {
        $query = "UPDATE alumnos SET nombre = '$nombre', edad = '$edad', email = '$email', dni = '$dni', imagen = '$imagen' WHERE id = $id";
        $result = mysqli_query($con, $query);

        if (!$result) {
            die('Query Error'. mysqli_error($con));
        }

        echo "Task has been updated";
    }
?>
