const productos = [
    {id:1, nombre:'Radiant C', precio: 3500, categoria: 'facial'},
    {id:2, nombre:'Plasma Infusion', precio: 3300, categoria: 'facial'},
    {id:3, nombre:'Hyaluronic 4D', precio: 4600, categoria: 'facial'},
    {id:4, nombre:'Contorno de ojos', precio: 2600, categoria: 'facial'},
    {id:5, nombre:'Formula Limpieza', precio: 2800, categoria: 'limpieza'},
    {id:6, nombre:'Corrector Ojos', precio: 2700, categoria: 'maquillaje'},
    {id:7, nombre:'Labial Rude', precio: 1700, categoria: 'maquillaje'},
    {id:8, nombre:'Base Clara', precio: 3400, categoria: 'maquillaje'},
    {id:9, nombre:'Pestañas', precio: 1400, categoria: 'maquillaje'},
    {id:10, nombre:'Polvo Compacto', precio: 2400, categoria: 'maquillaje'},

];
const carrito = []
const resultado =[]


let seleccion = prompt('Bienvenido\n¿Desea realizar una compra?\n Ingrese si-no');

function mostrarProductos(){
    while (seleccion != 'si' && seleccion !='no'){
        seleccion = prompt('¿Desea realizar una compra?\n Ingrese si-no');
    }

    if (seleccion == 'si'){
        let todosLosProductos = productos.map((producto)=> producto.id + ' - ' + producto.nombre);
        alert ('Listado de productos:\n'+todosLosProductos.join('\n'));
    
    }else if (seleccion == 'no'){
        alert('Gracias por su visita');
    }

    return seleccion;
}

function filtrarProductos(arr, seleccion){
    const filtrado = arr.filter((el)=>{
        return el.nombre.includes(seleccion)
    })
    return filtrado;
}

function cargarCarrito (arr, resultado){
    for (const elemento of resultado) {
        arr.push(elemento);
        
    }
}

function cargaProductos(){
    
    if (seleccion =='si'){
        
        let ingreso = prompt('Ingrese el nombre del producto que desea comprar:\n Para finalizar la compra ingrese fin')
        
        while ( ingreso != 'fin'){
            if (ingreso != ''){
            const resultado = filtrarProductos(productos, ingreso);
            cargarCarrito (carrito, resultado);
            console.log(resultado);
            console.log(carrito);
            

            seleccion = ingreso;
            }else{
                alert('No puede dejar el campo vacio');
            }
            ingreso = prompt('Para ingresar otro producto escriba el nombre:\n Para finalizar la compra ingrese fin')
        }
        
        carrito.forEach ((carritoFinal)=>{
            alert(`Productos ingresados:\n ${carritoFinal.nombre}`);
        })
        const total = carrito.reduce ((acc, el)=>acc + el.precio,0);
        alert(`El total a pagar es: ${total} \n Gracias por su compra`)
        
    }
    
}





//``

mostrarProductos();
cargaProductos();



