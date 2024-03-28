function mostrarEnfermedad(value) {
    var divEnfermedad = document.getElementById("divEnfermedad");
    if (value == "Si") {
        divEnfermedad.style.display = "block";
    } else {
        divEnfermedad.style.display = "none";
    }
}

document.getElementById("formulario").reset();

function guardarInformacion(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var nombreMascota = document.getElementById("nombreMascota").value;
    var peso = document.getElementById("peso").value;
    var edad = document.getElementById("edad").value;
    var color = document.getElementById("color").value;
    var enfermedad = document.getElementById("enfermedad").value;
    var detalleEnfermedad = document.getElementById("detalleEnfermedad").value;
    var nombreDueno = document.getElementById("nombreDueno").value;
    var direccion = document.getElementById("direccion").value;
    var telefono = document.getElementById("telefono").value;
    var comentario = document.getElementById("comentario").value;

    // Guardar la información en localStorage (puedes modificar esto según tus necesidades)
    localStorage.setItem("nombreMascota", nombreMascota);
    localStorage.setItem("peso", peso);
    localStorage.setItem("edad", edad);
    localStorage.setItem("color", color);
    localStorage.setItem("enfermedad", enfermedad);
    localStorage.setItem("detalleEnfermedad", detalleEnfermedad);
    localStorage.setItem("nombreDueno", nombreDueno);
    localStorage.setItem("direccion", direccion);
    localStorage.setItem("telefono", telefono);
    localStorage.setItem("comentario", comentario);

    // Mostrar ventana modal de registro exitoso
    var modal = document.getElementById("registroExitoso");
    modal.style.display = "block";

    // Resetear el formulario después de 3 segundos
    setTimeout(function() {
        modal.style.display = "none";
        document.getElementById("formulario").reset();
    }, 3000);
}




