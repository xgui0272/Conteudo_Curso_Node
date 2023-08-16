const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

//set handleBars

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home', {layout: false});
});

app.listen(3000, () => {
    console.log('App Funcionando!');
})