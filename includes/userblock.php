<?php

    //En este archivo php nos encargaremos de actualizar
    //la información de una tarea.

    include('conexionDB.php');
    $id = $_POST['id'];
  
 

    if (isset($nombre) && isset($edad) && isset($email)&& isset($dni)) {
        $query = "UPDATE usuarios SET isadmin = 2  WHERE id = $id";
        $result = mysqli_query($con, $query);

        if (!$result) {
            die('Query Error'. mysqli_error($con));
        }

        echo "Task has been updated";
    }
?>