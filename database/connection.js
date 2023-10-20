const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'BD_Malpa', // Nome do banco de dados
  'root', // Nome de usuário do MySQL
  '', // Senha do MySQL
  {
    host: 'localhost',
    dialect: 'mysql',
    port: '8000'
  }
);

module.exports = sequelize;
