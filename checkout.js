const costoEnvioTexto = document.getElementById("costoEnvio")
const codigoPostalInput = document.getElementById("codigoPostal")
const confirmarBtn = document.getElementById("confirmarCompra")

codigoPostalInput.addEventListener("input", () => {
    const cp = codigoPostalInput.value.trim()

    if (cp.length === 4 || cp.length === 5) {
    let costo = 0
    if (cp.startsWith("1")) costo = 1000
    else if (cp.startsWith("5")) costo = 1500
    else costo = 1300

    costoEnvioTexto.textContent = `Envío estimado: $${costo}`
        codigoPostalInput.dataset.costoEnvio = costo
    } else {
        costoEnvioTexto.textContent = ""
    }
})
