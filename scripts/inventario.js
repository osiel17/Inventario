// CLASE INVENTARIO //

export class Inventario {
    constructor(){
        this.inventario = null;
        this.primero = null;
    }

    buscarNodo(codigo, nodo) {
        if (nodo === null){
            return null
        }
        if (nodo.codigo === codigo) { 
            return nodo;
        } else {
            return this.buscarNodo(codigo, nodo.siguiente); 
        }
    }

    agregar(producto) {
        if (producto === null) {
            return "Error: los datos del producto están incompletos";
        }
        if (this.buscarNodo(producto.codigo, this.primero) !== null) {
            return `ERROR: Ya existe un producto con el codigo ${producto.codigo}`;
        }

        if (this.primero === null) {
            this.primero = producto;
        } else if (producto.codigo < this.primero.codigo) {
            producto.siguiente = this.primero;
            this.primero.anterior = producto;
            this.primero = producto;
        } else {
            this.ordenarProd(producto, this.primero);
        }

         return `Producto ${producto.nombre} ha sido agregado de forma exitosa al inventario`;
    }

    ordenarProd(productoN,nodo){
        if(nodo.siguiente === null){
            nodo.siguiente = productoN;
            productoN.anterior = nodo;
            return;
        }
        else if(productoN.codigo < nodo.siguiente.codigo){
            productoN.siguiente = nodo.siguiente;
            productoN.anterior = nodo;
            nodo.siguiente.anterior = productoN;
            nodo.siguiente = productoN;
            return;
        } 
        else {
            this.ordenarProd(productoN,nodo.siguiente);
        }
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


   
eliminar(codigo) {
    if (this.primero === null) {
        return "No hay productos en el inventario";
    }

    let aux = this.primero;
    codigo = Number(codigo);

    while (aux !== null && aux.codigo !== codigo) {
        aux = aux.siguiente;
    }

    if (aux === null) {
        return `No existe un producto con el codigo ${codigo}`;
    }

    if (aux.anterior === null) {
        this.primero = aux.siguiente;
    } else {
        aux.anterior.siguiente = aux.siguiente;
    }

    if (aux.siguiente !== null) {
        aux.siguiente.anterior = aux.anterior;
    }

    aux.siguiente = null;
    aux.anterior = null;

    return `El producto ${aux.nombre} ha sido eliminado del inventario`;
}


    buscar(codigo, nodo) {
        let producto = this.buscarNodo(codigo, nodo);

        if (producto === null) {
            return `No existe un producto con el código ${codigo}`;
        }
        return producto.info();
    }

    extraerPrimero() {
        let aux = this.primero;

        if (this.primero === null) {
            return `No hay productos disponibles para extraer`;

        } else if (this.primero.siguiente === null) {
            this.primero = null;
            aux.siguiente = null; 
            aux.anterior = null;  
            return `${aux.nombre} ha sido extraído`;

        } else {
            this.primero.siguiente.anterior = null;
            this.primero = this.primero.siguiente;
            aux.siguiente = null; 
            aux.anterior = null;  
            return `${aux.nombre} ha sido extraído`;
        }
    }

      extraerUltimo() {
        let aux;
        let nodo = this.primero;
        if(this.primero === null){
            return `No hay productos en el inventario`
        } 
        if(this.primero.siguiente === null) {
            aux = this.primero;
            this.primero = null;
            return `Se ha extraido el producto ${aux.nombre}`;
        }
        while(nodo){
            if(nodo.siguiente === null){
                aux = nodo;
                nodo = nodo.anterior;
                nodo.siguiente.anterior=null;
                nodo.siguiente = null;
                break;
            }
            nodo = nodo.siguiente;
        }
        return `Se ha extraido el producto ${aux.nombre}`
       
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
