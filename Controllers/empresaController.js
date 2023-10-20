const empresaModel = require('../models/empresaModel');

exports.listarEmpresa = (req, res) => {
  empresaModel.query('SELECT * FROM empresa', (err, results) => {
    if (err) {
      console.error('Erro na consulta:', err);
      res.status(500).json({ error: 'Erro ao listar empresa' });
    } else {
      res.json(results);
    }
  });
};

exports.criarEmpresa = (req, res) => {
  const { nome, email, cnpj, senha, categoria } = req.body;

  const insertQuery = 'INSERT INTO empresa (nome_empresa, email, cnpj, senha, categoria) VALUES (?, ?, ?, ?, ?)';
  const values = [nome, email, cnpj, senha, categoria];

  empresaModel.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error('Erro na inserção:', err);
      res.status(500).json({ error: 'Erro ao criar empresa' });
    } else {
      res.status(201).json({ message: 'Sucesso ao criar empresa' });
    }
  });
};
