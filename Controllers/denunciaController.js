const denunciaModel = require('../models/denunciaModel');

exports.listarDenuncia = (req, res) => {
  denunciaModel.query('SELECT * FROM denuncias', (err, results) => {
    if (err) {
      console.error('Erro na consulta:', err);
      res.status(500).json({ error: 'Erro ao listar denuncia' });
    } else {
      res.json(results);
    }
  });
};

exports.criarDenuncia = (req, res) => {
  const { nome, endereco, numero, bairro, 
    descricao_problema, imagens, videos } = req.body;

  const insertQuery = 'INSERT INTO denuncias (nome, endereco, numero, bairro, descricao_problema, imagens, videos) VALUES (?, ?, ?, ?, ?)';
  const values = [nome, endereco, numero, bairro, descricao_problema, imagens, videos];

  denunciaModel.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error('Erro na inserção:', err);
      res.status(500).json({ error: 'Erro ao criar denuncia' });
    } else {
      res.status(201).json({ message: 'Sucesso ao criar denuncia' });
    }
  });
};
