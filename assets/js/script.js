const menuNavegacion = document.getElementById("navegacion-menu"),
      toggleNavegacion = document.getElementById("navegacion-toggle"),
      menuClose = document.getElementById("navegacion-close"),
      contacto = document.getElementById("navegacion-contacto");

if(toggleNavegacion) {
    toggleNavegacion.addEventListener("click", function() {
        menuNavegacion.classList.add("show");
        contacto.classList.add("show");
    })
}

if(menuClose) {
    menuClose.addEventListener("click", function() {
    menuNavegacion.classList.remove("show");
    contacto.classList.remove("show");
    })
}
