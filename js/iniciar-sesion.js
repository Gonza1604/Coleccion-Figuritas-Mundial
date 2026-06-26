let mensaje=document.querySelector("#mensaje");
document.querySelector(".login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  validar();

  function validar() {
    let error = false;
    let exito = false;
    let mensajeError = "";
    let mensajeExitoso = "";

    const nombre = document.getElementById("usuario").value;
    const contraseña = document.getElementById("password").value;

    if (nombre == "") {
      error = true;
      mensajeError += "<p>Debe ingresar un usuario</p>"
    }
    if (contraseña == "") {
      error = true;
      mensajeError += "<p>Debe ingresar una contraseña</p>"
    }
    if (error) {
        mensaje.classList.remove("exitoso");
        mensaje.classList.add("error");

        mensaje.innerHTML = mensajeError;
    } else {

    const datos = localStorage.getItem("usuarios");
    const usuarios = datos ? JSON.parse(datos) : [];

    const encontrado = usuarios.find(u => u.nombre === nombre && u.contraseña === contraseña);

    if (encontrado) {
    sessionStorage.setItem("usuarioLogueado", nombre);
    window.location.href = "../index.html";
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
    }
  } 

});