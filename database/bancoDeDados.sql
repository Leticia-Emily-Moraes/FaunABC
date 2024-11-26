SET GLOBAL event_scheduler = ON;
SET GLOBAL time_zone = 'America/Sao_Paulo';
SET SESSION time_zone = 'America/Sao_Paulo';

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
    FOREIGN KEY (IdUser) REFERENCES CadastroPfisico(IdPFisico) ON DELETE CASCADE
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
    FOREIGN KEY (IdPessoal) REFERENCES CadastroPfisico(IdPFisico) ON DELETE CASCADE,
    FOREIGN KEY (IdOng) REFERENCES CadastroONG(IdONG) ON DELETE CASCADE,
    FOREIGN KEY (IdBiologo) REFERENCES CadastroBiologo(IdProfissionais) ON DELETE CASCADE,
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
    FOREIGN KEY (IdUser) REFERENCES CadastroPfisico(IdPFisico) ON DELETE CASCADE,
    FOREIGN KEY (IdOng) REFERENCES CadastroONG(IdONG) ON DELETE CASCADE
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
    DataAlerta DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    IdAutor INT,
    FOREIGN KEY (IdAutor) REFERENCES Login(IdLogin) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Chats (	
	IdChat INT AUTO_INCREMENT PRIMARY KEY,
    IdBiologo VARCHAR(20) NOT NULL,
    IdUsuario VARCHAR(20) NOT NULL,
    Criado DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    IsAtivo BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (IdUsuario) REFERENCES CadastroPfisico(IdPFisico) ON DELETE CASCADE,
    FOREIGN KEY (IdBiologo) REFERENCES CadastroBiologo(IdProfissionais) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Mensagens (
	IdMensagem INT AUTO_INCREMENT PRIMARY KEY,
    IdChat INT NOT NULL,
    IdRemetente INT NOT NULL,
    Mensagem TEXT NOT NULL,
    Enviada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    lida BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (IdChat) REFERENCES Chats(IdChat) ON DELETE CASCADE,
    FOREIGN KEY (IdRemetente) REFERENCES Login(IdLogin) ON DELETE CASCADE
);

CREATE TABLE NumsEmergencia (
    id INT AUTO_INCREMENT PRIMARY KEY,
    orgao VARCHAR(255) NOT NULL,
    logradouro VARCHAR(100) NOT NULL,
    numero VARCHAR(10) ,
    bairro VARCHAR(50) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    cep CHAR(8) NOT NULL,
    telefone VARCHAR(255) NOT NULL,
    imagem VARCHAR(255) NOT NULL
);

INSERT INTO NumsEmergencia (orgao, logradouro, numero, bairro, cidade, cep, telefone, imagem) VALUES
('Bombeiros - Ribeirao Pires', 'Av. Pref. Valdirio Prisco', '86', 'Vila Ugliengo', 'Ribeirao Pires', '09402000', '193', '../assets/imgs/numsEmergencia/bombeiros.png'),
('Policia Militar - Ribeirao Pires', 'Av. Francisco Monteiro', '254', 'Centro', 'Ribeirao Pires', '09400310', '190', '../assets/imgs/numsEmergencia/policiaMilitar.png'),
('Policia Civil - Ribeirao Pires', 'Av. Pref. Valdirio Prisco', '245', 'Centro', 'Ribeirao Pires', '09400005', '197', '../assets/imgs/numsEmergencia/policiaCivil.png'),
('Ambulancia - Ribeirao Pires', 'Estr. da Colonia', '2959', 'Santa Luzia', 'Ribeirao Pires', '09405390', '192', '../assets/imgs/numsEmergencia/ambulancia.png'),
('Ibama', 'Rodovia Helio Smidt', NULL, 'Cumbica', 'Guarulhos', '07190100', '(11) 3066-2633', '../assets/imgs/numsEmergencia/ibama.png'),
('DP Fauna', 'Joao Domingues de Oliveira', '320', 'Centro', 'Ribeirao Pires', '09400250', '(11) 97211-1112', '../assets/imgs/numsEmergencia/dpFauna.png'),
('Pelotao Policia Militar - Rio Grande da Serra', 'R. Pref. Carlos Jose Carlson', '222', 'Centro', 'Rio Grande da Serra', '09450000', '(11) 4820-1530', '../assets/imgs/numsEmergencia/policiaMilitar.png'),
('Policia Civil - Rio Grande da Serra', 'Avenida Dom Pedro I', '272', 'Centro', 'Rio Grande da Serra', '09450000', '(11) 4820-1530', '../assets/imgs/numsEmergencia/policiaCivil.png'),
('Corpo de Bombeiros Vila Alzira', 'Av. Santos Dumont', '204', 'Casa Branca', 'Santo Andre', '09015320', '193', '../assets/imgs/numsEmergencia/bombeiros.png'),
('10º Batalhao de Policia Militar', 'Alameda Sao Caetano', '903', 'Campestre', 'Santo Andre', '09070210', '(11) 4421-9888', '../assets/imgs/numsEmergencia/policiaMilitar.png'),
('1° Distrito Policial de Santo Andre', 'R. Xavier de Toledo', '48', 'Centro', 'Santo Andre', '09010130', '(11) 4438-1133', '../assets/imgs/numsEmergencia/policiaCivil.png'),
('Semasa', 'Av. José Caballero', '143', 'Vila Bastos', 'Santo Andre', '09040210', '115', '../assets/imgs/numsEmergencia/semasa.png'),
('Zoonoses Santo Andre', 'R. Igarapava', '239', 'Vila Valparaíso', 'Santo Andre', '09060170', '(11) 3356-9075', '../assets/imgs/numsEmergencia/ZoonosesSA.png'),
('Bombeiros Jardim do Mar', 'Avenida Kennedy', '67', 'Jardim do Mar', 'Santo Andre', '09726253', '(11) 4125-1234', '../assets/imgs/numsEmergencia/bombeiros.png'),
('Sexto Batalhao da Policia Militar Metropolitano', 'R. Giacinto Tognato', '305', 'Baeta Neves', 'Sao Bernardo do Campo', '09760370', '(11) 4121-9077', '../assets/imgs/numsEmergencia/policiaMilitar.png'),
('3° Distrito Policial de Sao Bernardo do Campo', 'Av. Joao Firmino', '425', 'Vila Marchi', 'Sao Bernardo do Campo', '09812460', '(11) 4352-7246', '../assets/imgs/numsEmergencia/policiaCivil.png'),
('Pronto Socorro Central Samu', 'R. Joaquim Nabuco', '364416', 'Centro', 'Sao Bernardo do Campo', '09720375', '(11) 2630-3000', '../assets/imgs/numsEmergencia/ambulancia.png'),
('Zoonoses Sao Bernardo do Campo', 'Av. Dr. Rudge Ramos', '1740 ', 'Rudge Ramos', 'Sao Bernardo do Campo', '09638000', '(11) 4365-3349 / (11) 4367-3306', '../assets/imgs/numsEmergencia/ZoonosesSBC.png'),
('Samu Diadema', 'R. Pascoa Campi', '390', 'Centro', 'Maua', '09942000', '192', '../assets/imgs/numsEmergencia/ambulancia.png'),
('Centro de Controle de Zoonoses (CCZ)', 'Av. Vital Brasil Filho', '280', 'Osvaldo Cruz', 'Sao Caetano do Sul', '09541130', '0800 700 0156', '../assets/imgs/numsEmergencia/ambulancia.png'),
('Guarda Ambiental', 'Rua Justino Paixao', '141', 'Bairro Maua', 'Sao Caetano do Sul', '09580780', '(11) 4233-7516', '../assets/imgs/numsEmergencia/GuardaAmbientalDiadema.png'),
('Centro de Controle de Zoonoses', 'R. Capela', '380', 'Jardim Yambere', 'Diadema', '09970240', '0800 771 0963', '../assets/imgs/numsEmergencia/GuardaAmbientalDiadema.png');


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

CREATE EVENT IF NOT EXISTS AtualizarAlertaInativo
ON SCHEDULE EVERY 1 DAY STARTS CURRENT_TIMESTAMP
DO
  UPDATE Alerta
  SET IsActive = FALSE
  WHERE IsActive = TRUE
    AND DataAlerta <= NOW() - INTERVAL 7 DAY;
    
CREATE EVENT IF NOT EXISTS AtualizarChat
ON SCHEDULE EVERY 1 DAY STARTS CURRENT_TIMESTAMP
DO
  UPDATE Chats
  SET IsAtivo = FALSE
  WHERE IsAtivo = TRUE
    AND Criado <= NOW() - INTERVAL 30 DAY;