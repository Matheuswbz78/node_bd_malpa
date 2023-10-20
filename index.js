const express = require('express');
const bodyParser = require('body-parser');
const usuarioController = require('./controllers/usuarioController');
const empresaController = require('./Controllers/empresaController');
const denunciaController = require('./Controllers/denunciaController');
const app = express();

app.use(bodyParser.json());

app.get('/usuarios', usuarioController.listarUsuarios);
app.post('/usuarios', usuarioController.criarUsuario);

app.get('/empresas', empresaController.listarEmpresa);
app.post('/empresas', empresaController.criarEmpresa);

app.get('/denuncia', denunciaController.listarDenuncia);
app.post('/denuncia', denunciaController.criarDenuncia);

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
