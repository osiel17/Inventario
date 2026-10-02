// CLASE PRODUCTO //

export class Producto {
    constructor (codigo,nombre,cantidad,costo){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
    }
    info(){
        return `Codigo:${this.codigo} | Nombre: ${this.nombre} |
        Cantidad: ${this.cantidad} | Costo: ${this.costo}<br>`

    }
    infoHtml(){
        return `<h3>Producto</h3> <p><b>Codigo:</b>${this.codigo} | <b>Nombre:</b>${this.nombre} |
        <b>Cantidad:</b>${this.cantidad} |
        <b>Costo:</b>${this.costo}</p><br>`
    }
}