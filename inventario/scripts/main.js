
// CLASES PRODUCTO E INVENTARIO //
import { Producto } from "./producto.js";
import { Inventario } from "./inventario.js";


const inventario = new Inventario();
const botonAdd = document.getElementById("addProd");
const añadirPrimero = document.getElementById('addProdIn');
const btnListar = document.getElementById("lisInv");
const output = document.getElementById("output");
const btnDelete = document.getElementById("delProd");
const btnBuscar = document.getElementById("buscProd");
const btnExtPrim = document.getElementById("extProd");
const btnInsertar = document.getElementById("insProd");
const btnLisInv = document.getElementById("invInver")
let codProd;
let posicion;

/*FUNCION PARA RECOGER Y VALIDAR LOS DATOS DE LOS INPUTS E
 INSTANCIAR EL PRODUCTO */
function recDatosProd(){
    let producto;
    let codigo = document.getElementById('txtCode').value;
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
    recDatosProd();
    output.innerHTML = inventario.agregar(recDatosProd());  
    inputVacio(); 
});


// Añadir producto al inicio //
añadirPrimero.addEventListener("click",(e)=>{
    e.preventDefault();
    recDatosProd();
    output.innerHTML = inventario.agregarInicio(recDatosProd());
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
    codProd = document.getElementById("txtCode").value;
    output.innerHTML = inventario.eliminar(codProd);
    inputVacio();
});

// Buscar Producto //
btnBuscar.addEventListener("click",(e)=>{
    e.preventDefault();
    codProd = document.getElementById("txtCode").value;
    output.innerHTML = inventario.buscar(codProd); 
    inputVacio();
});

// Extraer Primer Producto //

btnExtPrim.addEventListener("click",(e)=>{
    e.preventDefault();
    output.innerHTML = inventario.extraerPrimero();
})

// Insertar el Producto //
btnInsertar.addEventListener("click",(e)=>{
    e.preventDefault();
    posicion = document.getElementById("txtPos").value;
    output.innerHTML = inventario.insertar(recDatosProd(),posicion);
    inputVacio();
});

// Listar producto Inverso //

btnLisInv.addEventListener("click",(e)=>{
    e.preventDefault();
    output.innerHTML=inventario.listarInverso();
})






