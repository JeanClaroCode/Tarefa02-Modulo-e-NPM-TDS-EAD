# Atividade - Módulos, NPM e Webpack com Node.js

Este repositório contém as respostas para a atividade de Módulos, NPM e Webpack com Node.js.

## Estrutura do Projeto

```
.
├── src/
│   ├── index.js     # Arquivo principal para Webpack
│   └── utils.js     # Funções utilitárias para transformação de texto
├── cases.js         # Exemplo de uso dos pacotes npm
├── index.html       # Página HTML para ES Modules
├── index.js         # Exemplo de uso do módulo Node.js
├── main.js         # Arquivo JS para ES Modules
├── soma.js         # Módulo Node.js com função exportada
├── soma.mjs        # Módulo ES6 com função exportada
├── webpack.html    # Interface web com Webpack
└── webpack.config.js # Configuração do Webpack
```

## Respostas às Questões

### 1. Módulo Node.js com função exportada
- Implementado em `soma.js` (módulo) e `index.js` (uso)
- Para testar: `npm start`

### 2. ES Modules para navegador
- Implementado em `soma.mjs` (módulo) e `main.js` (uso)
- Interface HTML em `index.html`
- Para testar: Abra `index.html` no navegador usando um servidor local

### 3. Utilização do pacote to-space-case
- Implementado em `cases.js`
- Para testar: `npm test`

### 4. Package.json e múltiplos pacotes
- Configuração em `package.json`
- Implementação dos testes em `cases.js`
- Pacotes utilizados: to-space-case, to-capital-case, to-constant-case

### 5. Webpack no navegador
- Interface implementada em `webpack.html`
- Lógica em `src/index.js` e `src/utils.js`
- Build gerado em `dist/bundle.js`

### 6. Divisão em múltiplos arquivos
- Código dividido entre `src/index.js` e `src/utils.js`
- Webpack configurado em `webpack.config.js`

## Como Testar

1. Clone o repositório
\`\`\`bash
git clone [URL do seu repositório]
cd [nome-do-repo]
\`\`\`

2. Instale as dependências
\`\`\`bash
npm install
\`\`\`

3. Execute os diferentes exemplos:

- Para testar o módulo Node.js básico:
\`\`\`bash
npm start
\`\`\`

- Para testar as transformações de texto:
\`\`\`bash
npm test
\`\`\`

- Para construir o projeto Webpack:
\`\`\`bash
npm run build
\`\`\`

4. Para testar a interface web:
   - Abra `webpack.html` no navegador após executar `npm run build`
   - Digite um texto no campo de entrada
   - Clique em "Transformar" para ver as diferentes transformações

5. Para testar os ES Modules:
   - Use um servidor local (como Live Server do VS Code)
   - Abra `index.html` através do servidor
   - Verifique o console do navegador para ver o resultado

## Dependências

- to-space-case
- to-capital-case
- to-constant-case
- webpack
- webpack-cli

## Scripts Disponíveis

- `npm start`: Executa o exemplo básico de Node.js
- `npm test`: Executa os testes de transformação de texto
- `npm run build`: Compila o projeto usando Webpack
