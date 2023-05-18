<?php

    //En este archivo php haremos una consulta a la base de datos,
    //la cual nos traerá todas las tareas para que posteriormente,
    //mediante js, las mostremos en el frontend.

    include('crear_tablas.php');

    $query = "SELECT * from task";
    $result = mysqli_query($connection, $query);

    if (!$result) {
  //      die('Query Error'. msqli_error($connection));
    }

    $json = array();
    while ($row = mysqli_fetch_array($result,1)) {
        $json[] = array(
            'id' => $row['id'],
            'name' => $row['name'],
            'description' => $row['description']
        );
    }

    $jsonstring = json_encode($json);
    echo $jsonstring;
?>