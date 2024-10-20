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
    ("Aldoria"),
    ("Belaview"),
    ("Crestwood"),
    ("Doveshire"),
    ("Eastborough"),
    ("Fairgrove"),
    ("Glenrock"),
    ("Havenhill"),
    ("Ivystone"),
    ("Juniper Grove");


INSERT INTO tb_company (name_company, id_city)
VALUES
    ('empresa1', (SELECT id_city FROM tb_city WHERE name_city = 'Aldoria')),
    ('empresa1', (SELECT id_city FROM tb_city WHERE name_city = 'Belaview')),
    ('empresa1', (SELECT id_city FROM tb_city WHERE name_city = 'Crestwood')),
    ('empresa1', (SELECT id_city FROM tb_city WHERE name_city = 'Doveshire')),
    ('empresa1', (SELECT id_city FROM tb_city WHERE name_city = 'Eastborough')),
    ('empresa1', (SELECT id_city FROM tb_city WHERE name_city = 'Fairgrove')),
    ('empresa1', (SELECT id_city FROM tb_city WHERE name_city = 'Glenrock')),
    ('empresa1', (SELECT id_city FROM tb_city WHERE name_city = 'Juniper Grove')),
    ('empresa3', (SELECT id_city FROM tb_city WHERE name_city = 'Belaview')),
    ('empresa3', (SELECT id_city FROM tb_city WHERE name_city = 'Glenrock')),
    ('empresa3', (SELECT id_city FROM tb_city WHERE name_city = 'Ivystone')),
    ('empresa4', (SELECT id_city FROM tb_city WHERE name_city = 'Aldoria')),
    ('empresa2', (SELECT id_city FROM tb_city WHERE name_city = 'Aldoria')),
    ('empresa2', (SELECT id_city FROM tb_city WHERE name_city = 'Belaview')),
    ('empresa2', (SELECT id_city FROM tb_city WHERE name_city = 'Crestwood')),
    ('empresa2', (SELECT id_city FROM tb_city WHERE name_city = 'Havenhill')),
    ('empresa5', (SELECT id_city FROM tb_city WHERE name_city = 'Crestwood'));

