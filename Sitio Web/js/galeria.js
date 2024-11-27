"use strict"

/*VARIABLES*/
var cierra = document.querySelector("#botonCierra");
var adelanta = document.querySelector("#botonAdelanta");
var retrocede = document.querySelector("#botonRetrocede");
var imagenes = document.querySelectorAll("#galeria img");
var lightBox = document.querySelector("#contenedorPrincipal");
var imagenActiva = document.querySelector("#imagenActiva");
let indiceImagen = 0;

/*ABRIR LIGHTBOX*/
const abreLightbox = (event) =>{
	imagenActiva.src = event.target.src;
	lightBox.style.display = "flex";
	indiceImagen = Array.from(imagenes).indexOf(event.target);

	if (indiceImagen === 0) {
		retrocede.style.display = "none";
	}else{
		retrocede.style.display = "flex";
	}

	if (indiceImagen === 11) {
		adelanta.style.display = "none";
	}else{
		adelanta.style.display = "flex";
	}
};

imagenes.forEach((imagen)=>{
	imagen.addEventListener("click", abreLightbox);
});


/*CERRAR LIGHTBOX*/
cierra.addEventListener("click", ()=>{
	lightBox.style.display = "none";
	adelanta.style.display = "flex";
	retrocede.style.display = "flex";
});


/*ADELANTAR IMAGEN*/
let adelantaIMG = ()=>{
	if(indiceImagen > 10 - 1) {
		adelanta.style.display = "none";
	} 

	if (indiceImagen >= 0){
		retrocede.style.display = "flex";
	}

	imagenActiva.src = imagenes[indiceImagen + 1].src;
	indiceImagen ++;
	console.log(indiceImagen);
};

adelanta.addEventListener("click", adelantaIMG);


/*RETROCEDE IMAGEN*/
let retrocedeIMG = ()=>{
	if (indiceImagen <= 0 + 1 ) {
		retrocede.style.display = "none";
	}

	if (indiceImagen === 12 - 1){
		adelanta.style.display = "flex";
	}

	imagenActiva.src = imagenes[indiceImagen - 1].src;
	indiceImagen --;
	console.log(indiceImagen);
};

retrocede.addEventListener("click", retrocedeIMG);



