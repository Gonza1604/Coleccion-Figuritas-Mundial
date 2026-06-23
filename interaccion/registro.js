const form = document.querySelector('form');



form.addEventListener("submit", (e)=>{
    e.defaultPrevented();

})

function validar() {
    let error = false;
    let mensajesError = "";
    let usuario = document.querySelector("#usuario").value;
    let email = document.querySelector("#email").value;
    let condiciones=document.querySelector("#condiciones");

    if(usuario==""){
        error=true;
        mensajesError+="<p>El campo nombre no puede estar vacío</p>";
    }
    if(email == "") {
        error = true;
        mensajesError ="<p>El campo email debe llenarse</p>";
    }
    if(error){
        mensaje.innerHTML=mensajesError;
    }else{  
        form.submit();
}
}


console.log(usuRegistro);
