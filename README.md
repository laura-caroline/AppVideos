## Instalação

### Pré-requisitos

Liste as ferramentas e softwares necessários para rodar o projeto:

- Node.js versão 16.20.2
- NPM ou Yarn
- Expo CLI

### Passos para Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/laura-caroline/AppVideos.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd AppVideos
    ```
2. Modifique a branch para master:
    ```bash
    git checkout master
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```

4. Abra outra aba no terminal(fica no mesmo caminho do projeto) e suba a API com os dados mockados:
    ```bash
    npx json-server db.json
    ```
5. Modifique em src/services/config/api e coloquei seu endereço ip do dispostivo da rede

6. Volte para aba anterior e rode o projeto:
    ```bash
    npm run android
    ```

7. Rode os testes de funcionalidades:
    ```bash
    npm run jest
    ```
