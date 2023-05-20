<?php

    //En este archivo php haremos una consulta a la base de datos,
    //la cual nos traerá todas las tareas para que posteriormente,
    //mediante js, las mostremos en el frontend.

    include('conexionDB.php');

    $query = "SELECT * from alumnos";
    $result = mysqli_query($con, $query);

    if (!$result) {
        die('Query Error'. mysqli_error($con));
    }

    $json = array();
    while ($row = mysqli_fetch_array($result,1)) {
        $json[] = array(
            'id' => $row['id'],
            'nombre' => $row['nombre'],
            'edad' => $row['edad'],
            'email' => $row['email'],
            'dni' => $row['dni'],
            'imagen' => $row['imagen']
        );
    }

    $jsonstring = json_encode($json);
    echo $jsonstring;
?>