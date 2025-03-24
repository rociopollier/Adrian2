document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".menu ul").classList.toggle("show");
});


document.querySelector("#formulario-contacto").addEventListener("submit", function(event) {
    event.preventDefault();
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let whatsapp = document.querySelector("#whatsapp").value;
    let email = document.querySelector("#email").value;
    let mensaje = document.querySelector("#mensaje").value;
    
    let whatsappURL = `https://api.whatsapp.com/send?phone=5493547514197&text=Hola,%20soy%20${nombre}.%20Mi%20correo%20es%20${email}.%20Mensaje:%20${mensaje}`;
    
    window.open(whatsappURL, "_blank");
});

