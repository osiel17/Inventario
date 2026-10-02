// CLASE INVENTARIO //

export class Inventario {
    constructor(){
        this.inventario = [];
    }

    busquedaPosicion(codigo){
        let pInicio = 0;
        let pFinal = this.inventario.length-1;
        let mitad;
        while (pInicio <= pFinal){
            mitad = Math.floor((pInicio + pFinal)/2);
            if(this.inventario[mitad].codigo === codigo){
                return mitad;
             
            }
            else if (this.inventario[mitad].codigo < codigo){
                pInicio = mitad+1; 
            }
            else {
                pFinal = mitad-1;
            }
        }
        return -1
    }


    productoExistente(producto){
        return this.busquedaPosicion(producto.codigo)
    }


    posicionDeInsercion(codigo){
        let pInicio = 0;
        let pFinal = this.inventario.length-1;
        let mitad;
        while (pInicio <= pFinal){
            mitad = Math.floor((pInicio + pFinal)/2);
            if(this.inventario[mitad].codigo === codigo){
                return mitad;
             
            }
            else if (this.inventario[mitad].codigo < codigo){
                pInicio = mitad+1; 
            }
            else {
                pFinal = mitad-1;
            }
        }
        return pInicio
    }

    agregar(producto){
        let posicion;
        let verificacion = this.productoExistente(producto);
        if(verificacion !== -1 ){
            return `El producto con este codigo ya existe`
        }
        posicion = this.posicionDeInsercion(producto.codigo);
        
        for (let i= this.inventario.length; i > posicion; i--){
            this.inventario[i] = this.inventario[i-1];
        }
        this.inventario[posicion] = producto;
        return `Producto ${producto.nombre} ha sido agregado de forma exitosa al inventario`
    
    }

    listar(){
        if (this.inventario.length !==0){
        let texto = ''
        for (let i =0; i< this.inventario.length; i++){
            texto += this.inventario[i].infoHtml() +'\n'
        }
        return texto;
        }else{
           return `No hay Productos en el Inventario`
        } 
    }


    eliminar(codigo){
        let indice = this.busquedaPosicion(codigo);
        let prodToDel;
        if (indice !== -1){
            prodToDel = this.inventario[indice].nombre;
            for(let i=indice;i < this.inventario.length-1;i++){
                 this.inventario[i] = this.inventario[i+1];
            }
            this.inventario.pop();
            return `El producto ${prodToDel} ha sido eliminado del inventario`
        } else {
            return `No existe el producto con el codigo ${codigo}`
        }
    } 
    
    buscar(codigo){
        let prodToFind = this.busquedaPosicion(codigo);
        if (prodToFind !== -1){
            return `Producto Encontrado:${this.inventario[prodToFind].infoHtml()}`;
        } else {
            return `No existe el producto con el codigo ${codigo}`
        }
    }

    extraerPrimero(){
        if(this.inventario.length !==0){
            let primerValor = this.inventario[0];
            for(let i=0; i< this.inventario.length; i++){
            this.inventario[i] = this.inventario[i + 1];
        }
        this.inventario.pop();
        return `${primerValor.nombre} ha sido extraido`;
        } else {
            return `No hay Productos en el Inventario`
        }
    }

    extraerUltimo(){
        if(this.inventario.length !==0){
            let ultimoValor = this.inventario[this.inventario.length-1];
            this.inventario.pop();
            return `${ultimoValor.nombre} ha sido extraido`
        } else {
            return `No hay Productos en el Inventario`
        }
    }

    
    listarInverso(){
        if(this.inventario.length !==0){
        let texto = '';
        for (let i = this.inventario.length -1; i>=0; i--){
            texto += this.inventario[i].infoHtml() +'\n'
        }
        return texto;
        } else {
            return `No hay Productos en el Inventario`
        }
    }
}
