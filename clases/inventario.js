export default class Inventario {

    constructor(){
        this.inicio = null
    }

    agregarProducto(nuevo){
        if (this.inicio === null){
            this.inicio = nuevo
        } else {
            let t = this.inicio
            while (t.siguiente != null){
                t = t.siguiente
            }
            t.siguiente = nuevo
        }
    }
    
    agregarInicio(nuevo){
        if (this.inicio === null) {
            this.inicio = nuevo
        } else {
            let t = this.inicio
            this.inicio = nuevo
            nuevo.siguiente = t
        }
    }

    eliminarProducto(cod) {
        let t = this.inicio
        if (this.inicio.codigo === cod){
            this.inicio = this.inicio.siguiente
        } else {
            while (t.siguiente.codigo != cod){
                t = t.siguiente
            }
    
            if (t.siguiente.codigo === cod){
                t.siguiente = t.siguiente.siguiente
            } else {
                alert ('Producto no encontrado')
            }
        } 
    }

    eliminarPrimero() {
        this.inicio = this.inicio.siguiente
    }
    
    buscarProducto(cod){
        let t = this.inicio
        while (t.codigo != cod){
            t = t.siguiente
        }
        if (t.codigo === cod){
            return t.nombre
        }
    }


    listarProductos(){
        let concat = ""
        let t = this.inicio
        while (t != null){
            concat += t.nombre + " "
            t = t.siguiente
        }
        return concat
    }
    
    listarInverso(){
        let t = this.inicio
        let c = 1
        while(t.siguiente != null){
            t = t.siguiente
            c++
        }
        let concat = "" + t.nombre
        c = c - 1
        while (c > 0){
            let i = 1
            t = this.inicio
            while (i < c){
                t = t.siguiente
                i++
            }
            concat += " " + t.nombre 
            c--
        }

        return concat
    }

    insertarProducto(nuevo, posicion){
        let t = this.inicio
        if (posicion === 1){
            this.agregarInicio(nuevo)
        } else {
            let i = 1
            while ((i + 1) != posicion){
                if (t.siguiente != null){
                    t = t.siguiente
                    i++
                } else {
                    alert('Posición inválida')
                    break
                }
            } 
    
            if ((i+1) === posicion){
                nuevo.siguiente = t.siguiente
                t.siguiente = nuevo
            }
        }
    }
}



/* -Agregar nuevo producto (al final)
-Eliminar un producto por código
-Buscar un producto por código
-Recuperar todos los productos //listar 
-Recuperar todos los productos en orden inverso //listar inverso
-Permitir indicar una posición para insertar el producto en esa posición (no es un reemplazar) y solo se puede insertar si hay elementos en la posición indicada
Se agregan los siguientes botones
-Agregar al inicio
-Eliminar el primero*/