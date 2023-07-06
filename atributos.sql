-- usuario:
-- id
-- nome
-- cpf
-- celular
-- endereco
-- email
-- senha

-- Lojas:
-- id
-- nome
-- cnpj
-- endereco
-- email
-- representante - id_usuario

-- Produtos:
-- id
-- nome
-- desc
-- peso
-- foto

-- Trocas:
-- id
-- fk_produto
-- fk_loja
-- fk_repositor
-- motivo
-- lote
-- data_fabricacao
-- data_vencimento
-- quantidade
-- confirmação

-- Criação da tabela "usuario"
CREATE TABLE usuario (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  cpf VARCHAR(14) NOT NULL,
  celular VARCHAR(20) NOT NULL,
  endereco VARCHAR(200) NOT NULL,
  email VARCHAR(100) NOT NULL,
  senha VARCHAR(100) NOT NULL
);

-- Criação da tabela "lojas"
CREATE TABLE lojas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  cnpj VARCHAR(18) NOT NULL,
  endereco VARCHAR(200) NOT NULL,
  email VARCHAR(100) NOT NULL,
  representante INT NOT NULL,
  FOREIGN KEY (representante) REFERENCES usuario(id)
);

-- Criação da tabela "produtos"
CREATE TABLE produtos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  descricao TEXT,
  peso DECIMAL(10, 2) NOT NULL,
);

-- Criação da tabela "trocas"
CREATE TABLE trocas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  fk_produto INT NOT NULL,
  fk_loja INT NOT NULL,
  fk_repositor INT,
  motivo VARCHAR(100),
  lote VARCHAR(20),
  data_fabricacao DATE,
  data_vencimento DATE,
  quantidade INT,
  confirmacao BOOLEAN,
  FOREIGN KEY (fk_produto) REFERENCES produtos(id),
  FOREIGN KEY (fk_loja) REFERENCES lojas(id),
  FOREIGN KEY (fk_repositor) REFERENCES usuario(id)
);
