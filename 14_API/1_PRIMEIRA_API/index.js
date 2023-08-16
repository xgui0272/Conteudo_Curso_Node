const express = require('express');
const app = express();


//Midiware para ler a requisição em json
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json());

//Rotas- endPoints

app.post('/createproduct', (req, res) => {

    const name = req.body.name;
    const price = req.body.price;

    console.log(name, price)
})

app.get('/', (req, res) => {

    res.json({
        message: 'Primeira rota criada com sucesso!'
    })
})

app.listen(3000)