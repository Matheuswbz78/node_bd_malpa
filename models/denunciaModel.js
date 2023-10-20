const mysql = require('mysql');

const DenunciaDB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bd_malpa',
});

DenunciaDB.connect((err) => {
  if (err) {
    console.error('Erro de conexão com o banco de dados:', err);
    return;
  }
  console.log('Conexão com o banco de dados estabelecida');
});

module.exports = DenunciaDB;
