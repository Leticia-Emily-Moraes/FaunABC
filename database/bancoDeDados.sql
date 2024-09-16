DROP DATABASE IF EXISTS faunaABC;

CREATE DATABASE faunaABC;

USE faunaABC;

CREATE USER IF NOT EXISTS 'user' @'%' IDENTIFIED BY 'FaunaAbc.1234';

GRANT ALL PRIVILEGES ON faunaABC.* TO 'user' @'%';

FLUSH PRIVILEGES;

-- Cadastro de pessoas físicas
CREATE TABLE CadastroPfisico (
    IdPFisico INT AUTO_INCREMENT PRIMARY KEY,
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
    IdONG INT AUTO_INCREMENT PRIMARY KEY,
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
    DataDeNascimento DATE NOT NULL,
    Celular VARCHAR(15) NOT NULL,
    Telefone VARCHAR(15),
    CPF VARCHAR(11) NOT NULL UNIQUE,
    IdUser INT,
    NivelParental ENUM(
        'MaeMadastra',
        'PaiPadrasto',
        'TioTia',
        'AvoAva',
        'FilhoFilha',
        'ResponsavelLegal'
    ) NOT NULL,
    FOREIGN KEY (IdUser) REFERENCES CadastroPfisico (IdPFisico)
);

-- Cadastro de biólogos
CREATE TABLE CadastroBiologo (
    IdProfissionais INT AUTO_INCREMENT PRIMARY KEY,
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
    IdOng INT,
    IdPessoal INT,
    IdResponsavel INT,
    IdBiologo INT,
    FOREIGN KEY (IdOng) REFERENCES CadastroONG (IdONG),
    FOREIGN KEY (IdBiologo) REFERENCES CadastroBiologo (IdProfissionais),
    FOREIGN KEY (IdPessoal) REFERENCES CadastroPfisico (IdPFisico),
    FOREIGN KEY (IdResponsavel) REFERENCES CadastroResponsavel (IdCadRes)
);

-- Cadastro de endereços
CREATE TABLE Endereco (
    IdEndereco INT AUTO_INCREMENT PRIMARY KEY,
    Logradouro VARCHAR(100) NOT NULL,
    Numero VARCHAR(10) NOT NULL,
    Bairro VARCHAR(50) NOT NULL,
    Cidade VARCHAR(50) NOT NULL,
    Cep VARCHAR(8) NOT NULL,
    IdUser INT,
    IdOng INT,
    FOREIGN KEY (IdUser) REFERENCES CadastroPfisico (IdPFisico),
    FOREIGN KEY (IdOng) REFERENCES CadastroONG (IdONG)
);