const express = require('express');
const path = require('path');

const basePath = path.join(__dirname, 'templates');

const app = express();
const port = 3000;


app.get('/users/:id', (req, res) => {

    const id = req.params.id;

    console.log(`Estamos Buscando pelo usuario: ${id}`)

    res.sendFile(`${basePath}/users.html`);
})

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`);
})


app.listen(port, () => {
    console.log('Servidor iniciado com sucesso!')
})
