INSERT INTO tb_user (id_user,username,password,role)
VALUES ("c94d8f45-68ac-4d6d-a195-b148912424cc","admin","$2a$10$lMzr4CUUchLPnwhu2EfF1OuhRKKeaBhpsdR7NnZ3df3gSp5AVDlbG",1);

INSERT INTO tb_sector (name_sector)
VALUES
    ("ti"),
    ("rh"),
    ("financeiro"),
    ("contabilidade"),
    ("vendas novos"),
    ("pecas"),
    ("pos vendas"),
    ("vendas usados");


INSERT INTO tb_city (name_city)
VALUES
    ("feira de santana"),
    ("itabuna"),
    ("teixeira de freitas"),
    ("jequie"),
    ("irece"),
    ("paulo afonso"),
    ("eunapolis"),
    ("vitoria da conquista"),
    ("petrolina"),
    ("juazeiro");

INSERT INTO tb_company (name_company,id_city)
VALUES
    ('topazio', (SELECT id_city FROM tb_city WHERE name_city = 'feira de santana')),
    ('topazio', (SELECT id_city FROM tb_city WHERE name_city = 'itabuna')),
    ('topazio', (SELECT id_city FROM tb_city WHERE name_city = 'teixeira de freitas')),
    ('topazio', (SELECT id_city FROM tb_city WHERE name_city = 'jequie')),
    ('topazio', (SELECT id_city FROM tb_city WHERE name_city = 'irece')),
    ('topazio', (SELECT id_city FROM tb_city WHERE name_city = 'paulo afonso')),
    ('topazio', (SELECT id_city FROM tb_city WHERE name_city = 'eunapolis')),
    ('topazio', (SELECT id_city FROM tb_city WHERE name_city = 'juazeiro')),
    ('rubi', (SELECT id_city FROM tb_city WHERE name_city = 'itabuna')),
    ('rubi', (SELECT id_city FROM tb_city WHERE name_city = 'eunapolis')),
    ('rubi', (SELECT id_city FROM tb_city WHERE name_city = 'petrolina')),
    ('peugeot', (SELECT id_city FROM tb_city WHERE name_city = 'feira de santana')),
    ('jade', (SELECT id_city FROM tb_city WHERE name_city = 'feira de santana')),
    ('jade', (SELECT id_city FROM tb_city WHERE name_city = 'itabuna')),
    ('jade', (SELECT id_city FROM tb_city WHERE name_city = 'teixeira de freitas')),
    ('jade', (SELECT id_city FROM tb_city WHERE name_city = 'vitoria da conquista')),
    ('itamadil', (SELECT id_city FROM tb_city WHERE name_city = 'teixeira de freitas')),
    ('itadil', (SELECT id_city FROM tb_city WHERE name_city = 'itabuna')),
    ('cristal', (SELECT id_city FROM tb_city WHERE name_city = 'itabuna')),
    ('cristal', (SELECT id_city FROM tb_city WHERE name_city = 'teixeira de freitas')),
    ('citroen', (SELECT id_city FROM tb_city WHERE name_city = 'feira de santana'));
