document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos el formulario y los campos de entrada
    const form = document.getElementById('personal-info-form');
    const nombreInput = document.getElementById('nombre-completo');
    const telefonoInput = document.getElementById('numero-telefono');
    const correoInput = document.getElementById('correo-electronico');
    const fechaInput = document.getElementById('fecha-nacimiento');

    // Obtenemos los elementos para mostrar los mensajes de error
    const nombreError = document.getElementById('nombre-error');
    const telefonoError = document.getElementById('telefono-error');
    const correoError = document.getElementById('correo-error');
    const fechaError = document.getElementById('fecha-error');

    // Función para mostrar un mensaje de error
    const showError = (element, message) => {
        element.textContent = message;
        element.style.display = 'block';
    };

    // Función para ocultar todos los mensajes de error
    const hideErrors = () => {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(span => {
            span.textContent = '';
            span.style.display = 'none';
        });
    };

    
    // Escuchamos el evento de envío del formulario
    form.addEventListener('submit', (event) => {
        // Evitamos que el formulario se envíe por defecto
        event.preventDefault();

        // Ocultamos cualquier mensaje de error anterior
        hideErrors();

        let isValid = true; // Variable para saber si el formulario es válido

        // --- 1. Validar Nombre Completo ---
        if (nombreInput.value.trim() === '') {
            showError(nombreError, 'Está información es obligatoria.');
            isValid = false;
        }

        // --- 2. Validar Número de Teléfono ---
        if (telefonoInput.value.trim() === '') {
            showError(telefonoError, 'Está información es obligatoria.');
            isValid = false;
        }

        // --- 3. Validar Correo Electrónico ---
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (correoInput.value.trim() === '') {
            showError(correoError, 'Está información es obligatoria.');
            isValid = false;
        } else if (!emailRegex.test(correoInput.value.trim())) {
            showError(correoError, 'Por favor, introduce un correo electrónico válido.');
            isValid = false;
        }

        // --- 4. Validar Fecha (formato dd-mm-aaaa) ---
        const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
        if (fechaInput.value.trim() === '') {
            showError(fechaError, 'Está información es obligatoria.');
            isValid = false;
        } else if (!dateRegex.test(fechaInput.value.trim())) {
            showError(fechaError, 'El formato debe ser dd-mm-aaaa.');
            isValid = false;
        }
        
        // --- 5. Si todas las validaciones son correctas, el formulario es válido
        if (isValid) {
            alert('¡Formulario enviado con éxito!');
            // Aquí puedes agregar la lógica para enviar los datos a un servidor.
            // Por ejemplo: form.submit();
        }
    });
});

function valTarjeta(){
    var nombre = document.getElementById("nombreTarjeta").value.trim();
    var numero = document.getElementById("numeroTarjeta").value.trim();
    var direccion = document.getElementById("direccionTarjeta").value.trim();
    var email = document.getElementById("emailTarjeta").value.trim();
    if(nombre ==="" && numero ==="" && direccion ==="" && email ===""){
        alert("Por favor, Complete la informacion");
    }
    else{
        alert("Guardado con exito");
    }
}