/*Crear una interfaz en HTML para manipular un INVENTARIO de productos, para almacenar la información debemos usar una lista simple enlazada.
La información de cada producto debe permitir guardar el código, el nombre, una descripción breve, cantidad y el costo, además calcular el valor de mercancía que sería un valor calculado por la cantidad y el costo.

En la interfaz (una sola pantalla) tener los inputs para cada dato, los botones para las tareas a realizar que se describen a continuación y un div para ir describiendo las actividades que se van realizando y sus resultados.
Botones :
-Agregar nuevo producto (al final)
-Eliminar un producto por código
-Buscar un producto por código
-Recuperar todos los productos //listar 
-Recuperar todos los productos en orden inverso //listar inverso
-Permitir indicar una posición para insertar el producto en esa posición (no es un reemplazar) y solo se puede insertar si hay elementos en la posición indicada
Se agregan los siguientes botones
-Agregar al inicio
-Eliminar el primero
Los métodos de eliminar se deben trabajar de forma que además de eliminar el elemento de la lista, devuelvan el objeto que esta siendo eliminado, en caso de no existir, deberán devolver null. */
import Inventario from "./clases/inventario.js"
import Producto from "./clases/producto.js"
var btnAgregar = document.querySelector('#btnAgregar')
var btnEliminar = document.querySelector('#btnEliminar')
var btnAgregarInicio = document.querySelector('#btnAgregarInicio')
var btnEliminarPrimero = document.querySelector('#btnEliminarPrimero')
var btnBuscar = document.querySelector('#btnBuscar')
var btnListar = document.querySelector('#btnListar')
var btnListarInv = document.querySelector('#btnListarInv')
var btnInsertar = document.querySelector('#btnInsertar')
var posicionInsertar = document.querySelector('#posicionInsertar')

var etNombre = document.querySelector('#etNombre')
var etCodigo = document.querySelector('#etCodigo')
var etDescripcion = document.querySelector('#etDescripcion')
var etCantidad = document.querySelector('#etCantidad')
var etCosto = document.querySelector('#etCosto')
var etLista = document.querySelector('#etLista')
var etEstado = document.querySelector('#etEstado')


var nombreProducto = document.querySelector('#nombreProducto')
var codigoProducto = document.querySelector('#codigoProducto')
var descripcionProducto = document.querySelector('#descripcionProducto')
var cantidadProducto = document.querySelector('#cantidadProducto')
var costoProducto = document.querySelector('#costoProducto')

var inventario = new Inventario

btnAgregar.addEventListener('click', () =>{
    let producto = new Producto(codigoProducto.value,nombreProducto.value,descripcionProducto.value,Number(cantidadProducto.value),Number(costoProducto.value))
    
    inventario.agregarProducto(producto)
    etEstado.innerHTML = "Producto agregado: " + producto.nombre
    console.log(inventario)

    /*
    let inv = new Inventario()

    let p1 = new Producto(1,1,1,1,1)
    let p2 = new Producto(2,2,2,2,2)
    let p3 = new Producto(3,3,3,3,3)
    let p4 = new Producto(4,4,4,4,4)
    let p5 = new Producto(5,5,5,5,5)
    let p6 = new Producto(6,6,6,6,6)
    let p7 = new Producto(7,7,7,7,7)


    inv.agregarProducto(p1)
    inv.agregarProducto(p2)
    inv.agregarProducto(p3)
    inv.agregarProducto(p4)

    //inv.agregarInicio(p4)
    //inv.agregarInicio(p5)
    //inv.agregarProducto(p6)
    //inv.eliminarProducto(2)
    //inv.eliminarProducto(1)
    //inv.eliminarPrimero()
    //console.log(inv.buscarProducto(4))
    //inv.insertarProducto(p5, 2)

    //console.log(inv)
    console.log(inv.listarInverso())
    console.log(inv.listarProductos())
*/

})

btnEliminar.addEventListener('click', () =>{
    let codigo = codigoProducto.value
    etEstado.innerHTML = "Producto eliminado: " + inventario.buscarProducto(codigo).nombre
    inventario.eliminarProducto(codigo)
    console.log(inventario)
})

btnAgregarInicio.addEventListener('click', () =>{
    let producto = new Producto(codigoProducto.value,nombreProducto.value,descripcionProducto.value,Number(cantidadProducto.value),Number(costoProducto.value))
    etEstado.innerHTML = "Agregado a inicio: " + producto.nombre
    inventario.agregarInicio(producto)
    console.log(inventario)
})

btnEliminarPrimero.addEventListener('click', () =>{
    etEstado.innerHTML = "Eliminado primero: " + inventario.inicio.nombre
    inventario.eliminarPrimero()
    console.log(inventario)
})

btnBuscar.addEventListener('click', () =>{
    let codigo = codigoProducto.value
    console.log(inventario.buscarProducto(codigo))
    let producto = inventario.buscarProducto(codigo)
    etEstado.innerHTML = "Producto buscado: " + producto.nombre
    etNombre.innerHTML = "Nombre: " + producto.nombre
    etCodigo.innerHTML = "Código: " + producto.codigo
    etDescripcion.innerHTML = "Descripción: " + producto.descripcion
    etCantidad.innerHTML = "Cantidad: " + producto.cantidad
    etCosto.innerHTML = "Costo: " + producto.costo
})

btnListar.addEventListener('click', () =>{
    console.log(inventario.listarProductos())
    etLista.innerHTML = "Productos: " + inventario.listarProductos()
})

btnListarInv.addEventListener('click', () =>{
    console.log(inventario.listarInverso())
    etLista.innerHTML = "Productos: " + inventario.listarInverso()
})

btnInsertar.addEventListener('click', () =>{
    let producto = new Producto(codigoProducto.value,nombreProducto.value,descripcionProducto.value,Number(cantidadProducto.value),Number(costoProducto.value))
    inventario.insertarProducto(producto, Number(posicionInsertar.value))
    console.log(inventario)
    etEstado.innerHTML = "Producto insertado: " + producto.nombre
})