
// CLASES PRODUCTO E INVENTARIO //
import { Producto } from "./producto.js";
import { Inventario } from "./inventario.js";


const inventario = new Inventario();
const botonAdd = document.getElementById("addProd");
const btnListar = document.getElementById("lisInv");
const output = document.getElementById("output");
const btnDelete = document.getElementById("delProd");
const btnBuscar = document.getElementById("buscProd");
const btnExtPrim = document.getElementById("extProd");
const btnExtUlt = document.getElementById("extUltProd");
const btnLisInv = document.getElementById("invInver");
let codProd;


/*FUNCION PARA RECOGER Y VALIDAR LOS DATOS DE LOS INPUTS E
 INSTANCIAR EL PRODUCTO */
function recDatosProd(){
    let producto;
    let codigo = Number(document.getElementById('txtCode').value);
    let nombre = document.getElementById('txtNom').value;
    let cantidad = document.getElementById('txtCan').value;
    let costo = document.getElementById('txtCost').value;

    if(codigo === "" || nombre === "" || cantidad=== "" || costo === ""){
        output.innerHTML = `Llena los campos correspondientes`;
    } else {
    producto = new Producto (codigo,nombre,cantidad,costo);
    }
    return producto
}

// FUNCION PARA COLOCAR LOS INPUTS VACIOS //
function inputVacio(){
    document.getElementById('txtCode').value = '';
    document.getElementById('txtNom').value = ''
    document.getElementById('txtCan').value = ''
    document.getElementById('txtCost').value = ''
    document.getElementById("txtPos").value = '';
}

// Añadir producto nuevo //
botonAdd.addEventListener("click",(e)=>{
    e.preventDefault();
    output.innerHTML = inventario.agregar(recDatosProd());  
    inputVacio(); 
});

// Listar Inventario //
btnListar.addEventListener("click",(e)=>{
    e.preventDefault();
    output.innerHTML = inventario.listar();
});

// Eliminar Producto del Inventario //
btnDelete.addEventListener("click",(e)=>{
    e.preventDefault();
    codProd = Number(document.getElementById("txtCode").value);
    output.innerHTML = inventario.eliminar(codProd);
    inputVacio();
});

// Buscar Producto //
btnBuscar.addEventListener("click",(e)=>{
    e.preventDefault();
    codProd = Number(document.getElementById("txtCode").value);
    output.innerHTML = inventario.buscar(codProd); 
    inputVacio();
});

// Extraer Primer Producto //

btnExtPrim.addEventListener("click",(e)=>{
    e.preventDefault();
    output.innerHTML = inventario.extraerPrimero();
})

// Extraer Ultimo Producto //

btnExtUlt.addEventListener("click",(e)=>{
    e.preventDefault();
    output.innerHTML = inventario.extraerUltimo();
});

// Listar producto Inverso //

btnLisInv.addEventListener("click",(e)=>{
    e.preventDefault();
    output.innerHTML=inventario.listarInverso();
})






