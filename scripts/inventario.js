// CLASE INVENTARIO //

export class Inventario {
    constructor(){
        this.inventario = null;
        this.primero = null;
    }

    agregar(producto){
        if (this.primero === null){
            this.primero = producto;
        } else {
            this.buscarSiguiente(producto,this.primero);
        }
        return `Producto ${producto.nombre} ha sido agregado de forma exitosa al inventario`
    }

    buscarSiguiente(productoN,productoE){
        if (productoE.siguiente === null){
            productoE.siguiente = productoN;
        } else {
            this.buscarSiguiente(productoN,productoE.siguiente);
        }
    }

    agregarInicio(producto){
    let aux = this.primero;
    if (this.primero === null){
        this.primero = producto;
    }else {
        this.primero = producto;
        producto.siguiente = aux;
    }
        return 'Producto ' + producto.nombre +' ha sido agregado de forma exitosa al comienzo del inventario'+'\n'
    }

    listar(){
    let texto="";
    let aux=this.primero;
    while(aux){
      texto += aux.info() +'\n';
      aux = aux.siguiente;
    }
    return texto;
    }


    eliminar(codigo,nodo){
        let encontrado = false;
        if (nodo.codigo === codigo){
            this.primero = this.primero.siguiente;
            encontrado = true;
        }else {
            while(nodo.siguiente !== null){
                if (nodo.siguiente.codigo === codigo){
                    nodo.siguiente = nodo.siguiente.siguiente;
                    encontrado = true;
                    break;
                }else {
                    nodo = nodo.siguiente
                }
            }
        }
        if (encontrado){
        return `El producto con el codigo ${codigo} ha sido eliminado del inventario`
        } else {
        return `El producto con el codigo ${codigo} no existe`
        }
    }


    buscar(codigo,nodo){
        let encontrado = false;
        let prodToFind;
        if (nodo.codigo === codigo){
            encontrado = true;
            prodToFind = nodo;
        }else {
            while(nodo.siguiente !== null){
                if (nodo.siguiente.codigo === codigo){
                    encontrado = true;
                    prodToFind = nodo.siguiente;
                    break;
                }else {
                    nodo = nodo.siguiente
                }
            }
        }
        if (encontrado){
            return `El producto con el codigo ${codigo} es ${prodToFind.nombre}`
        }else {
            return 'Producto no encontrado'
        }
    }

    extraerPrimero(){
        let prodExt = this.primero;
        if (this.primero === null){
            return `No hay produdctos disponibles para extraer`
        }else {
          this.primero = this.primero.siguiente;
          return `${prodExt.nombre} ha sido extraido`;
        }
    }

    insertar(producto,posicion){
       let i =2
       let auxiliar = this.primero;
       if(posicion === 1){
            this.primero = producto;
            this.primero.siguiente = auxiliar;
             return `El producto ${producto.nombre} ha sido insertado en la posicion: ${posicion}`
       }else {
          while(auxiliar != null){
            if (posicion === i){
              producto.siguiente = auxiliar.siguiente;
              auxiliar.siguiente = producto;
               return `El producto ${producto.nombre} ha sido insertado en la posicion: ${posicion}`
              
            }else{
                i ++;
                auxiliar = auxiliar.siguiente;
            }
          }
       }
    }
    listarInverso(){
        if (this.primero === null) {
            return "No hay productos en el inventario";
        }
        return this.recInverso(this.primero);
    }

    recInverso(nodo){
        if (nodo === null) {
            return "";
        }
        return this.recInverso(nodo.siguiente) + nodo.info() + '\n';
    }
}
