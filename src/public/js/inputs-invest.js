$(document).ready(function () {
    var arr_titulos = [];
    $("#agregarTitulo").click(function () {
        let titulo = $("#titulos").val();
        console.log(arr_titulos);
        if(titulo.length != 0) {
            arr_titulos.push(titulo);
            let liaux = `<li class="list-group-item">${titulo}</li>`;
            $("#lista_titulos").append(liaux);
            $("#titulos").val("");
        } else {
            let massage = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
            El campo de titulo esta vacio! Ingrese un titulo para agregar...
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>`;
            $("#massageTitulos").append(massage);
        }        
    });

    var arr_areas = [];
    $("#agregarArea").click(function () {
        let area = $("#areas").val();
        if(area.length != 0) {
            arr_areas.push(area);
            let liaux = `<li class="list-group-item">${area}</li>`;
            $("#lista_areas").append(liaux);
            $("#areas").val("");
        } else {
            let massage = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
            El campo de area esta vacio! Ingrese un titulo para agregar...
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>`
            $("#massageAreas").append(massage);
        }        
    });

    $("#btn-test").click(function () {

        let contadorT = 1;
        let contadorA = 1;
        let titulosAux = "[";
        let areasAux = "[";
        let tamaño_arregloT = arr_titulos.length;
        let tamaño_arregloA = arr_areas.length;

        arr_titulos.forEach(element => {
            if (contadorT == tamaño_arregloT) {
                titulosAux = `${titulosAux}"${element}"]`;
            } else {
                titulosAux = `${titulosAux}"${element}",`;
                contadorT = contadorT + 1;
            }
        });

        arr_areas.forEach(element => {
            if (contadorA == tamaño_arregloA) {
                areasAux = `${areasAux}"${element}"]`;
            } else {
                areasAux = `${areasAux}"${element}",`;
                contadorA = contadorA + 1;
            }
        });


        var nombre = $("#nombre").val();
        var imgUrl = $("#imgUrl").val();
        var departamento = $("#departamento").val();
        var email = $("#email").val();
        var numero = $("#numero").val();


        var json = `{"nombre": "${nombre}","departamento": "${departamento}","titulos": ${titulosAux},"areas": ${areasAux},"email": "${email}","numero": "${numero}", "imgUrl": "${imgUrl}"}`;

        // console.log(json);

        $.ajax({
            type: "POST",
            url: "/admin/save-invest",
            data: json,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function () {
                location.href = '/admin/investigadores';
            },
            failure: function (response) {
                response.alert(mensaje);
            }
        });

    });
});