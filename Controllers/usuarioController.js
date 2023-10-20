const usuarioModel = require('../models/usuarioModel');

exports.listarUsuarios = (req, res) => {
  usuarioModel.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      console.error('Erro na consulta:', err);
      res.status(500).json({ error: 'Erro ao listar usuários' });
    } else {
      res.json(results);
    }
  });
};

exports.criarUsuario = (req, res) => {
  const { nome, email, cpf, data_nascimento, senha } = req.body;

  const insertQuery = 'INSERT INTO usuarios (nome, email, cpf, data_nascimento, senha) VALUES (?, ?, ?, ?, ?)';
  const values = [nome, email, cpf, data_nascimento, senha];

  usuarioModel.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error('Erro na inserção:', err);
      res.status(500).json({ error: 'Erro ao criar usuário' });
    } else {
      res.status(201).json({ message: 'Usuário criado com sucesso' });
    }
  });
};
