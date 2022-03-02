const menuNavegacion = document.getElementById("navegacion-menu"),
      toggleNavegacion = document.getElementById("navegacion-toggle"),
      menuClose = document.getElementById("navegacion-close"),
      main = document.getElementById("main");

if(toggleNavegacion) {
    toggleNavegacion.addEventListener("click", function() {
        menuNavegacion.classList.add("show");
        menuClose.classList.add("show-close");
        toggleNavegacion.setAttribute("style","z-index: 0");
        main.classList.add("blur");
    })
}

if(menuClose) {
    menuClose.addEventListener("click", function() {
    menuNavegacion.classList.remove("show");
    menuClose.classList.remove("show-close");
    main.classList.remove("blur");
    })
}
