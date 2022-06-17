/* 
function Producto(name, price, cantidad) {
    this.nombre = name;
    this.precio = price;
    this.stock = cantidad;
    };


let nombreProducto = prompt("¿Cual es el nombre del producto que quieres agregar?")
let precioProducto = prompt("¿Cuál es el precio de " + "'" + nombreProducto + "'")
let consultaStock = prompt("¿Cuantos " + nombreProducto + " hay en el inventario?")
const Producto1 = new Producto(nombreProducto, precioProducto, consultaStock) */

const tareas = [];
let tarea = parseInt(prompt("Ingrese la cantidad de tareas que quiere agregar"))

class Producto {
    constructor(name, price) {
        this.titulo = name
        this.descripcion = price
    }
}

function agregarTareas(array, cantidad){

    for(i = 0; i < tarea; i++){
    let titTarea = prompt("¿Cuál es el título de tu tarea?")
    let descTarea = prompt("¿Cuál es la descripción de tu tarea?")
    array.push(new Producto(titTarea, descTarea))
}
}
function mostrarTareas(array) {
    for(let i = 0; i< array.length; i++){
        alert( array[i].titulo + ": " + array[i].descripcion)
    }

}

function añadirTareas(array, cantidadProductos){
agregarTareas(array, cantidadProductos);
mostrarTareas(array)
}

añadirTareas(tareas, tarea)