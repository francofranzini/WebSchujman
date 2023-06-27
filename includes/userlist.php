<?php

    //En este archivo php haremos una consulta a la base de datos,
    //la cual nos traerá todas los usurarios para que posteriormente,
    //mediante js, las mostremos en el frontend.

    include('conexionDB.php');
   // $userid = $_POST['userid'];

    $query = "SELECT * from usuarios";
    $result = mysqli_query($con, $query);

    if (!$result) {
        die('Query Error'. mysqli_error($con));
    }

    $json = array();
    while ($row = mysqli_fetch_array($result,1)) {
        $json[] = array(
            'id' => $row['id'],
            'email' => $row['email'],
            'isadmin' => $row['isadmin'],
        );
    }

    $jsonstring = json_encode($json);
    echo $jsonstring;
?>