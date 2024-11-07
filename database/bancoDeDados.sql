SET GLOBAL event_scheduler = ON;

DROP DATABASE IF EXISTS faunaABC;
CREATE DATABASE IF NOT EXISTS faunaABC;
USE faunaABC;

CREATE USER IF NOT EXISTS 'user'@'%' IDENTIFIED BY 'FaunaAbc.1234';
GRANT ALL PRIVILEGES ON faunaABC.* TO 'user'@'%';
FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS CadastroPfisico (
    IdPFisico VARCHAR(20) PRIMARY KEY,
    PrimeiroNome VARCHAR(50) NOT NULL,
    Sobrenome VARCHAR(50) NOT NULL,
    DataDeNascimento DATE NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    CPF CHAR(11) NOT NULL UNIQUE,
    Celular VARCHAR(15) NOT NULL,
    Telefone VARCHAR(15),
    Senha VARCHAR(60) NOT NULL
);

CREATE TABLE IF NOT EXISTS CadastroONG (
    IdONG VARCHAR(20) PRIMARY KEY,
    NomeONG VARCHAR(100) NOT NULL,
    Email VARCHAR(150) NOT NULL UNIQUE,
    Telefone VARCHAR(15),
    Celular VARCHAR(15) NOT NULL,
    CNPJ CHAR(14) NOT NULL UNIQUE,
    INSS VARCHAR(20) NOT NULL,
    Senha VARCHAR(60) NOT NULL
);

CREATE TABLE IF NOT EXISTS CadastroResponsavel (
    IdCadRes INT AUTO_INCREMENT PRIMARY KEY,
    PrimeiroNome VARCHAR(50) NOT NULL,
    Sobrenome VARCHAR(50) NOT NULL,
    Celular VARCHAR(15) NOT NULL,
    NivelParental ENUM(
        'MaeMadastra', 'PaiPadrasto', 'TioTia', 
        'AvoAvoa', 'FilhoFilha', 'ResponsavelLegal', 
        'IrmaoIrma', 'Outro'
    ) NOT NULL,
    IdUser VARCHAR(20) NOT NULL,
    FOREIGN KEY (IdUser) REFERENCES CadastroPfisico(IdPFisico)
);

CREATE TABLE IF NOT EXISTS CadastroBiologo (
    IdProfissionais VARCHAR(20) PRIMARY KEY,
    PrimeiroNome VARCHAR(50) NOT NULL,
    Sobrenome VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Senha VARCHAR(60) NOT NULL,
    DataDeNascimento DATE NOT NULL,
    Telefone VARCHAR(15),
    Celular VARCHAR(15) NOT NULL,
    CPF CHAR(11) NOT NULL UNIQUE,
    RegistroProfissional VARCHAR(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS Login (
    IdLogin INT AUTO_INCREMENT PRIMARY KEY,
    Usuario VARCHAR(150) NOT NULL UNIQUE,
    Senha VARCHAR(60) NOT NULL,
    TipoUsuario ENUM('PFisico', 'ONG', 'Biologo') NOT NULL, 
    IdPessoal VARCHAR(20),
    IdOng VARCHAR(20),
    IdBiologo VARCHAR(20),
    DataUltimoLogin DATETIME NOT NULL DEFAULT NOW(),
    FOREIGN KEY (IdPessoal) REFERENCES CadastroPfisico(IdPFisico),
    FOREIGN KEY (IdOng) REFERENCES CadastroONG(IdONG),
    FOREIGN KEY (IdBiologo) REFERENCES CadastroBiologo(IdProfissionais),
    CHECK (
        (IdPessoal IS NOT NULL AND IdOng IS NULL AND IdBiologo IS NULL) OR
        (IdPessoal IS NULL AND IdOng IS NOT NULL AND IdBiologo IS NULL) OR
        (IdPessoal IS NULL AND IdOng IS NULL AND IdBiologo IS NOT NULL)
    )
);

CREATE TABLE IF NOT EXISTS Endereco (
    IdEndereco INT AUTO_INCREMENT PRIMARY KEY,
    Logradouro VARCHAR(100) NOT NULL,
    Numero VARCHAR(10) NOT NULL,
    Bairro VARCHAR(50) NOT NULL,
    Cidade VARCHAR(50) NOT NULL,
    Cep CHAR(8) NOT NULL,
    IdUser VARCHAR(20),
    IdOng VARCHAR(20),
    FOREIGN KEY (IdUser) REFERENCES CadastroPfisico(IdPFisico),
    FOREIGN KEY (IdOng) REFERENCES CadastroONG(IdONG)
);

CREATE TABLE IF NOT EXISTS Alerta (
    IdAlerta INT AUTO_INCREMENT PRIMARY KEY,
    Titulo VARCHAR(100) NOT NULL,
    TipoDoAlerta ENUM('Atropelamento', 'SurtoEpidemiologico', 'Epoca') NOT NULL,
    Logradouro VARCHAR(100) NOT NULL,
    Bairro VARCHAR(50) NOT NULL,
    Cidade VARCHAR(50) NOT NULL,
    Cep CHAR(8) NOT NULL,
    IsActive BOOLEAN NOT NULL DEFAULT TRUE,
    DataAlerta DATETIME NOT NULL DEFAULT NOW(),
    IdAutor INT,
    FOREIGN KEY (IdAutor) REFERENCES Login(IdLogin)
);

DELIMITER //
CREATE FUNCTION GerarIdPrefixed(prefix CHAR(1)) 
RETURNS VARCHAR(20) 
DETERMINISTIC
BEGIN
    DECLARE max_id INT;
    SET max_id = (SELECT COALESCE(MAX(CAST(SUBSTRING(IdPFisico, 2) AS UNSIGNED)), 0) FROM CadastroPfisico);
    RETURN CONCAT(prefix, LPAD(max_id + 1, 5, '0'));
END;


DELIMITER //

CREATE TRIGGER trigger_id_CadastroPfisico
BEFORE INSERT ON CadastroPfisico
FOR EACH ROW
BEGIN
    SET NEW.IdPFisico = GerarIdPrefixed('P');
END //

CREATE TRIGGER trigger_id_CadastroONG
BEFORE INSERT ON CadastroONG
FOR EACH ROW
BEGIN
    SET NEW.IdONG = GerarIdPrefixed('O');
END //

CREATE TRIGGER trigger_id_CadastroBiologo
BEFORE INSERT ON CadastroBiologo
FOR EACH ROW
BEGIN
    SET NEW.IdProfissionais = GerarIdPrefixed('B');
END //

DELIMITER ;

CREATE EVENT IF NOT EXISTS AtualizarAlertaInativo
ON SCHEDULE EVERY 1 DAY
DO
  UPDATE Alerta
  SET IsActive = FALSE
  WHERE IsActive = TRUE
    AND DataAlerta <= NOW() - INTERVAL 7 DAY;