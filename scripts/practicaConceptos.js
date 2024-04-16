//1.verificar que este conectado al html
console.log("Hola, soy la actividad de hoy 15abr");
//2.Traer los elemenos que se necesitan del html. los que tienen id.
//los elemos que traiga deben estar en una variable y esa variable
//debe ser constante

//Documento: me accede al html GetelemnyById:me trae in id en particular o nombrado
//elemento1
const edadInput = document.getElementById("edadInput");
console.log(edadInput);
//elemento2 1ra forma (se lleva directamente el elemento al JS)
const btn = document.getElementById("boton");
console.log(btn);
//elemento2 2da forma (cada que se le de click sale mensaje "Hola")
function verificarEdad(){
    console.log("Entró a mi funcion verificar edad");
    let edad = edadInput.value;
    console.log(edad);
    if(edad>= 18){
        console.log("Eres mayor de edad");
    } else{
        console.log("Eres menor de edad");
    }
}
//elemento3
const mensaje = document.getElementById("mensajeEdad");
console.log("");