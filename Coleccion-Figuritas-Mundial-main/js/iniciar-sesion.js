document.querySelector(".login-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("usuario").value;
  const contraseña = document.getElementById("password").value;

  const datos = localStorage.getItem("usuarios");
  const usuarios = datos ? JSON.parse(datos) : [];

  const encontrado = usuarios.find(u => u.nombre === nombre && u.contraseña === contraseña);

  if (encontrado) {
    sessionStorage.setItem("usuarioLogueado", nombre);
    window.location.href = "../perfil.html";
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
});