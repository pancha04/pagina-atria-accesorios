document.addEventListener('DOMContentLoaded', () => {
  fetch('header.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById("header__nav").innerHTML = html;
    })
    .catch(err => console.error('Error al cargar el header:', err))
})
