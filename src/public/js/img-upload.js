// $(document).ready(function () {
//     $("#btn-SubirImg").click(function () {
        
//         var image = $("#image").val();

//         $.ajax({
//             type: "POST",
//             url: "/upload/save",
//             data: image,
//         })
//     })
// })

function subirImg() {
    
    var imagen = new FormData($("#formUpload")[0]);

    alert(imagen);

    // $.ajax ({
    //     data: imagen,
    //     url: "/upload/save",
    //     type: "POST",
    //     contentType: false,
    //     processData: false,
    //     beforesend: function(){
            
    //     },
    //     success: function(response){
    //         alert(response);
    //     }
    // });

}