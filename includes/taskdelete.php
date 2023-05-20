<?php

    //En este archivo php nos encargaremos de la eliminación de registros (alumno).

    include('conexionDB.php');

    $id = $_POST['id'];
    

    if (isset($id)) {
        $query = "DELETE FROM alumnos WHERE id = $id";
        $result = mysqli_query($con, $query);

        if (!$result) {
            die('Query Error'. msqli_error($con));
        }

        echo "Task Deleted Successfully";
    }
?>