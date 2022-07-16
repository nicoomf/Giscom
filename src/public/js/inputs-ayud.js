$(document).ready(function () {

    let contadorP = 0;

    $('#agregarProfesor').click(function () {
        
        let profesor = $('#profesor').val();
        if (profesor.length != 0) {
            let liaux = `<input type="text" id="profesor${contadorP}" name="profesor"
            class="form-control col-12 my-2" value="${profesor}">`
            $('#lista_profesores').append(liaux)
            $('#profesor').val('');
            contadorP++;
        } else {
            let massage = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                  El campo seleccionado no es valido!
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
                  </div>`
            $('#massageProfesores').append(massage)
        }
    })

    $('#btn-GuardarAyud').click(function () {
        
        let profesoresAux = "[";
        console.log("El contadorP es: "+contadorP);
        
        //For de Profesores:
        for (let i = 0; i < contadorP ; i++) {
            var elemento = $(`#profesor${i}`).val();
            if (i == contadorP-1) {
                profesoresAux = `${profesoresAux}"${elemento}"]`;
            } else {
                profesoresAux = `${profesoresAux}"${elemento}",`;
            }
        }
        // console.log(profesoresAux);

        var nombre = $("#nombreAyud").val();
        var carrera = $("#carreraAyud").val();
        var proyecto = $("#proyectoAyud").val();
        var email = $("#emailAyud").val();
        var imgUrl = $("#imgUrl").val();

        var json = `{"nombre": "${nombre}","carrera": "${carrera}","proyecto": "${proyecto}","email": "${email}","imgUrl": "${imgUrl}","profesor": ${profesoresAux}}`

        // console.log(json);

        $.ajax({
            type: "POST",
            url: "/admin/save-ayud",
            data: json,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function () {
                location.href = '/admin/ayudantes';
            },
            failure: function (response) {
                response.alert(mensaje);
            }
        })

    })

})