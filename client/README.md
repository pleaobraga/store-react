# Kanban Board - Client

Esse projeto não utilizou o CReate React App mas sim [react/scarfold](https://github.com/pleaobraga/react-scaffold) criado por mim, se você quiser conhecê-lo melhor, verifique o link, explica sobre tudo.

Este Projeto está integrado às mais recentes bibliotecas de:

- Redux
- React Router Dom
- Jest
- Enzyme
- Storybook
- Babel
- Webpack

# Quick Start

## Installing dependencies

Para iniciar o projeto, use este comando no seu terminal para instalar as depedencias

```
yarn add
```

## Starting the project

Para iniciar o projeto, use este comando no seu terminal

```
yarn run start
```

aguarde alguns segundos e o projeto abrirá uma nova guia no seu navegador automaticamente

Vá pa a url do seu navegador e digite o nome do productLIst cadastrado

```
localhost/{productListName}
```

dessa forma a aplicação funcionará perfeitamente

### First time

Não se esqueça de estar rodando o back-end e ter no anco de dados um product list

## Build the project

```
yarn run build
```

## Using Storybok

O storybook é uma ducumentação de UI do front-end

Para iniciar o Storybook, use o comando:

```
yarn run storybook
```

Isso abrirá uma nova página da Web com o Storybook em execução na porta 9000

### Addons

Este Storybook já está configurado com alguns complementos como Knobs, Actions e Info.

## Commits

Este projeto usa o Husk.js e toda vez que você envia o código, ele executa a tarefa de pré-confirmação para verificar o lint e executar todos os testes, **para que o código só seja enviado se seguir as regras lint e não tiver nenhum erro de teste.**

## Project Architecture

A arquitetura do projeto é baseada em página, e usando os princípios do SOLID e a pasta de origem é como:

```
src
  components
  pages
  reducers
  utils
  routes.js
  index
```

### Components Pages

A arquitetura dos arquivos js é como seguir o exemplo

```
components
  Component
    index.js
    Component.test.js
    Component.storie.js (what makes sense)
    Component.scss (what makes sense)
    Component.jsx
```

Portanto, cada componente tem seu arquivo test, storie, jsx e um índice para exportar tudo.

Essa arquitetura é fácil de manter, pois para consertar um componente, você pode entrar em sua pasta e alterar tudo.

### EXPLANATION

A arquitetura foi modelada dessa forma para que fique facil a reutilização e em caso do projeto crescer é possivel seguir 2 caminhos,
Utilizar esse projeto como um micro-front-end ou adicionar novas funcionalidades como componentes e paginas

Foi-se criado componentes extremamente reutilizaveis como o **List**, **Filter** **ListItem** com o objetivo de garantir menos repetição de codigo e o mesmo stilo CSS caso seja utilizad futuramente por outras partes da aplicação

Se não tivesze feito tudo do zero utilizaria as seguintes bibliotecas para poder me auxiliar

- Material-ui
- Formik

o que aceleraria muito o prcesso de desenvolvimento

### Reducers

FOi utilizado o reducer para manter um codigo mais reutilizavel, preparado para o crescimento da aplicação, para essa primeira parte ele não se faz ecessario, mas pensado em um evolução do mesmo ele deria muito util.

### Utils

Na pasta utils, existe algumas funções e os arquivos de contants

## TESTS

Foram criados varios testes para a aplicação

Para testar a aplicação utilize o comando

```
yarn run test
```

existem outros comando de teste que podem ser vistos melhor no projeto base [react/scarfold](https://github.com/pleaobraga/react-scaffold)

## Dynamic Import and Performance

Atualmente, precisamos prestar atenção no desempenho, se não cuidarmos disso, seu projeto funcionará lentamente, e a expetriência do cliente ficará muito frustrada.

Criei neste projeto um componente chamado DynamicImport, ele é integrado ao webpack para que você possa criar diferentes pacotes configuráveis com ele e importá-los dinamicamente, para importar apenas o pacote correto para essa página.

Ele é aplicado no arquivo **routes.js**, para que cada página que você importe crie automaticamente um novo pacote configurável de bandle performaticly.

Verifique no arquivo de rotas como usá-lo e verifique o componente DynamicImport para ver como ele funciona.

Este componente é melhor que **React.lazy** porque pode lidar com três situações diferentes:

- Loading
- Error
- Component

diferente de **React.lazy** e **React.Suspense**, que só podiam lidar com:

- Loading
- Component

## Vendors

O webpack está configurado para criar um arquivo de fornecedores com bibliotecas comuns como react, redux ...


## FUTURE IMPROVMENTS

- Melhorar validação do formulario tanto vizual quanto funções de validação
- Implementar autenticaçao
- Adicionar typescript
- Adicionar Docker
- adicionar botoes de aplicar modificação ao deletar um produto
- Melhorar layout das paginas
- Escrever testes para o redux
