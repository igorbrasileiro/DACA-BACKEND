
# DACA-BACKEND

Repositório do server da uma aplicação para disciplina de DACA@UFCG

  
## Iniciando
### Prerequisites
O que precisa para instalar o projeto:
* Node >= 10;

### Instalando
Vá até a pasta do projeto e execute o seguinte comando
```
$ npm install
```
e em seguida para executar no modo desenvolvimento execute:
```
$ npm run start:db
$ npm run dev
```
O script `start:db` é responsável por criar o esquema do banco de dados e popular os dados iniciais. Vale salientar que este script compila o projeto previamente.
O script `dev` inicia o server em modo desenvolvimento. O modo desenvolvimento recompila o projeto sempre que um arquivo é alterado no disco.

## Implantação
Vá até a pasta do projeto e execute o seguinte comando
```
$ npm install
```
e em seguida para executar em modo produção execute:

```
$ npm run start:db
$ npm start
```
O script `start:db` é responsável por criar o esquema do banco de dados e popular os dados iniciais. Vale salientar que este script compila o projeto previamente.
O script `start` é responsável por iniciar o server que estará disponível no endereço [localHost](http://localhost:4000)

## Executando testes
Em breve


## Descrição do projeto

Descrição e especificação do [E-Camara Organizadora](https://docs.google.com/document/d/e/2PACX-1vRMP1dmmr6DpXQECabYiR_pboa4P_XiXEywRX_wntWL0ego4KHlH25_Vsv0HB0_Io4nXn4lNI0eEaXU/pub).

## Diagrama da Arquitetura

[Diagrama](/Arquitetura.jpg).

## Persistência

Para persistir os dados está sendo usado o sqlite que é uma biblioteca desenvolvida em C que implementa um banco de dados SQL, o ORM faz o mapeamento dos dados relacionais para o javascript. Através do sequelize é definido os modelos que viram tabelas no banco e através de métodos javascript é possível  realizar as operações de CRUD, o ORM é um facilitador para criar e manipular os dados no banco.

## Autenticação

No sistema de autenticação estamos utilizando token jwt, juntamente com passport, que este é um middleware que tem como objetivo identificar se há token na requisição e recuperar a informação proveniente do token e colocar esta informação na requisição. No nosso sistema a informação do DNI e a senha de pessoa é utilizada para gerar o token. A geração do token consiste em verificar se uma pessoa no sistema possui o DNI requisitado e caso está pessoa exista no sistema, é checado as senhas e caso esta última verificação seja válida, um token é gerado com aquele DNI como resposta.

