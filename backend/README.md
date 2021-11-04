# Backend

Este projeto foi criado utilizando o framework `LARAVEL`.


### Ferramentas

Foi utlizado neste projeto o `composer`, para a gerenência de bibliotecas do projeto, e o `docker`, para a execução do projeto, como também do banco de dados


### Instalando as dependências

Após a clonagem deste projeto, se faz necessário a execução do seguinte comando:
```
compose install
```
para as dependências do projeto serem instaladas


### Variáveis de ambiente

Algumas configurações se fazem necessária para a comunicação do backend com o banco de dados.
Para isso, deve-se copiar o arquivo `.env.example`, se encontra na raiz do projeto, e colar, também na raiz, renomeando para `.env`.

Feito isso, é preciso alterar as seguintes linhas nesse mesmo arquivo `.env`:
```
DB_CONNECTION=mysql
DB_HOST=<endereço_ipv3>
DB_PORT=3307 (manter a porta 3307, para evitar conflitos de portas, caso tenha um cliente MYSQL instalado na máquina)
DB_DATABASE=<nome_database>
DB_USERNAME=root (usuário padrão do banco)
DB_PASSWORD=root (senha padrão do banco)
```


### Iniciando o container do projeto

Para levantar o container docker do projeto, basta rodar o comando
```
docker-componse up
```

Este comando está configurado para:
- criar o banco no mysql, caso não exista
- realizar as migrations e a inserção de dados na tabela tipos_transações (de acordo com os dados passados na documentação do desafio)
- inicializar o servidor interno do laravel

Com o container já levantado: abra um novo terminal, no mesmo caminho do projeto, e execute o comando:
```
php artisan passport:install
```
para cadastrar as chaves do cliente oauth no banco, responsável pela geração dos tokens e autenticação dos usuários cadastrados.

O backend se encontrará disponível no endereço `<endereço_ipv4>:8000/api/(endpoints listados a baixo)`, caso queiram acessar em programas como `postman` e o `insomnia`.


### Rotas/Endpoints

O backend contempla os seguintes endpoints:

- Autenticação:
    - (POST) /api/login -> autenticação do usuário
    - (POST) /api/register -> cadastro do usuário
    - (GET) /api/profile -> usuário logado
- CNABs
    - (GET) /api/cnabs -> listar todos
    - (POST) /api/cnabs -> cadastrar um novo cnab
    - (GET) /api/cnabs/{id} -> listar cnab específico
    - (PUT) /api/cnabs/{id} -> atualizar cnab específico
    - (DELETE) /api/cnabs/{id} -> apagar cnab específico
- Tipos de Transações
    - (GET) /api/tipos -> listar todos
    - (POST) /api/tipos -> cadastrar um novo tipo
    - (GET) /api/tipos/{id} -> listar tipo específico
    - (PUT) /api/tipos/{id} -> atualizar tipo específico
    - (DELETE) /api/tipos/{id} -> apagar tipo específico


### Banco de dados

Este projeto também disponibiliza uma forma de acessar/visualizar o banco de dados. Basta acessar no navegador o endereço `<endereço_ipv4>:8081`.

Nos campos para autenticação no banco, digite `database-maria` para o servidor, usuário e senha os mesmos informados no arquivo `.env`.
