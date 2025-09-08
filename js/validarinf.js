function valInfo(){
    var nombre = document.getElementById("nombre-completo").value.trim();
    var telefono = document.getElementById("numero-telefono").value.trim();
    var correo = document.getElementById("correo-electronico").value.trim();
    var fecha = document.getElementById("fecha-nacimiento").value.trim();
    if(nombre ==="" || telefono ==="" || correo ==="" || fecha ===""){
        alert("Por favor, Complete la informacion");
    }else{
        alert("Informacion guardada con exito");
        window.location.href = "index.html";
    }
}
function valTarjeta(){
    var nombre = document.getElementById("nombreTarjeta").value.trim();
    var numero = document.getElementById("numeroTarjeta").value.trim();
    var direccion = document.getElementById("direccionTarjeta").value.trim();
    var email = document.getElementById("emailTarjeta").value.trim();
    var fecha = document.getElementById("fechaExpiracion").value.trim();
    if(nombre ==="" || numero ==="" || direccion ==="" || email ==="" || fecha ===""){
        alert("Por favor, Complete la informacion");
    }else{
        window.location.href = "about.html";
    }
    
}