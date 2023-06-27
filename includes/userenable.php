<?php

    //En este archivo php nos encargaremos de actualizar
    //la información de una tarea.

    include('conexionDB.php');
    $id = $_POST['id'];
  

        $query = "UPDATE usuarios SET isadmin = 0  WHERE id = $id";
        $result = mysqli_query($con, $query);

        if (!$result) {
            die('Query Error'. mysqli_error($con));
        }

        echo "Task has been updated";
?>