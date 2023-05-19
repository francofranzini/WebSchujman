
//la siguiente funcion se ejecuta cada vez que se abre el documento
//de esta forma la funcion fetchTasks() se ejecuta siempre que se carga la pagina
$(document).ready(function () {
    let edit = false;
    fetchTasks ();

    function fetchTasks () {
        $.ajax({
            url: 'tasklist.php',
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

    $(document).on('click', '.task-delete', function (e) {
        if (confirm('Esta seguro de que quiere borrar esto?')) {
            let element = $(this)[0].parentElement.parentElement;
            let id = $(element).attr('taskId');

            $.ajax({
                url: 'task-delete.php',
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
        let element = $(this)[0].parentElement.parentElement;
        let id = $(element).attr('taskId');

        $.ajax({
            url: 'task-data.php',
            type: 'POST',
            data: {id: id},
            success: function (response) {
                let task = JSON.parse(response);
                $('#taskId').val(task.id); 
                $('#name').val(task.name);
                $('#description').val(task.description);  
                edit = true;    
            },
            error: function (jqXHR, exception) {
                console.log(jqXHR);
            }
        });      
    });
});
