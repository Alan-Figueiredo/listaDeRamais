CREATE TABLE tb_company (

    id_company INT PRIMARY KEY UNIQUE AUTO_INCREMENT NOT NULL ,
    name_company VARCHAR(100)
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
    id_sector INT,
    id_company INT,
    FOREIGN KEY (id_sector) REFERENCES tb_sector(id_sector),
    FOREIGN KEY (id_company) REFERENCES tb_company(id_company)
);