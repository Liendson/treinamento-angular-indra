## Projeto Gestão de Alunos

O objetivo do projeto é servir de base para o treinamento de "Formação Java/Angular para novos profissionais" da Indra, unidade de João Pessoa. Ministrado por Ivan Queiroz (ifbomfim@indracompany.com) e Liendson Douglas (ldouglas@indracompany.com).

Este projeto é referente a parte 2 do [Treinamento][parte1].

### Documentação do Angular

- [Angular][ng]

## Configurando o Ambiente de Desenvolvimento

- Instalar o [Node.js][node] com o [Node Package Manager][npm]
- Utilizaremos o [Visual Studio Code][vscode] para desenvolvimento

- Instalar o [Angular Command Line (CLI)][cli] utilizando o seguinte comando:

```
npm install -g @angular/cli
```

- Instalar o [TypeScript][typescript] utilizando o seguinte comando:

```
npm install -g typescript
```

- Instalar as dependências do projeto:

```
npm install
```

Levantar a aplicação:

```
cd [PROJECT NAME]
ng serve
```

### Arquitetura do projeto

```
\node_modules - Diretório padrão para as dependências do projeto
\src - Diretório raiz da aplicação;
  \app - Diretório principal onde ficam os arquivos do projeto;
    \core - Diretório para classes e services core do sistema;
    \layouts - Diretório para adicionar os componentes de footer/header/sidebar e demais layouts
    \shared - Diretório com componentes/diretivas/pipes compartilhados
  \assets - Diretório para imagens e folhas de estilo (CSS) personalizadas
  \environments - Diretório que armazena arquivos de variáveis de ambiente
```

[ng]: https://angular.io
[cli]: https://cli.angular.io/
[npm]: https://www.npmjs.com/get-npm
[vscode]: https://code.visualstudio.com/download
[parte1]: https://github.com/ivanqueiroz/formacao-java
[typescript]: https://www.typescriptlang.org/
[node]: https://nodejs.org/pt-br/download/
