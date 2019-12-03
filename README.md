
# DACA-BACKEND

## Descrição
API GraphQL para um sistema que permite usuários acompanhar o processo de tramitação da criação de Leis. Para mais informações acesse [E-Camara Organizadora](https://docs.google.com/document/d/e/2PACX-1vRMP1dmmr6DpXQECabYiR_pboa4P_XiXEywRX_wntWL0ego4KHlH25_Vsv0HB0_Io4nXn4lNI0eEaXU/pub)

  
## Iniciando
### Pre requisitos
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
Em construção

## Diagrama da Arquitetura

Esta aplicação consiste em uma API GraphQL, que é composta por três camadas: `GraphQL`, `Serviços/Lógica de negócio` e `Repositório`.

De forma simploria, a api recebe requisições na rota destinada ao GraphQL (esta rota está definida no index.ts), o próprio graphql identifica qual tipo de `query/mutation`. Após o tipo de query ou mutation for identificada, o resolver especifico é chamado. Os resolvers fazem parte da camada de lógica de negócios.

[Diagrama de arquitetura](/Arquitetura.jpg).

Para mais informações sobre como funciona uma API GraphQL acesse a [documentação](https://graphql.org/learn/) ou entre em contato.

## Persistência

Na camada de repositório, esta aplicação utiliza algum banco de dados relacional e sua comunicação é dada por intermédio do Sequelize. Sequelize é um ORM, para javascript, com objetivo de comunicar e fazer o mapeamento entre sua aplicação e o banco de dados relacional. É necessário a implementação de interfaces/modelos para entidades, cujo objetivo é poder acessar programaticamente as suas respectivas tabelas no banco de dados.  
Exemplo:  

Definindo a interface de pessoa:
```
export interface Pessoa extends Model {
  readonly id: Number;
  readonly dni: Number;
}
```
Definindo como o sequelize deverá mapear o modelo Pessoa no banco de dados:
```
atributos = {
  dni: {
    allowNull: false,
    type: new DataTypes.STRING(64),
    unique: true,
  },
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  ...
}
```

Declarando ao sequelize os atributos:
```
const pessoa = sequelize.define('Pessoa', atributos);
```
Para criar nova pessoa no banco de dados:
```
pessoa.create({ dni: 1, ... });
```

Para mais informações sobre o sequelize acesse a [documentação](https://sequelize.org/master/).

## Autenticação/Autorização

No sistema de autenticação estamos utilizando token jwt, juntamente com passport, que este é um middleware que tem como objetivo identificar se há token na requisição e recuperar a informação proveniente do token e colocar esta informação na requisição.  

No sistema a informação do DNI e a senha de pessoa é utilizada para gerar o token, quando a query createToken(dni, password) é realizada. A geração do token consiste em verificar se uma pessoa no sistema possui o DNI requisitado e caso está pessoa exista no sistema, é checado as senhas e caso esta última verificação seja válida, um token é gerado com aquele DNI como resposta.

Para identificar se uma query foi realizada autenticada, há um middleware do passport, na rota responsável pelo graphql, que é responsável por extrair o token do header da requisição e em seguida aplicar a estragégia definida para manipular o token. Caso o token seja válido para estratégia definida, a informação do token será incrementada na requisição.  

Como o graphql tem acesso a informação do token para realizar autorização? A informação que é incrementada pelo passport a requisição é recebida pelo apollo e repassada para o resolvers através do contexto. Desta forma, como o resolver tem acesso ao contexto, ele pode utilizar esta informação para decidir realizar a lógica de autorização. Para facilitar a manutenção , legibilidade e versatilidade da aplicação, foi criado uma composição de resolver, que pode receber um resolver de autorização. Este resolver é denomido de `authResolver`.

## Escolha das tecnologias
### Micro-serviços (microsservices)
A arquitetura de microsserviços provém maior escalabilidade, visto que os serviços independentes podem crescer de forma autônoma, dado que os serviços são independentes de estado(stateless). Outro motivo secundário foi o interesse pessoal de aprender sobre a arquitetura microsserviços. Inicialmente a ideia seria separar um serviço de autenticação, um serviço de criação de usuários e um outro serviço responsável por criar deputados e leis.  
Não conseguimos concluir a ideia microsserviços.

### Kubernetes
A escolha do kubernetes foi decorrente da escolha de microsserviços, porque no kubernetes pelo fato de ser uma ferramenta de automatização de deploy, que permite escalabilidade horizontal simples utilizando containers.


## Desempenho

Em Construção

## Como contribuir?

Sinta-se avontade em criar issues e/ou marcá-las para resolvê-las.  

Informações adicionais de como contribuir: em construção.

## Licensa
MIT
