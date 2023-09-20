
# Projeto Store Manager

A API construída é um sistema de gerenciamento de vendas no formato dropshipping em que será possível criar, visualizar, deletar e atualizar produtos e vendas.


## Instalação

1. Clone o repositório.
```bash
git clone git@github.com:Thromoto/project-store-manager.git
```
2. Entre na pasta do repositório que você acabou de clonar.

3. Rode o serviço node e db com o comando.
```bash
docker-compose up -d
```
* Lembre-se de parar o mysql se estiver usando localmente na porta padrão (3306), ou adapte, caso queria fazer uso da aplicação em containers;
* Esses serviços irão inicializar um container chamado `store_manager` e outro chamado `store_manager_db`;
* A partir daqui você pode rodar o container store_manager via CLI ou abri-lo no VS Code.
* Use o comando `docker exec -it store_manager bash`.
* Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

4. Instale as dependências.
```bash
npm install
```
5. Inicie o servidor de desenvolvimento executando o seguinte comando.
```bash
npm start
```


## Stack utilizada

JavaScript, Node.js, Express, APIs REST, CRUD, usando a arquitetura em camadas (model-service-controller), MySQL.