
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
O script `start` é responsável por iniciar o server que estará disponível no endereço http://localhost:4000

## Executando testes
Em breve


## Descrição do projeto
https://docs.google.com/document/d/e/2PACX-1vRMP1dmmr6DpXQECabYiR_pboa4P_XiXEywRX_wntWL0ego4KHlH25_Vsv0HB0_Io4nXn4lNI0eEaXU/pub