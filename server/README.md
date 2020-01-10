# Kanban Board - Server

Este é um projeto de servidor baseado em Node.js e o back-end do aplicativo

ele é utilizado o hapi.js como node framework. Foram utilizados os seguintes modulos na aplicação:

- hapi
- hapi/boom
- hapi/glue
- hapi/joi

# Quick Start

## Installing dependencies

Para iniciar o projeto, use este comando no seu terminal para instalar as depedencias

```
yarn add
```

## Config the .env

Antes de iniciar o servidor, não esqueça de configurar o arquivo .env, com suas credenciais db, defina a porta ...

## Starting the project

Para iniciar o projeto, use este comando no seu terminal.
a porta default é a 4001

```
yarn run start
```

Se for a primeira vez que inicia o projeto não se esqueça de criar um db com o nome **store** e configurar corretamente o .env

## Project Architecture

### Root folder

A arquitetura do projeto foi baseada nos princípios do SOLID e a pasta do servidor é da seguite forma:

```
server
  config
  models
  plugin
  schema
```

### Routes/plugins

foi usada a **hapi/glur** neste projeto para que a solução de plugin fosse implementada(a forma como o hapi trabalha).

Os plugins foram organizados em pastas separadas cada um e sua arquitetura é:

```
plugin
  handler
  index
```

handler contém as funções de manipulador das rotas e o índice exporta as rotas para o manifesto

### DataBase and validations

Utilizou-se a biblioteca **sequelized** para lidar com o banco de dados postgress, **hapi/joy** e **hapi/boom** para validar e manipular as mensagens

foram criados 2 tipos de pastas modelos e esquema para tornar o código mais reutilizável.

```
server
  schema
    index
  models
    model
    index
```

a pasta do esquema lida com o Joi schema e o modelo que aplica o sequelize sobre os schemas

### Configurations

Existe uma pasta no servida para lidar com as configurações

```
server
  config
    config
    manifest
  .env
```

o arquivo de configuração exporta as configurações .env para o aplicativo e os manifestos lidam com as configurações de rotas com base na especificação **hapi/ glue**

foi usado o babel para transpilar o código JS, para que os novos recursos javascript fossem aplicados, como importação e exportação

### EXPLANATION

A arquitetura foi modelada dessa forma para que fique facil a reutilização e em caso do projeto crescer é possivel seguir 2 caminhos,
Utilizar esse projeto como um micro-serviço ou adicionar novas rotas schemas e models nas suas respectivas pastas

## DOCUMENTATION

### API DOCUMENTATION

Para acessar a documentação das apis disponiveis para esse back-end rode a aplicação com o comando

```
yarn run start
```

depois acesse seu navegador e digite a url

```
localhost:{apiPort}/documentation
```

substitua apiPort pela porta escolhida, a default é 4001

## FUTURE IMPROVMENTS

- Melhorar validação do formulario
- Implementar autenticaçao
- Adcionar Husky
- Adicionar typescript
- Adicionar Docker
