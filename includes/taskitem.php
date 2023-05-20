<?php

    //En este archivo php nos encargaremos de devolver
    //la información de un alumno dado un id.

    include('conexionDB.php');

    $id = $_POST['id'];

    if (isset($id)) {
        $query = "SELECT * FROM alumnos WHERE id = $id";
        $result = mysqli_query($con, $query);

        if (!$result) {
            die('Query Error'. msqli_error($con));

        }

        $json = array();
        while ($row = mysqli_fetch_array($result)) {
            $json[] = array(
            'nombre' => $row['nombre'],
            'edad' => $row['edad'],
            'email' => $row['email'],
            'dni' => $row['dni'],
            'imagen' => $row['imagen']
            );
        }

        $jsonstring = json_encode($json[0]);

        echo $jsonstring;
    }
?>