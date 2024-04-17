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
               //const btn = document.getElementById("boton");
               //console.log(btn);
const mensaje = document.getElementById ("mensajeEdad");
console.log(mensaje);
//elemento2 2da forma (cada que se le de click sale mensaje "Hola")
function verificarEdad(){
    console.log("Entró a mi funcion verificar edad");
    let edad = edadInput.value;
    console.log(edad);
    if(edad>= 18){
        console.log("Eres mayor de edad");
        mensaje.textContent = "Eres mayor de edad";
    } else{
        console.log("Eres menor de edad"); //else define que sucede
        //cuando la condicion es falsa (sinó)
        mensaje.textContent = "Eres menor de edad";
    }
}
