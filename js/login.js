const { isUtf8 } = require("buffer");

function loguear ()
{
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("clave").value;

    if(user=="Juan" && pass=="1234"){

        window.location="./pages/bienvenida.html"
    } else{

        alert("Datos incorrectos")
    }
}