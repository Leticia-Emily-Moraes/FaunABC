DROP DATABASE IF EXISTS faunaABC;

CREATE DATABASE faunaABC;

USE faunaABC;

CREATE USER IF NOT EXISTS 'user' @'%' IDENTIFIED BY 'FaunaAbc.1234';

GRANT ALL PRIVILEGES ON faunaABC.* TO 'user' @'%';

FLUSH PRIVILEGES;

-- Cadastro de pessoas físicas
CREATE TABLE CadastroPfisico (
    IdPFisico VARCHAR(20) PRIMARY KEY,
    PrimeiroNome VARCHAR(50) NOT NULL,
    Sobrenome VARCHAR(50) NOT NULL,
    DataDeNascimento DATE NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    CPF VARCHAR(11) NOT NULL UNIQUE,
    Celular VARCHAR(15) NOT NULL,
    Telefone VARCHAR(15),
    Senha VARCHAR(60) NOT NULL
);

-- Cadastro de ONGs
CREATE TABLE CadastroONG (
    IdONG VARCHAR(20) PRIMARY KEY,
    NomeONG VARCHAR(100) NOT NULL,
    Email VARCHAR(150) NOT NULL UNIQUE,
    Telefone VARCHAR(15) NOT NULL,
    Celular VARCHAR(15) NOT NULL,
    CNPJ VARCHAR(14) NOT NULL UNIQUE,
    INSS VARCHAR(20) NOT NULL,
    Senha VARCHAR(60) NOT NULL
);

-- Cadastro de responsáveis
CREATE TABLE CadastroResponsavel (
    IdCadRes INT AUTO_INCREMENT PRIMARY KEY,
    PrimeiroNome VARCHAR(50) NOT NULL,
    Sobrenome VARCHAR(50) NOT NULL,
    Celular VARCHAR(15) NOT NULL,
    NivelParental ENUM(
        'MaeMadastra',
        'PaiPadrasto',
        'TioTia',
        'AvoAva',
        'FilhoFilha',
        'ResponsavelLegal'
    ) NOT NULL,
    IdUser VARCHAR(20) NOT NULL,
    FOREIGN KEY (IdUser) REFERENCES CadastroPfisico (IdPFisico)
);

-- Cadastro de biólogos
CREATE TABLE CadastroBiologo (
    IdProfissionais VARCHAR(20) PRIMARY KEY,
    PrimeiroNome VARCHAR(50) NOT NULL,
    Sobrenome VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Senha VARCHAR(60) NOT NULL,
    DataDeNascimento DATE NOT NULL,
    Telefone VARCHAR(15),
    Celular VARCHAR(15) NOT NULL,
    CPF VARCHAR(11) NOT NULL UNIQUE,
    RegistroProfissional VARCHAR(200) NOT NULL
);

-- Tabela de login que associa diferentes usuários
CREATE TABLE Login (
    IdLogin INT AUTO_INCREMENT PRIMARY KEY,
    IdOng VARCHAR(20),
    IdPessoal VARCHAR(20),
    IdBiologo VARCHAR(20),
    FOREIGN KEY (IdOng) REFERENCES CadastroONG (IdONG),
    FOREIGN KEY (IdBiologo) REFERENCES CadastroBiologo (IdProfissionais),
    FOREIGN KEY (IdPessoal) REFERENCES CadastroPfisico (IdPFisico)
);

-- Cadastro de endereços
CREATE TABLE Endereco (
    IdEndereco INT AUTO_INCREMENT PRIMARY KEY,
    Logradouro VARCHAR(100) NOT NULL,
    Numero VARCHAR(10) NOT NULL,
    Bairro VARCHAR(50) NOT NULL,
    Cidade VARCHAR(50) NOT NULL,
    Cep VARCHAR(8) NOT NULL,
    IdUser VARCHAR(20),
    IdOng VARCHAR(20),
    FOREIGN KEY (IdUser) REFERENCES CadastroPfisico (IdPFisico),
    FOREIGN KEY (IdOng) REFERENCES CadastroONG (IdONG)
);

DELIMITER //

CREATE TRIGGER apos_insert_user_padrao
BEFORE INSERT ON CadastroPfisico
FOR EACH ROW
BEGIN
	DECLARE max_id INT;
    
    SELECT COALESCE(MAX(CAST(SUBSTRING(IdPFisico, 2) AS UNSIGNED)), 0) INTO max_id
    FROM CadastroPfisico;
    
    SET NEW.IdPFisico = CONCAT('P', LPAD(max_id + 1, 5, '0'));
END//

CREATE TRIGGER apos_insert_user_ong
BEFORE INSERT ON CadastroONG
FOR EACH ROW
BEGIN
	DECLARE max_id INT;
    
    SELECT COALESCE(MAX(CAST(SUBSTRING(IdONG, 2) AS UNSIGNED)), 0) INTO max_id
    FROM CadastroONG;
    
    SET NEW.IdONG = CONCAT('O', LPAD(max_id + 1, 5, '0'));
END//

CREATE TRIGGER apos_insert_user_bio
BEFORE INSERT ON CadastroBiologo
FOR EACH ROW
BEGIN
	DECLARE max_id INT;
    
    SELECT COALESCE(MAX(CAST(SUBSTRING(IdProfissionais, 2) AS UNSIGNED)), 0) INTO max_id
    FROM CadastroBiologo;
    
    SET NEW.IdProfissionais = CONCAT('B', LPAD(max_id + 1, 5, '0'));
END//

DELIMITER ;