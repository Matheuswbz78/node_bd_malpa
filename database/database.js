const conn = require('./connection');

const autenticarBancoDeDados = async () => {
  try {
    await conn.authenticate();
    console.log('Banco Conectado!');
  } catch (erro) {
    console.error('Erro na autenticação do banco de dados:', erro);
  }
};

autenticarBancoDeDados();
