const express = require('express');
const router = express.Router();
const path = require('path');
const basePath = path.join(__dirname, '../templates');

router.get('/create', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`);
})

router.post('/save', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;

    console.log(`O nome do usuario é ${name} e ele tem ${age} anos!`)

    res.sendFile(`${basePath}/userForm.html`);
    

})

//Arquivos estaticos
app.use(express.static('public'));

router.get('/:id', (req, res) => {

    const id = req.params.id;

    console.log(`Estamos Buscando pelo usuario: ${id}`)

    res.sendFile(`${basePath}/users.html`);

})


module.exports = router;