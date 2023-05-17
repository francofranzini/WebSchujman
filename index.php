<html>
    <head>
        <link rel="stylesheet" href="./styles.css" type="text/css">
    </head>
    <body id="fondo">
        <div id="bloque_titulo">
            <h1 id="titulo">ACTIVIDAD 1</h1><a href="http://www.ips.edu.ar"><img id="logo" class="shake" src="logo_poli_2020.png" ></a>
        </div>
        <div style="min-height: 20px; max-height: 20px;">

        </div>
        <div>
            <table id="tabla">
                <tr>
                    <th>Nombre completo</th>
			        <th>Edad</th>
			        <th>Email</th>
			        <th>DNI</th>
			        <th>Imagen</th>
                </tr>
                <?php foreach ($alumnos as $alumno): ?>
                <tr>
                    <td><?php echo $alumno['nombre']; ?></td>
                    <td><?php echo $alumno['edad']; ?></td>
                    <td><?php echo $alumno['email']; ?></td>
                    <td><?php echo $alumno['dni']; ?></td>
                    <td><?php echo $alumno['imagen']; ?></td>
                </tr>
                <?php endforeach; ?>  
            </table>
        </div>
    </body>
</html>
