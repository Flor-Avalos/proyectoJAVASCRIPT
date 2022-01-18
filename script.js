
class Producto {
    constructor( id, nombre, precio){
        this.id = parseInt(id);
        this.nombre= nombre;
        this.precio= precio;
    }
}

let productos= [];

productos.push(new Producto(1, 'Alfajor de DDL', 100))
productos.push(new Producto(2, 'Alfajor de Frambueza', 120))
productos.push( new Producto(3, 'Alfajor de Frutos del bosque', 340))
productos.push(new Producto(4, 'Alfajor de Calafate', 100))
productos.push(new Producto(5, 'Bombones rellenos', 120))
productos.push( new Producto(6, 'Chocolate en rama', 340))

console.log(productos);

const pedirDato= datoUsuario =>{
   
    const productoEncontrado= productos.find(producto => producto.id === datoUsuario);

     if (productoEncontrado != undefined){
    generarHtml(productoEncontrado)}
    else{ console.log('No existe producto')}

    
}

//asocio el evento al submit y traigo el valor ingresado en el formulario

const formulario= document.getElementById('formulario');
formulario.addEventListener( 'submit',e => {
    e.preventDefault();
  const id= parseInt(formulario.productoId.value);
  pedirDato(id);  
  formulario.reset();
} )

// muestro el priducto en html, creo una UL con cada dato ingresado
const generarHtml= producto =>{
    const lista= document.getElementById('lista');
    lista.innerHTML += `<li>${producto.nombre} - $${producto.precio}</li>`

    // si agrego += con cada click acumula la eleccion del cliente
    // con solo = reemplaza en cada eleccion
}















