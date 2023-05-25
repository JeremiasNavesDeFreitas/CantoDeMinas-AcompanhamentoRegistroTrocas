<?php
// Obtendo os dados do formulário
$id = $_POST['id'];
$nome = $_POST['nome'];
$cpf = $_POST['cpf'];
$celular = $_POST['celular'];
$endereco = $_POST['endereco'];
$cargo = $_POST['cargo'];

// Estabelecendo a conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "canto_de_minas-registro_trocas";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificando a conexão
if ($conn->connect_error) {
  die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

// Montando a consulta SQL para inserir os dados
$sql = "INSERT INTO tabela (id_usuario, NomeUsuário, CPF, Celular, Endereco, Cargo)
        VALUES ('$id', '$nome', '$cpf', '$celular', '$endereco',