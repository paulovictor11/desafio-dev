# Backend

Este projeto foi criado utilizando o framework 'REACT JS'.


### Ferramentas

Foi utlizado neste projeto o 'yarn', para a gerenência de bibliotecas do projeto e por ser mais peformático do que o `node`.

Para instalar o yarn, execute o seguinte comando no terminal:
```
npm install --global yarn
```


### Instalando as dependências

Após a clonagem deste projeto, se faz necessário a execução do seguinte comando:
```
yarn install
```
para as dependências do projeto serem instaladas


### Atualizando endereço do backend

Para o projeto frontend se comunicar com as rotas disponilibizadas pelo backend, se faz preciso atualizar o arquivo `\src\services\api.ts` e atualizar a variável `url` com o seu endereço ipv4.


### Levantando servidor interno

Para iniciar o servidor interno do projeto só executar o comando:
```
yarn dev
```
e será disponibilizado o endereço `localhost:3000` para ser acessado pelos navegadores.


### Rotas/Telas

O frontend contempla as seguintes rotas:

- /login -> para autenticação
- /register -> para cadastro de novo usuário
- /home -> para tela principal do projeto

> OBS: a rota /home se encontra protegida e só pode ser acessada por um usuário autenticado
