# NG.CASH_BACK

# Instale as dependências com o comando abaixo:

=> yarn install

# Rode a aplicação com o comando abaixo:

=> yarn dev

# ROTAS DA APLICAÇÃO

1 => /createUserAccount
2 => /authenticateUser
3 => /createTransaction
4 => /getUserTransactions
5 => /getUserBalance

# COMO USAR AS ROTAS DA APLICAÇÃO

- /createUserAccount => É necessário passar um objeto com o usuário(todas as letras maiúsculas) e senha.

Ex: {
"username": "TESTE",
"password": 12345678T"
}.

- As seguintes regras são necessárias:
  O username precisa ser composto por, pelo menos, 3 caracteres.
  A Password precisa ser composta por pelo menos 8 caracteres, um número e uma letra maiúscula.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

- /authenticateUser => É necessário passar um objeto com o usuário e senha cadastrados anteriormente.
  Ex: {
  "username": "TESTE",
  "password": 12345678T"
  }.
  Após isso um token de autenticação será gerado.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

- /createTransaction => É necessário passar um objeto com o usuário e valor que irá receber a transferência. Também é preciso informar o token de autenticação no header da aplicação, do tipo 'Bearer'.

Ex: {
"creditedAccountUser": "TESTE2",
"value": 2
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

- /getUserTransactions => É necessário passar um objeto com o nome do usuário. Também é preciso informar o token de autenticação no header da aplicação, do tipo 'Bearer'.

Ex: {
"username": "TESTE1",
}

- /getUserBalance => É necessário passar um objeto com o nome do usuário. Também é preciso informar o token de autenticação no header da aplicação, do tipo 'Bearer'.

Ex: {
"username": "TESTE1",
}
