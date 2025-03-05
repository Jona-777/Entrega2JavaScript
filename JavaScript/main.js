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

let productos = document.getElementById("placas")
placas.forEach((placa) => {
    let catalogo = document.createElement("div")
    catalogo.className = "catalogo"
    catalogo.innerHTML = `<img src="${placa.imagen}" alt="${placa.nombre}">
                          <h3>Producto: ${placa.nombre}</h3>     
                          <h4>Precio: $${placa.precio}</h4>
                          <button>Añadir al carrito</button>`
    productos.appendChild(catalogo)
})