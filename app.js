
//la siguiente funcion se ejecuta cada vez que se abre el documento
//de esta forma la funcion fetchTasks() se ejecuta siempre que se carga la pagina
$(document).ready(function () {
    
    let edit = false;
    fetchTasks ();

    

    function fetchTasks () {
        $.ajax({
            url: 'includes/tasklist.php',
            type: 'GET',
            success: function (response){
                let tasks = JSON.parse(response);
                let template = '';
                tasks.forEach(task => {
                    template += `
                        <tr taskId="${task.id}">
                            <td>${task.nombre}</td>
                            <td>${task.edad}</td>
                            <td>${task.email}</td>
                            <td>${task.dni}</td>
                            <td>${task.imagen}</td> 
                            <td class="align-middle">
                                <button class="task-delete btn btn-danger">
                                    Delete
                                </button>
                            </td>

                        </tr>`;
                });
                //por cada forEach en tasks, se agrega a template una linea <tr> html con los
                //datos de cada task en tasks (alumno en alumnos)
                $('#all-tasks').html(template);
            },
            error: function (jqXHR, exception) {
                console.log(jqXHR);
            }
        })    
    }
    //para que se ejecute esto, se debe configurar en el frontend los objetos
    //con clase '.task-delete' para que se ejecute esta funcion
    $(document).on('click', '.task-delete', function (e) {
        if (confirm('Esta seguro de que quiere borrar esto?')) {
            let element = $(this)[0].parentElement.parentElement;
            let id = $(element).attr('id');

            $.ajax({
                url: 'includes/taskdelete.php',
                type: 'POST',
                data: {id: id},
                success: function (response) {
                    fetchTasks();     
                    console.log(response);   
                },
                error: function (jqXHR, exception) {
                    console.log(jqXHR);
                }
            });      
        }
    });

    $(document).on('click', '.task-item', function () {
        //element es el registro del boton que fue clickeado (linea 27)
        //la relacion seria boton <- table data (<td>) <- table row (<tr>)
        let element = $(this)[0].parentElement.parentElement;
        //en
        let id = $(element).attr('taskId');

        $.ajax({
            url: 'includes/taskitem.php',
            type: 'POST',
            data: {id: id},
            success: function (response) {
                let task = JSON.parse(response);
                $('#id').val(task.id); 
                $('#name').val(task.nombre);
                $('#edad').val(task.edad);
                $('#email').val(task.email);
                $('#dni').val(task.dni);
                $('#imagen').val(task.imagen);
                edit = true;    
            },
            error: function (jqXHR, exception) {
                console.log(jqXHR);
            }
        });      
    });
});
