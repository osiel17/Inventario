// CLASE INVENTARIO //

export class Inventario {
    constructor(){
        this.inventario = [];
    }

    agregar(producto){
        this.inventario.push(producto);
        console.log(producto);
        return `Producto ${producto.nombre} ha sido agregado de forma exitosa al inventario`
    }

    agregarInicio(producto){
    let auxiliar;
    this.inventario.push(producto);
    auxiliar = this.inventario[this.inventario.length-1];
    for(let i = this.inventario.length -2; i>= 0;i--){
        this.inventario[i+1] = this.inventario[i];
    }
        this.inventario[0] = auxiliar;
        return 'Producto ' + producto.nombre +' ha sido agregado de forma exitosa al comienzo del inventario'+'\n'
    }

    listar(){
        let texto = ''
        for (let i =0; i< this.inventario.length; i++){
            texto += this.inventario[i].info() +'\n'
        }
        return texto;
    }


    eliminar(codigo){
        let indice;
        for(let i=0;i < this.inventario.length; i++){
            if (codigo === this.inventario[i].codigo){
                indice = i;
                break;
            }
        }
        for(let i=indice;i < this.inventario.length;i++){
            this.inventario[i] = this.inventario[i+1];
        }
        this.inventario.pop();
        return `El producto con el codigo ${codigo} ha sido eliminado del inventario`
    }


    buscar(codigo){
        let encontrado = false;
        let producto;
        for(let i = 0; i < this.inventario.length; i++){
            if(this.inventario[i].codigo === codigo){
                encontrado = true;
                producto =this.inventario[i].nombre;
                break;
            } 
        }
        if (encontrado){
            return `El producto con el codigo ${codigo} es ${producto}`
        }else {
            return 'Producto no encontrado'
        }
    }

    extraerPrimero(){
        let primerValor = this.inventario[0];
        for(let i=0; i< this.inventario.length; i++){
            this.inventario[i] = this.inventario[i + 1];
        }
        this.inventario.pop();
        return `${primerValor.nombre} ha sido extraido`;
    }

    insertar(producto,posicion){
        if (posicion > this.inventario.length +1){
            return 'Posicion Invalida'
        }
        for (let i= this.inventario.length-1; i>= posicion; i--){
            this.inventario[i+1] = this.inventario[i];
        }
        this.inventario[posicion] = producto;
        return `El producto ${producto.nombre} ha sido insertado en la posicion: ${posicion}`
    }
    listarInverso(){
        let texto = '';
        for (let i = this.inventario.length -1; i>=0; i--){
            texto += this.inventario[i].info() +'\n'
        }
        return texto;
    }
    }
