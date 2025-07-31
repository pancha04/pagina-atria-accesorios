
function crearProducto(producto){
    const div= document.createElement('div')
    div.className = 'producto'
    div.dataset.id = producto.id
    div.innerHTML = `
    <div class="product-img">
        <img src="${producto.image}" alt="">
    </div>
    <span class="product-name">${producto.name}</span>
    <span class="product-price">${producto.price}</span>
    `
    div.addEventListener('click', () => {
        window.location.href = `producto.html?id=${producto.id}`;
    });
    return div
}

function renderizarProductos(productos, IDcontenedor) {
    const contenedor=document.getElementById(IDcontenedor)

    if (!contenedor) {
      console.warn(`⚠️ No se encontró el contenedor con ID "${IDcontenedor}". Se omite renderizado.`)
    return
  }

    productos.forEach(producto => {
        contenedor.appendChild(crearProducto(producto))
    });
}

fetch(`db.json?timestamp=${Date.now()}`)
  .then(res => res.json())
  .then(data => {
    renderizarProductos(data.products, 'products')
  })
  .catch(err => console.error('Error cargando todos los productos:', err))


fetch(`destacados.json?timestamp=${Date.now()}`)
  .then(res => res.json())
  .then(data => {
    const destacados=data.products
    renderizarProductos(destacados, 'products-destacados')
  })
  .catch(err => console.error('Error cargando productos destacados:', err))