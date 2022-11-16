// traigo los elementos que necesito del html

let campoCodigo = document.getElementById("codigo");
let campoProducto = document.getElementById('producto');
let campoDescripcion = document.getElementById('descripcion');
let campoCantidad = document.getElementById('cantidad');
let campoUrl = document.getElementById('url');

// asociar un evento a cada elemento obtenido

campoCodigo.addEventListener("blur", ()=> {

    console.log("probando el blur ");
} )