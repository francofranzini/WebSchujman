//En el siguiente codigo encontraremos distintas funciones del tipo 
//JQuery, las cuales ejecutan distintas acciones a partir de distintos selectores.
/*  
    $("#id").action() 
    $(".class").action()
Selectores básicos: #id, .class, element
Acciones básicas: .click(), .hide(), .show(), .addClass(), .removeClass(), .text(), .html(), .val(), .animate()
Eventos: .ready(), .click(), .change(), .mouseenter(), etc.
Efectos: .show(), .hide(), .fadeIn(), .fadeOut(), .slideUp(), .slideDown()
Ajax: .ajax(), .get(), .post()

*/

//las siguientes funciones se ejecutan con una sintaxis similar
//$(objeto).accionBasica('evento','selector','funcion' {

//la siguiente funcion se ejecuta cada vez que se abre el documento
//de esta forma la funcion fetchTasks() se ejecuta siempre que se carga la pagina
$(document).ready(function () {
    
    let edit = false;
    fetchTasks ();

    
    //FUNCIONA
    function fetchTasks () {
        $.ajax({
            url: 'includes/tasklist.php',
            type: 'GET',
            success: function (response){
                let tasks = JSON.parse(response);
                let template = '';
                tasks.forEach(task => {
                    template += `
                        <tr class="user-tr" id="${task.id}">
                            <td class="name-td">${task.nombre}</td>
                            <td class="age-td">${task.edad}</td>
                            <td class="email-td">${task.email}</td>
                            <td class="id-td">${task.dni}</td>
                            <td class="photo-td">${task.imagen}</td> 
                            <td class="edit">
                            <svg class="edit-button" width="23" viewBox="0 0 11 11" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.68804 9.28265C1.77469 9.37763 1.89726 9.43184 2.02583 9.43207C2.03912 9.43207 2.05333 9.43161 2.06754 9.43023L3.30229 9.31794L8.48833 4.13282L6.86721 2.51215L1.67979 7.69773L1.5675 8.93248C1.55593 9.06105 1.59978 9.18844 1.68804 9.28265Z"
                                    fill="#2D2D2D" />
                            </svg>
                            <svg class="delete-button" width="18" viewBox="0 0 9 10" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.73075 9.1538H2.49999C2.03267 9.1538 1.65383 8.77496 1.65383 8.30765V2.80765H0.807678V1.96149H2.49999V1.53841C2.49999 1.0711 2.87882 0.692261 3.34614 0.692261H5.8846C6.35192 0.692261 6.73075 1.0711 6.73075 1.53841V1.96149H8.42306V2.80765H7.57691V8.30765C7.57691 8.77496 7.19807 9.1538 6.73075 9.1538ZM2.49999 2.80765V8.30765H6.73075V2.80765H2.49999ZM3.34614 1.53841V1.96149H5.8846V1.53841H3.34614ZM5.8846 7.46149H5.03845V3.6538H5.8846V7.46149ZM4.19229 7.46149H3.34614V3.6538H4.19229V7.46149Z"
                                    fill="#B02727" />
                            </svg>
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
    
    //HACER
    $('#search').keyup(function (e) {
        //Busco el input que tiene como id 'search' y
        //obtengo su contenido.

        let search = $('#search').val();

        if (search) {
            console.log("hl");
            //Vamos a utilizar un método JQuery llamado ajax.
            //Dicho método nos permite hacer una petición a un servidor.
            //Toma un objeto como parámetro.
            $.ajax({
                url: 'includes/tasksearch.php', //Lugar donde hacer la petición.
                type: 'POST', //Tipo de petición.
                data: {search: search}, //La información que le envio al servidor.
                success: function(response) {
                    let tasks = JSON.parse(response);   //Si el servidor respondió correctamente
                    //console.log(tasks);               //tengo la información que me devolvió el mismo.
                                                        //Ver que ya no tengo un string, sino que tengo un obj>
                    let template = '';
                    tasks.forEach(task => {
                        template += `<li class="list-group-item">${task.nombre}</li>`;
                    });

                    $('#task-result ul').html(template);
                },
                error: function (jqXHR, exception) {
                    console.log(jqXHR);
                }
            });
        }
        else {
            $('#task-result ul').html('');
        }
    });

    //para que se ejecute esto, se debe configurar en el frontend los objetos
    //con clase '.task-delete' para que se ejecute esta funcion
    //FUNCIONA
    $(document).on('click', '.delete-button', function (e) {
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

    $('#save').submit(function (e) {
        e.preventDefault(); //Hacemos que no se refresque la página por defecto.
        let postData = { //Lo que le enviaremos al servidor.
            id: $('id').val(),
            nombre: $('#nombre').val(),
            edad: $('#edad').val(),
            email: $('#email').val(),
            dni: $('#dni').val(),
            imagen: $('#imagen').val()
        };
        //console.log(postData);
        let url = edit === false ? 'task-add.php' : 'task-update.php';
        $.ajax({
            url: url,
            type: 'POST',
            data: postData,
            success: function(response) {
                edit = false;
                fetchTasks ();
                //Al agregar una nueva task y tocar el botón "Save Task",
                //reseteo el formulario.
                $('#task-form').trigger('reset');
            },
            error: function (jqXHR, exception) {
                console.log(jqXHR);
            }
        });

    });


});
