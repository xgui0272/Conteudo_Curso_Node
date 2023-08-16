const express = require('express');
const path = require('path');



const app = express();
const port = 3000;

const usersRoutes = require('./users')


//Ler o body

app.use(
    express.urlencoded({
        extended: true
    }),
);

app.use(express.json());

app.use(express.static('public'));

const basePath = path.join(__dirname, '/templates');

app.use('/users', usersRoutes);



app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`);
})

app.use((req, res, next) => {
    res.status(404).sendFile(`${basePath}/404.html`);

})

app.listen(port, () => {
    console.log('Servidor iniciado com sucesso!')
})




