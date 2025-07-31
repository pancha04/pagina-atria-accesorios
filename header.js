document.addEventListener('DOMContentLoaded', () => {
  fetch('header.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('header__nav').innerHTML = html

      
      setTimeout(() => {
        const carritoIcono = document.getElementById('cart-icon')
        if (!carritoIcono) {
          console.warn('⚠️ cart-icon no encontrado en el header')
          return
        }

        carritoIcono.addEventListener('click', () => {
          window.location.href = 'carrito.html'
        })
      }, 0)
    })
    .catch(err => console.error('Error al cargar el header:', err))
})