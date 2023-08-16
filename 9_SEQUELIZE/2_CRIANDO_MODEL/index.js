const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./DB/conn');
const User = require('./models/User');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

//midiware para pegar o body

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json());


app.get('/', (req, res) => {
    res.render('home'); 
})



conn.sync().then(() => {
    app.listen(3000);
})