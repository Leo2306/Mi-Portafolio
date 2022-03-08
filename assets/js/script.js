const menuNavegacion = document.getElementById("navegacion-menu"),
      toggleNavegacion = document.getElementById("navegacion-toggle"),
      menuClose = document.getElementById("navegacion-close"),
      content = document.getElementById("contenido");

if(toggleNavegacion) {
    toggleNavegacion.addEventListener("click", function() {
        menuNavegacion.classList.add("show");
        menuClose.classList.add("show-close");
        toggleNavegacion.setAttribute("style","z-index: 0");
        content.classList.add("blur");
    })
}

if(menuClose) {
    menuClose.addEventListener("click", function() {
    menuNavegacion.classList.remove("show");
    menuClose.classList.remove("show-close");
    content.classList.remove("blur");
    })
}

const proyecto = document.querySelector(".proyectos__descripcion"),
      elemento = document.querySelectorAll(".proyectos__item");

for (let i = 0; i < elemento.length; i++) {
    
    elemento[i].addEventListener("click",function(){

        let posicion = i ;
        let operacion = i * (-100/3);

        proyecto.setAttribute(`style`,`transform: translateX(${operacion}%)`);

        for (let i = 0; i < elemento.length; i++) {
            
            elemento[i].classList.remove("activo");
            
        } 

        elemento[i].classList.add("activo");

    })
    
}

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});