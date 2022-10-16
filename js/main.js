// document.getElementById para seleccionar un objeto por su id
document.getElementById("main-header").addEventListener("click",function(){
    document.body.style.fontSize = "15px";// Asi se modifica una propiedad de estilos
    })

var muestraFoto = document.getElementById("visor");

document.getElementById("boton-gloria").addEventListener("click", function(){
    muestraFoto.src = "images/gloria_nieto.jpg";
});

document.getElementById("boton-rolando").addEventListener("click",function(){
    muestraFoto.src = "images/rolando mamani.jpg";
});

document.getElementById("boton-vidal").addEventListener("click", function(){
    muestraFoto.src = "images/vidal_urtecho.png";
});

document.getElementById("boton-cetpro-jicr").addEventListener("click", function(){
    muestraFoto.src = "images/cetpro_jicr.jpg";
});

document.getElementById("boton-cetpro").addEventListener("click", function(){
    muestraFoto.src = "images/juan-correa.jpg";
});

/***********************************/

let bOscuro = document.getElementById("boton_oscuro");
let bClaro = document.getElementById("boton_claro");
let brecha_de_genero = document.getElementById("brecha_de_genero");

bOscuro.addEventListener("click", function(){
    brecha_de_genero.style.backgroundColor = "#000000";
    brecha_de_genero.style.color = "#FFFFFF";
});

bClaro.addEventListener("click", function(){
    brecha_de_genero.style.backgroundColor = "#B096E0";
    brecha_de_genero.style.color = "#333333";
});

/***********************************/
let bOscuro2 = document.getElementById("boton_oscuro2");
let bClaro2 = document.getElementById("boton_claro2");
let reduccion_brecha = document.getElementById("reduccion_brecha");

bOscuro2.addEventListener("click", function(){
    reduccion_brecha.style.backgroundColor = "#FA6672";
    reduccion_brecha.style.color = "#FFFFFF";
});

bClaro2.addEventListener("click", function(){
    reduccion_brecha.style.backgroundColor = "#90FBF9";
    reduccion_brecha.style.color = "#333333";
});

/***********************************/
let frases =[];
frases[0] = "solo sé que nada sey";
frases[1] = "Vine, ví y vencí";
frases[2] = "En tiempos de crisis solo solo la imaginacion es mas importante que la inteligencia";
frases[3] = "A quien madruga, Dios le ayuda";

let fdia = document.getElementById("frases");

/*
console.log(Math.floor(Math.random()*3));
let aleatorio = Math.floor(Math.random()*3);

fdia.innerHTML = frases[aleatorio];
*/

document.getElementById("frase_llamado1").addEventListener("click", function(){
    fdia.innerHTML = frases[0];
});

document.getElementById("frase_llamado2").addEventListener("click", function(){
    fdia.innerHTML = frases[1];
});

document.getElementById("frase_llamado3").addEventListener("click", function(){
    fdia.innerHTML = frases[2];
});

document.getElementById("frase_llamado4").addEventListener("click", function(){
    fdia.innerHTML = frases[3];
});


