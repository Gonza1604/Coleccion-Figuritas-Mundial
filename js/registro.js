const form = document.querySelector('form');
let mensaje=document.querySelector("#mensaje");

function validar() {
    let error = false;
    let mensajesError = "";
    let nombre = document.querySelector("#nombre").value;
    let email = document.querySelector("#email").value;
    let contraseña = document.querySelector("#contraseña").value;

    if (nombre == "") {
        error=true;
        mensajesError += "<p>El campo nombre no puede estar vacío</p>"
    }
    if (email == "") {
        error = true;
        mensajesError += "<p>El campo email debe llenarse</p>"
    }
    if (contraseña == "") {
        error = true;
        mensajesError += "<p>El campo contraseña debe llenarse</p>"
    }
    if (error) {
        mensaje.innerHTML=mensajesError;
    } else { 
        
    let usuario = {
    nombre,
    email,
    contraseña
}

let datos = localStorage.getItem("usuarios");
let usuarios = datos ? JSON.parse(datos) : [];

let existe = usuarios.some(u => u.nombre === usuario.nombre);
console.log(existe);

if (existe == true) {
    error = true;
    mensajesError += "<p>Este usuario ya existe</p>"
    mensaje.innerHTML=mensajesError;

} else {
    usuarios.push(usuario);
    usuario = JSON.stringify(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    form.submit();

}



}


}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    validar();

})






