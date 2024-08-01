CREATE TABLE tb_city (
    id_city INT PRIMARY KEY UNIQUE AUTO_INCREMENT NOT NULL ,
    name_city VARCHAR(100)
);

CREATE TABLE tb_company (

    id_company INT PRIMARY KEY UNIQUE AUTO_INCREMENT NOT NULL ,
    name_company VARCHAR(100),
    id_city INT ,
    FOREIGN KEY (id_city) REFERENCES tb_city(id_city)
);

CREATE TABLE tb_sector (

    id_sector INT PRIMARY KEY UNIQUE AUTO_INCREMENT NOT NULL ,
    name_sector VARCHAR(100)
);

CREATE TABLE tb_user (

    id_user VARCHAR(255) PRIMARY KEY UNIQUE NOT NULL ,
    username VARCHAR(100) NOT NULL UNIQUE ,
    password VARCHAR(255) NOT NULL,
    role TINYINT NOT NULL
);

CREATE TABLE tb_contact (

    id_contact INT PRIMARY KEY UNIQUE AUTO_INCREMENT NOT NULL ,
    name_contact VARCHAR(100),
    number VARCHAR(12) NOT NULL ,
    id_city INT,
    id_sector INT,
    id_company INT,
    FOREIGN KEY (id_sector) REFERENCES tb_sector(id_sector),
    FOREIGN KEY (id_company) REFERENCES tb_company(id_company),
    FOREIGN KEY (id_city) REFERENCES  tb_city(id_city)
);