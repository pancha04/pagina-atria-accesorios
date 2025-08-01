document.getElementById("confirmarCompra").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const codigoPostal = document.getElementById("codigoPostal").value;
    const metodoPago = document.getElementById("metodoPago").value;
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (!email || !carrito.length) {
        alert("Por favor completá todos los campos y agregá productos al carrito.");
        return;
    }

    const compra = {
        email,
        codigoPostal,
        metodoPago,
        carrito
    };

    try {
        const res = await fetch("http://localhost:3000/comprar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(compra)
        });

        if (res.ok) {
            alert("¡Compra confirmada! Te enviamos un correo.");
            localStorage.removeItem("carrito");
        } else {
            alert("Ocurrió un error al procesar la compra.");
        }
    } catch (err) {
        console.error(err);
        alert("Error de conexión con el servidor.");
    }
});