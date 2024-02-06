//PROGRAMACION SINCRONICA

/* console.group("Programacion Sincronica")
console.log("funcion 1")
console.log("funcion 2")
console.groupEnd() */

//PROGRAMACION ASINCRONA

//1er funcion asincronica
//setTimeout
//recibe 2 parametros una funcion y un tiempo en milisegundos

//ejemplo 1

/* setTimeout(() => {
    console.log("hola")
}, 2000)
 */



//ejemplo 2

/* console.log("inicio")

setTimeout(() => {
    console.log("Intermedio")
}, 3000)

console.log("fin") */


//ejemplo 3

/* let titulo = document.getElementById("titulo")
let btn = document.getElementById("btn")

btn.addEventListener("click", ()=>{
    titulo.classList.add("color")

    setTimeout(()=>{
        titulo.classList.remove("color")
    },4000)
}) */



//ejemplo 4

/* for (let letra of "Hola Mundo") {
    setTimeout(() => {
        console.log(letra)
    }, 3000)
} */





//2 funcion asincronica 
//setInterval
//recibe 2 argumentos una funcion y un tiempo en milisegundos
//la unidada de tiempo es un interavalo para la repeticion de la funcion asociada.


//ejemplo 1

/*  setInterval(() => {
    console.log("tic")
},2000) */




//ejemplo 2

/* let contador = 0

const interval = setInterval(() =>{
    console.log("tuki")
    contador++;

    if(contador == 5){
        clearInterval(interval)
    }
},2000) */



//ejemplo 3

/* const colores = ["red", "green", "blue", "orange", "pink", "yellow", "purple", "black","white"]

let i = 0;
const intervalDos = setInterval( ()=>{
    document.body.style.backgroundColor = colores[i];
    i++;
    console.log("cambio")

    if( i == colores.length) {
        clearInterval(intervalDos);
        console.log("termino")
    }
},2000) */




///////////////////////////////////////////////////

//CALLSTACK

/* function multiply (x, y) {
    return x * y
}

function print (x) {
    let s = multiply(x, x)
    console.log(s)
}

print(5) */


//Callstack con asincronica
//3 factores: calltack, web apis, callback Queue (Dentro va a contener event loop: sincronizar todo el proceso)


/* 
 console.log("inicio")

setTimeout(() => {
    console.log("Intermedio")
}, 3000)

console.log("fin") */




//////////////////////////////////////////////

//PROMESAS
//¿Que es una promesa? Un ofrecimineto afuturo, que puede tener dos resultados, se o no

//Un promesa en JS es un objeto que represneta un eventoa futuro
//Es una accion asincrónica que se puede completar en algun momento
//Es nuestra forma de trabajar con servidores

//Una promesa puedes ser resulta o rechazada.

//Sintaxis

/* const falsasPromesas =() => {

    return new Promise((resolve, reject) => {
        //cuerpo de la promesa
    })

}

console.log(falsasPromesas()) */


/* const productos = [
    {id: 1, nombre: "Samsung A54", precio: 700000},
    {id: 2, nombre: "Samsung S23FE",precio: 1000000},
    {id: 3, nombre: "Iphone 15 pro",precio: 1300000},
] */

//funcion sincronica

/* function traerDatos() {
    return productos
} 

console.log(traerDatos())*/


//La trasnformamos en Asincronico

/* function traerDatos () {
    setTimeout(() => {
        return productos
    },3000)
}

console.log(traerDatos()) */


//Usamos promesa

/* function traerDatos(){
 return new Promise((resolve, reject)=>{
     
     setTimeout(() => {
         if(productos.length === 0)
         {
            reject("No hay productos")
         }else {
            resolve(productos)
         }
     }, 2000)
 })
} */

//Hay 2 formas de obtener datos de una promesa: Then y cathc y async/await

//then y catch

/* traerDatos()
.then((response) =>{
    console.log(response)
})
.catch((error) =>{
    console.log(error)
})
 */
//async y await

/* async function traerCelulares() {
    try {
        const celulares = await traerDatos()
        console.table (celulares)
    }
    catch (error) {
        console.log(error)
    }
}

traerCelulares() */







////////////////////

//PETICIONES A API REST

//SINTAXIS
//fetch (url, opciones)

//Reciba un primer parametro ques la URL a la cual hacer la peticion, y un segundo parametro opcionl de configuracion.

const apiUsuarios = "https://jsonplaceholder.typicode.com/users";
const contenedorUsuarios = document.getElementById("contenedorUsuarios");

fetch(apiUsuarios)
    .then(respuesta => respuesta.json())
    .then((datos) =>{
        console.log(datos)
        mostrarUsuarios(datos)
    })
    .catch(error => console.log(error))


    function mostrarUsuarios(datos) {
        datos.forEach(usuario => {
            const li = document.createElement("li")
            li.textContent = `${usuario.id} - ${usuario.name}`;
            contenedorUsuarios.appendChild(li)
        });
    }

   