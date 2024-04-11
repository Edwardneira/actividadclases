// Doble / SE UTULIZA PARA COMENTAR EN JS
// EL CONSOLE.LOG ES LA FORMA DE ENVIAR MENSAJES A LA CONSOLA (CONSOLE) DEL NAVEGADOR
console.log("hola, mundo y psicolgos");

//CONCEPTOS BASICOS EN JS (JAVASCRPT)
  //1. tipos de variables
  //2. manejo del DOM
  //3. condicionales
  //4. ciclos

//LAS VARIABLES EN JS (JAVASCRIPT): (las variables son contenedores de informacion)
//hay 3 tipos de variables ne JS pero solo vamos a usa 2
// VAR: es un tipo de variable que ya no se usa pero aun funcina NO SE USA!! (cambia en el tiempo)
// LET: es una variable que cambia en el tiempo es decir que yo puedo decidir cambiar el resultado
// CONST: es una variable que no puede cambiar en el tiempo 

//TIPOS DE DATOS:
// NOTA: el signo = no es comparativo sino que asigna valores y los textos siempre deben estar entre comillas.
//NUMERICOS:
let numero = 7; //(importante cerrar con ;)
// CADENA DE CARACTERES:
let texto = "hola mundo";
//BOOLEANOS: es un dato que puede ser verdadero o falso
let esVerdadero = true; //(verdad)
let esFalso = false; // (flaso)
//ARREGLOS O ARRAYS (en programacion): 
//me permiten almacenar varios datos al mismo tiempo en una misma variable
let arregloNombres = ["Luisa", "Emmanuel", "Paula"];
let arregloNumeros = [1, 2, 3, 4,];
//OBJETOSs: son "una representacion de elementos de la vida real peroen nuestro codigo
//pueden tener:
//atributos: (caracteristicas)
//metodos: acciones que puede realizar el objeto
//(en JS son para ejecutar acciones o invocar funciones)
//[son para declarar arreglos]
//{son para declarar objetos}
const celular = {
    color:"blanco",
    modelo:"galaxy a7",
    ancho:350,
    alto:800,
    enviarMensajes: function(){}
    //entre los {} al lado de () se establece la accion a realiar
  };


//en la carpeta scripts van todos los archivos de JS pero destinados
//a darle dinamismo al sitio web, NO se relacionan con la funcionalidad a nivel del backend
//NODE JS se va a utilizar para implementar el JS en el backend (backend son las operaciones logicas
// que permiten el funcionamiento del sitio web) sin JS no funciona el sitio web
