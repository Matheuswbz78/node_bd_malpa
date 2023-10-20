const mysql = require('mysql');

const empresaDB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bd_malpa',
});

empresaDB.connect((err) => {
  if (err) {
    console.error('Erro de conexão com o banco de dados:', err);
    return;
  }
  console.log('Conexão com o banco de dados de empresas estabelecida');
});

module.exports = empresaDB;
