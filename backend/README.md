
# Hi, I'm Alan! 👋


# Lista de Contatos

- Lista de contato que voce poderá adicionar,editar,excluir e visualizar
- Ela é dividida em Company,Sector,User,Contact

# Company



## API Reference

#### Retorna todos as company

```
  GET /api/company
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `idCompany` | `int` | **Required**. id da company |

#### Retorna uma company especifica

```
  GET /api/company/{idCompany}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `idCompany`      | `int` | **Required**. id da company |

#### Cria uma nova company

```
  POST /api/company/create
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nome`      | `string` | **Required**. nome da company |

#### Atualiza uma company ja existente

```
  PUT /api/company/{idCompany}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. id da company |
| `nome`      | `string` | **Required**. nome da company |



