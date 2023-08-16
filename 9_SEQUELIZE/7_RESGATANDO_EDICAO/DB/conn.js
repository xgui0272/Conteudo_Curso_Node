const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sequelize1', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

// try {
//     sequelize.authenticate();
//     console.log('Conectamos com sucesso ao sequelize');
    
// } catch (error) {
//     console.log('Não foi possivel conectar: ', error);
// }

module.exports = sequelize;