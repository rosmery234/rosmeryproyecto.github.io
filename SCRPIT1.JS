// Creamos un array para almacenar los productos que el usuario agrega al carrito
let carrito = [];

// Función que se ejecuta cuando se hace clic en "Agregar al carrito"
function agregarAlCarrito(nombre, precio) {
    // Agregamos el producto al carrito
    carrito.push({ nombre: nombre, precio: precio });

    // Actualizamos la visualización del carrito y el total
    mostrarCarrito();
}

// Función para mostrar el carrito de compras
function mostrarCarrito() {
    // Obtenemos el elemento donde vamos a mostrar el carrito
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');

    // Limpiamos la lista actual
    listaCarrito.innerHTML = '';

    // Inicializamos el total
    let total = 0;

    // Recorremos los productos en el carrito y los agregamos a la lista
    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.textContent = $(producto.nombre) - $$(producto.precio.toFixed(2));
        listaCarrito.appendChild(li);
        total += producto.precio;
    });

    // Actualizamos el total
    totalElement.textContent = total.toFixed(2);
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];  // Limpiamos el array del carrito
    mostrarCarrito();  // Actualizamos la visualización del carrito
}