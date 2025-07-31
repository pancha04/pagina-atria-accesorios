const express = require('express');
const cors = require('cors');
const enviarMail = require('..backend/mailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/comprar', async (req, res) => {
    const { cliente, carrito } = req.body;

    if (!cliente || !carrito || !Array.isArray(carrito)) {
        return res.status(400).json({ error: 'Datos inválidos' });
    }

    try {
        await enviarMail(cliente, carrito);
        res.json({ ok: true, mensaje: 'Compra procesada y correo enviado' });
    } catch (err) {
        console.error('Error al enviar mail:', err);
        res.status(500).json({ error: 'No se pudo enviar el correo' });
    }
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));