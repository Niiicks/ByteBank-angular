### Sobre

Projeto desenvolvido durante curso de Angular, pra colocar em prática alguns conceitos!

Trata-se de uma SPA com uma página para efetuar uma transferência banária, e uma página de extrato que reune todas as movimentações realizadas!

### Pré requisitos

- Instalação do [Node.js](https://nodejs.org/en/download/) para usar [Node Package Manager](https://www.npmjs.com/get-npm)(npm).

### Configurando e executando

- Instale o Angular CLI
```
npm install -g @angular/cli
```

- De dentro da pasta raíz do projeto, use o seguinte comando para rodar o projeto .
```
ng serve
```
(O acesso estará disponível através do `http://localhost:4200/`)

- Para fins de desenvolvimento, utilizamos no projeto um json-server para simular a API, para executa-lo acesse a pasta `dados` e use o comando
```
json-server --watch db.json
```




Informações adicionais do próprio Angular-Cli ->


# Bytebank

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
