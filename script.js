
class Producto {
    constructor( id, nombre, precio){
        this.id = parseInt(id);
        this.nombre= nombre;
        this.precio= precio;
    }
}

let productos= [];

productos.push(new Producto(1, 'alfajor', 100))
productos.push(new Producto(2, 'bombones', 120))
productos.push( new Producto(3, 'tableta', 340))

console.log(productos);

const pedirDato= () =>{
    const datoUsuario = parseInt(prompt('ingrese el id del producto'));
    const productoEncontrado= productos.find(producto => producto.id === datoUsuario);
    console.log(productoEncontrado);
}
// pedirDato()

const formulario= document.getElementById('formulario');
formulario.addEventListener( 'submit',e => {
    e.preventDefault();
  const id= parseInt(formulario.productoId.value);
  console.log(id);  
} )













