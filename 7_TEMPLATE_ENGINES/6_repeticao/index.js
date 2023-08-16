const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

//set handleBars

app.engine('handlebars', exphbs.engine());


app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

    const user = {
        name: 'Matheus',
        surname: 'Batisti',
        age: 30
    }

    const itens = ['A', 'B', 'C'];

    const auth = true;

    const approved = false;

    res.render('home', {user: user, auth, layout: false, approved, itens});
});

app.listen(3000, () => {
    console.log('App Funcionando!');
})