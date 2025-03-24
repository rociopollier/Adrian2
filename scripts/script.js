document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu ul");
    const menuLinks = document.querySelectorAll(".menu a"); // Selecciona todos los enlaces del menú

    // Abre o cierra el menú al hacer clic en el botón
    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("show");
    });

    // Cierra el menú cuando se hace clic fuera de él
    document.addEventListener("click", function(event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove("show");
        }
    });

    // Cierra el menú al hacer clic en un enlace
    menuLinks.forEach(link => {
        link.addEventListener("click", function() {
            menu.classList.remove("show");
        });
    });
});


document.querySelector("#formulario-contacto").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let whatsapp = document.querySelector("#whatsapp").value;
    let email = document.querySelector("#email").value;
    let mensaje = document.querySelector("#mensaje").value;

    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("WhatsApp:", whatsapp);
    console.log("Email:", email);
    console.log("Mensaje:", mensaje);

    let whatsappURL = `https://api.whatsapp.com/send?phone=5493547514197&text=Hola,%20soy%20${nombre}%20${apellido}.%20Mi%20WhatsApp%20es%20${whatsapp}.%20%20Mi%20correo%20es%20${email}.%20Mensaje:%20${mensaje}`;

    window.open(whatsappURL, "_blank");
});


