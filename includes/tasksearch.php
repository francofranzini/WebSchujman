<?php

    //En este archivo php nos encargaremos de buscar y devolver las tareas
    //al frontend con un determinado nombre.

    include('conexionDB.php');

    $search = $_POST['search'];

    //isset: determina si una variable está definida y no es null.
    if (isset($search)) {
        //Con real_escape_string evitamos inyección SQL.
        $search = $connection->real_escape_string($search);
        if (!empty($search)) {
            $query = "SELECT * FROM task WHERE name LIKE '$search%'";
            $result = mysqli_query($con, $query);

            if (!$result) {
                die('Query Error'. mysqli_error($con));
            }

            //Vamos a recorrer el resultado de la query para luego
            //escribir los datos recibidos en un formato JSON.
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
            //Para enviarlo al frontend necesito convertirlo a String.
            //Por lo tanto, paso de JSON a String.
            //Luego, en el frontend lo que haré será volver a convertirlo a un JSON.
            $jsonstring = json_encode($json);
            echo $jsonstring; //El string con información que se manda al frontend.
        }
    }
?>