document.addEventListener("DOMContentLoaded", ()=>{
    fetch('sidebar.html')
    .then(res => res.text())
    .then(html => {
    document.getElementById('sidebar__wrapper').innerHTML = html

    const waitForToggle = () => {
        const toggle = document.getElementById('menu-toggle')
        const menu = document.getElementById('side-menu')
        const overlay = document.getElementById('overlay')

        if (toggle && menu && overlay) {
            console.log('✅ Elementos encontrados')

            toggle.addEventListener('click', () => {
                menu.classList.toggle('open')
                overlay.classList.toggle('show')
            })

            overlay.addEventListener('click', () => {
                menu.classList.remove('open')
                overlay.classList.remove('show')
            })
            document.querySelectorAll('.side-menu a').forEach(link => {
                link.addEventListener('click', () => {
                menu.classList.remove('open')
                overlay.classList.remove('show')
            })
        })
        } else {
        console.warn('⏳ Esperando elementos...')
        setTimeout(waitForToggle, 50)
        }
    }

    waitForToggle()
    })
    .catch(err => console.error('❌ Error cargando sidebar:', err))
})