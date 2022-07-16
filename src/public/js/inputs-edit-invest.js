$(document).ready(function () {
    
    $('#agregarTituloEdit').click(function () {
        let listaAnt = $('#lista_titulos').val();
        // console.log(listaAnt);
        var indice = listaAnt;
        // console.log("Este es el indice: "+indice);
        let titulo = $('#titulosEdit').val()
        // console.log(titulo);
        if (titulo.length != 0) {
            let liaux = `<input type="text" id="titulos${indice}" name="titulos"
            class="form-control col-12 my-2" value="${titulo}">`
            $('#lista_titulosEdit').append(liaux)
            $('#titulosEdit').val('')
            indice++;
            // console.log("ahora el indice es:"+indice);
            $('#lista_titulos').val(`${indice}`)
            // console.log("Este es el indice despues de añadir: "+indice);
          } else {
            let massage = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                  El campo de titulo esta vacio! Ingrese un titulo para agregar...
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
                  </div>`
            $('#massageTitulos').append(massage)
          }
    })

    $('#agregarAreaEdit').click(function () {
        let listaAnt = $('#lista_areas').val();
        // console.log(listaAnt);
        var indice = listaAnt;
        // console.log("Este es el indice: "+indice);
        let area = $('#areasEdit').val()
        // console.log(titulo);
        if (area.length != 0) {
            let liaux = `<input type="text" id="areas${indice}" name="areas"
            class="form-control col-12 my-2" value="${area}">`
            $('#lista_areasEdit').append(liaux)
            $('#areasEdit').val('')
            indice++;
            // console.log("ahora el indice es:"+indice);
            $('#lista_areas').val(`${indice}`)
            // console.log("Este es el indice despues de añadir: "+indice);
          } else {
            let massage = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                  El campo de titulo esta vacio! Ingrese un titulo para agregar...
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
                  </div>`
            $('#massageAreas').append(massage)
          }
    })

    $('#btn-guardarEdit').click(function () {

        let titulosAux = "[";
        let totalTitulos = $('#lista_titulos').val();
        // console.log(totalTitulos);

        //For de Titulos:
        for (let i = 0; i < totalTitulos ; i++) {
            var elemento = $(`#titulos${i}`).val();
            if (i == totalTitulos-1) {
                titulosAux = `${titulosAux}"${elemento}"]`;
            } else {
                titulosAux = `${titulosAux}"${elemento}",`;
            }
        }
        // console.log(titulosAux);

        let areasAux = "[";
        let totalAreas = $('#lista_areas').val();
        // console.log("total Areas: "+totalAreas);

        //For de Areas:
        for (let i = 0; i < totalAreas ; i++) {
            var elemento = $(`#areas${i}`).val();
            if (i == totalAreas-1) {
                areasAux = `${areasAux}"${elemento}"]`;
            } else {
                areasAux = `${areasAux}"${elemento}",`;
            }
        }
        // console.log(areasAux);

        var nombre = $("#nombre").val();
        var imgUrl = $("#imgUrl").val();
        var departamento = $("#departamento").val();
        var email = $("#email").val();
        var numero = $("#numero").val();

        var json = `{"nombre": "${nombre}","departamento": "${departamento}","titulos": ${titulosAux},"areas": ${areasAux},"email": "${email}","numero": "${numero}", "imgUrl": "${imgUrl}"}`;
        // console.log(json);

        var id = $('#id').val(); 
        // console.log(id);

        $.ajax({
            type: "POST",
            url: `/admin/edit-invest/${id}?_method=PUT`,
            data: json,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        });

        const redirect = () => {
            location.href = '/admin/investigadores';
        }

        redirect();

    })

});