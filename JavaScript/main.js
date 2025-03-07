const placas = [
    {
        id: 1,
        nombre: "Placa de Video RTX3060",
        imagen: "../img/Placa_de_Video_MSI_GeForce_RTX_3060_12GB_GDDR6_VENTUS_2X_OC.jpg",
        precio: 310333
    },
    {
        id: 2,
        nombre: "Placa de Video RX6800XT",
        imagen: "../img/PlacadevideoAsrockRadeon_RX6800XT.jpg",
        precio: 343434
    },
    {
        id: 3,
        nombre: "Placa de Video RTX3050",
        imagen: "../img/placadevideoASUASdualGeForce_RTX3050.jpg",
        precio: 322022
    },
    {
        id: 4,
        nombre: "Placa de Video RTX4060Ti",
        imagen: "../img/PlacadeVideoMSIGeForce_RTX4060Ti.jpg",
        precio: 400400
    },
    {
        id: 5,
        nombre: "Placa de Video RTX4070Ti",
        imagen: "../img/PlacadeVideoMSIGeForce_RTX4070Ti.jpg",
        precio: 600000
    },
    {
        id: 6,
        nombre: "Placa de Video RTX5080",
        imagen: "../img/PlacadeVideoZotacGeForce_RTX5080.jpg",
        precio: 2000550
    },
]

const CatalogoContenedor = document.getElementById("placas-container")
if (CatalogoContenedor) {
    placas.forEach((placa) => {
        const catalogo = document.createElement("div")
        catalogo.className = "catalogo"
        catalogo.innerHTML = `<img src="${placa.imagen}" alt="${placa.nombre}">
                            <h3>Producto: ${placa.nombre}</h3>     
                            <h4>Precio: $${placa.precio}</h4>
                            <button class="boton-carrito" data-id="${placa.id}" >Añadir al carrito</button>`
        CatalogoContenedor.appendChild(catalogo)
    })

    document.querySelectorAll(".boton-carrito").forEach(boton => {
        boton.addEventListener("click", (e) => {
            const id = parseInt(e.target.getAttribute("data-id"));
            const producto = placas.find(placa => placa.id === id);
            agregarCarrito(producto);
        })
    })
}

function agregarCarrito(placa) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(placa); 
    localStorage.setItem("carrito", JSON.stringify(carrito)); 
}


const carritoContainer = document.getElementById("carrito-container");
if (carritoContainer) {
    function mostrarCarrito() {   
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        
        if (carrito.length === 0) {
            carritoContainer.innerHTML = "<p>El carrito está vacío.</p>";
        } else {
            carritoContainer.innerHTML = "";
            carrito.forEach(producto => {
                const item = document.createElement("div");
                item.className = "item-carrito";
                item.innerHTML = `<img src="${producto.imagen}" alt="${producto.nombre}">
                                <h3>${producto.nombre}</h3>
                                <h4>Precio: $${producto.precio}</h4>
                                <button>-</button>
                                <span>0</span>
                                <button>+</button>`;
                carritoContainer.appendChild(item);
            });
            const botonVaciar = document.createElement("button");
            botonVaciar.textContent = "Vaciar Carrito"; 
            botonVaciar.addEventListener("click", vaciarCarrito);
            carritoContainer.appendChild(botonVaciar);
            const comprarCarrito = document.createElement("button")
            comprarCarrito.textContent = "Comprar"; 
            carritoContainer.appendChild(comprarCarrito);
        } 
    }
mostrarCarrito();
}

function vaciarCarrito() {
    localStorage.removeItem("carrito"); 
    mostrarCarrito();
}



