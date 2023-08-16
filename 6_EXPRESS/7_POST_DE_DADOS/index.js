const express = require('express');
const path = require('path');

const basePath = path.join(__dirname, 'templates');

const app = express();
const port = 3000;


//Ler o body

app.use(
    express.urlencoded({
        extended: true
    }),
);

app.use(express.json());

app.get('/users/create', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`);
})

app.post('/users/save', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;

    console.log(`O nome do usuario é ${name} e ele tem ${age} anos!`)

    res.sendFile(`${basePath}/userForm.html`);
    

})

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


