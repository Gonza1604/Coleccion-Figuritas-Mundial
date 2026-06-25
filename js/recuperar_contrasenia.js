const form = document.querySelector('.recuperar-form');
const correo = document.getElementById('correo');
const boton = document.querySelector('button');
const mensaje = document.querySelector('.mensaje');


correo.addEventListener('input', function() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo.value === '') {
        correo.style.borderColor = '#ccc';
    } else if (!regex.test(correo.value)) {
        correo.style.borderColor = 'red';
    } else {
        correo.style.borderColor = 'green';
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!regex.test(correo.value)) {
        mensaje.textContent = '❌ Ingresá un correo válido';
        mensaje.style.color = 'red';
        return; 
    }

    boton.disabled = true;
    boton.textContent = 'Enviando...';
    boton.style.backgroundColor = '#999';
    mensaje.textContent = '✅ Te enviamos un enlace a ' + correo.value;
    mensaje.style.color = 'green';
});