$(document).ready(function () {

  $("#paginacion").append(function () {
    const page = parseInt($("#page").val());
    const ultPage = parseInt($("#ultPage").val());
    const path = $("#url").val();

    const btn = document.getElementById(`btn${page}`);
    const btnAnt = document.getElementById(`btn${page - 1}`);
    const btnAnt2 = document.getElementById(`btn${page - 2}`);
    const btnSig = document.getElementById(`btn${page + 1}`);
    const btnSig2 = document.getElementById(`btn${page + 2}`);

    btn.classList.remove("btn-outline-primary");
    btn.classList.add("btn-primary");

    const btnAnterior = document.getElementById("btn-anterior");
    const btnSiguiente = document.getElementById("btn-siguiente");
    const btnInicio = document.getElementById("btn-inicio");
    const btnFinal = document.getElementById("btn-final");
    const paginacion = document.getElementById("paginacion");

    if (ultPage == 1) {
      paginacion.classList.add("d-none");
    } else {
      if (page == 1) {
        btnAnterior.classList.add("d-none");
        btnInicio.classList.add("d-none");
      } else if (page != 1) {
        btnAnterior.addEventListener("click", function () {
          const redirect = () => {
            var newpage = page - 1;
            location.href = `${path}?page=${newpage}`;
          };
          redirect();
        });
        btnInicio.addEventListener("click", function () {
          const redirect = () => {
            location.href = `${path}`;
          };
          redirect();
        });
      }

      if (page == ultPage) {
        btnSiguiente.classList.add("d-none");
        btnFinal.classList.add("d-none");
      } else if (page != ultPage) {
        btnSiguiente.addEventListener("click", function () {
          const redirect = () => {
            var newpage = parseInt(page + 1);
            console.log(newpage);
            location.href = `${path}?page=${newpage}`;
          };
          redirect();
        });
        btnFinal.addEventListener("click", function () {
          const redirect = () => {
            location.href = `${path}?page=${ultPage}`;
          };
          redirect();
        });
      }

      if (page != 1 && page != ultPage) {
        btn.classList.remove("d-none");
        btnSig.classList.remove("d-none");
        btnAnt.classList.remove("d-none");
      } else if (page == 1) {
        btn.classList.remove("d-none");
        btnSig.classList.remove("d-none");
        btnSig2.classList.remove("d-none");
      } else if (page == ultPage) {
        btn.classList.remove("d-none");
        btnAnt.classList.remove("d-none");
        btnAnt2.classList.remove("d-none");
      }
    }
  });

});
