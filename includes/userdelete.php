<?php

    //En este archivo php nos encargaremos de la eliminación de registros (alumno).

    include('conexionDB.php');

    $id = $_POST['id'];
    

    if (isset($id)) {
        $query = "DELETE FROM usuario WHERE id = $id";
        $result = mysqli_query($con, $query);

        if (!$result) {
            die('Query Error'. mysqli_error($con));
        }

        echo "User Deleted Successfully";
    }
?>