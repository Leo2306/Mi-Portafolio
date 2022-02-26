const menuNavegacion = document.getElementById("navegacion-menu"),
      toggleNavegacion = document.getElementById("navegacion-toggle");
      menuClose = document.getElementById("navegacion-close");

if(toggleNavegacion) {
    toggleNavegacion.addEventListener("click", function() {
        menuNavegacion.classList.add("show");
    })
}

if(menuClose) {
    toggleNavegacion.addEventListener("click", function() {
    menuNavegacion.classList.remove("show");
    })
}
