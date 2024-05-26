# NG.CASH_BACK

## Repositórios do GitHub

- Backend: [NG.cash_back](https://github.com/Flaviojcf/NG.cash_back)
- Frontend: [NG.cash_front](https://github.com/Flaviojcf/NG.cash_front)

## Instalação

Para instalar as dependências, utilize o seguinte comando:
yarn install

## Execução da Aplicação

Para rodar a aplicação, utilize o seguinte comando:
yarn dev


## Rotas da Aplicação

1. **/createUserAccount**: Cria uma conta de usuário. É necessário passar um objeto com o nome de usuário (todas as letras maiúsculas) e senha.

    Exemplo de requisição:
    ```json
    {
      "username": "TESTE",
      "password": "12345678T"
    }
    ```

    - Regras:
      - O username precisa ter no mínimo 3 caracteres.
      - A senha precisa ter no mínimo 8 caracteres, incluindo pelo menos um número e uma letra maiúscula.

2. **/authenticateUser**: Autentica um usuário. É necessário passar um objeto com o nome de usuário e senha previamente cadastrados.

    Exemplo de requisição:
    ```json
    {
      "username": "TESTE",
      "password": "12345678T"
    }
    ```

    Após a autenticação, um token será gerado.

3. **/createTransaction**: Cria uma transação. É necessário passar um objeto com o nome de usuário que irá receber a transferência e o valor da transação. O token de autenticação deve ser enviado no cabeçalho da requisição, no formato 'Bearer'.

    Exemplo de requisição:
    ```json
    {
      "creditedAccountUser": "TESTE2",
      "value": 2
    }
    ```

4. **/getUserTransactions**: Obtém as transações de um usuário. É necessário passar um objeto com o nome do usuário. O token de autenticação deve ser enviado no cabeçalho da requisição, no formato 'Bearer'.

    Exemplo de requisição:
    ```json
    {
      "username": "TESTE1"
    }
    ```

5. **/getUserBalance**: Obtém o saldo de um usuário. É necessário passar um objeto com o nome do usuário. O token de autenticação deve ser enviado no cabeçalho da requisição, no formato 'Bearer'.

    Exemplo de requisição:
    ```json
    {
      "username": "TESTE1"
    }
    ```

Por favor, sinta-se à vontade para contribuir ou relatar problemas nos repositórios do GitHub correspondentes.


