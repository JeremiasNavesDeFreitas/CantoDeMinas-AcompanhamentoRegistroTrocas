const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Configuração do banco de dados MySQL
const connection = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: 'db-canto-de-minas'
});

// Verifica a conexão com o banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro na conexão com o banco de dados:', err);
    return;
  }
  console.log('Conexão com o banco de dados estabelecida!');
});

// Configuração do servidor Express.js
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rota para processar o formulário
app.post('/processar_formulario', (req, res) => {
  const { id, nome, cpf } = req.body;

  // Insere os dados no banco de dados
  const sql = `INSERT INTO tabela (id, nome, cpf) VALUES (?, ?, ?)`;
  connection.query(sql, [id, nome, cpf], (err, result) => {
    if (err) {
      console.error('Erro ao inserir os dados:', err);
      res.status(500).json({ error: 'Erro ao inserir os dados' });
      return;
    }
    res.status(200).json({ message: 'Dados inseridos com sucesso' });
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
