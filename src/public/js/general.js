// TEXT AREA TRANSFORMADO A EDITOR DE TEXTO.
$(document).ready(function () {
  $("#summernote").summernote({
    placeholder: "Escriba su publicacion aqui...",
    tabsize: 2,
    height: 300,
    lang: "es-ES",
    toolbar: [
      ["style", ["style"]],
      ["font", ["bold", "italic", "underline", "clear"]],
      ["fontname", ["fontname"]],
      ["color", ["color"]],
      ["fontsize", ["fontsize"]],
      ["height", ["height"]],
      ["para", ["ul", "ol", "paragraph"]],
      ["table", ["table"]],
      ["insert", ["link", "picture", "video"]],
      ["view", ["codeview", "help", "undo", "redo"]],
    ],
    codemirror: {
      // codemirror options
      theme: "monokai",
    },
  });

  var texto = $("#descripcion").val();
  $("#summernote").summernote("code", texto);

  // Guardar publicaciones

  $("#btn-guardarPublic").click(function () {
    var titulo = $("#titulo").val();
    var descripcion = `${$("#summernote").summernote("code")}`;
    var autor = $("#autor").val();
    var categoria = $("#categoria").val();

    // var json = `{"titulo": "${titulo}","descripcion": "${descripcion}"}`

    // console.log(json);
    // console.log(titulo);
    // console.log(descripcion);
    // console.log(autor);

    $.ajax({
      type: "POST",
      url: "/admin/save-public",
      data: { titulo: titulo, descripcion: descripcion, autor: autor, categoria: categoria },
    });

    const redirect = () => {
      location.href = "/admin/publicaciones";
    };

    redirect();
  });

  // Guardar publicaciones editadas

  $("#btn-guardarEditPublic").click(function () {
    var titulo = $("#titulo").val();
    var descripcion = `${$("#summernote").summernote("code")}`;
    var autor = $("#autor").val();
    var categoria = $("#categoria").val();

    // var json = `{"titulo": "${titulo}","descripcion": "${descripcion}"}`

    // console.log(json);
    // console.log(titulo);
    // console.log(descripcion);
    // console.log(autor);

    var id = $("#id").val();

    $.ajax({
      type: "POST",
      url: `/admin/edit-public/${id}?_method=PUT`,
      data: { titulo: titulo, descripcion: descripcion, autor: autor, categoria:categoria },
      // contentType: 'application/json; charset=utf-8',
      // dataType: 'json'
    });

    const redirect = () => {
      location.href = "/admin/publicaciones";
    };

    redirect();
  });

  // EVENTOS:

  $("#btn-guardarEvento").click(function () {
    var titulo = $("#titulo").val();
    var descripcion = $("#descripcion").val();
    var fecha = $("#fecha").val();
    var hora = $("#hora").val();

    $.ajax({
      type: "POST",
      url: "/admin/save-evento",
      data: {
        titulo: titulo,
        descripcion: descripcion,
        fecha: fecha,
        hora: hora,
      },
    });

    const redirect = () => {
      location.href = "/admin/eventos";
    };

    redirect();
  });

  $("#btn-guardarEditEvento").click(function () {
    var titulo = $("#titulo").val();
    var descripcion = $("#descripcion").val();
    var fecha = $("#fecha").val();
    var hora = $("#hora").val();
    // var descripcion = `${$('#summernote').summernote('code')}`;

    // var json = `{"titulo": "${titulo}","descripcion": "${descripcion}"}`

    // console.log(json);
    // console.log(titulo);
    // console.log(descripcion);
    // console.log("la fecha es: ", fecha);

    var id = $("#id").val();

    $.ajax({
      type: "POST",
      url: `/admin/edit-event/${id}?_method=PUT`,
      data: {
        titulo: titulo,
        descripcion: descripcion,
        fecha: fecha,
        hora: hora,
      },
      // contentType: 'application/json; charset=utf-8',
      // dataType: 'json'
    });

    const redirect = () => {
      location.href = "/admin/eventos";
    };

    redirect();
  });


// slider active
$("#sliderItem0").addClass('active');

// btn Agregar categoria...
$("#btnAddCategoria").click(function () {
  var categoria = $("#categoriaModal").val();
  categoria = categoria[0].toUpperCase() + categoria.substring(1);
  const selectOptions = document.getElementById("categoria");
  const categ = document.createElement("option");
  categ.textContent = categoria;
  categ.value = categoria;
  selectOptions.appendChild(categ);

  $.ajax({
    type: "POST",
    url: `/addCategoria`,
    data: {
      categoria: categoria
    },
  });

  $("#categoriaModal").val('');
  $("#cerrarModalCateg").click();
});


});
