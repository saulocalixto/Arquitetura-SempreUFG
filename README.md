# SempreUFG

O SempreUFG é um software que tem a proposta de facilitar o acesso aos dados acadêmicos dos alunos da UFG. O foco do software, portanto, é dar apoio aos alunos egressos nesta instituição.

## Integrantes
* Gustavo Henrique Batista
* Murillo Nunes
* Saulo Calixto
## Professor Orientador
* Valdemar Neto

## Descrição Arquitetural

A arquitetura aqui proposta é baseada em micro serviços, além de ser divida em multicamadas: Client, ApiGateway, Server e Data. Sendo dividido em camadas e microserviços acabamos atingindo uma boa modularidade do sistema, ajudando na manutenibilidade além de facilitar na divisão de responsabilidades. A camada server é composta de micro serviços que são independentes e expõem seus serviços através de apis restfull.

## Instalação

#### Clone do repositório 

`git clone https://github.com/saulocalixto/Arquitetura-SempreUFG`

#### Criando o banco de dados

Deve-se ter instalado na máquina o **postgreesql** e o **mysql**.

Cada microserviço tem um banco de dados que deve ser previamente criado no **postgresql** antes de rodá-los.
Os bancos de dados que devem ser criados podem ser conferidos no [repositório de configuração](https://github.com/saulocalixto/sempreUFG-ConfigServer)

Para rodar o servidor de autenticação deve-se criar o banco de dados *oauth* no **mysql**.

#### Rodando os microserviços

Os micro serviços podem ser rodados em qualquer ide de sua preferência ou executando diretamente os arquivos *.jar* de cada microserivço.

Deve-se respeitar uma ordem de execução:

1) sempreufg-config-server;
2) sempreufg-eureka-server
3) sempreufg-oauth-server
4) demais microserviços

#### Rodando o client

Primeiramente deve-se ter o **nodejs** e o **yarn** instalado.

Entre na pasta onde encontra-se o projeto e rode o comando:

```
npm install
```

Após tudo instalado rode o comando:

```
yarn start
```

Com isso o browser deve abrir com a aplicação já funcionando.

## Visão geral da arquitetura

![Visão geral arquitetura](https://raw.githubusercontent.com/saulocalixto/Arquitetura-SempreUFG/master/Projeto/Docs/Modelos/Desenvolvimento.png)


## Licença

 [MIT License](https://raw.githubusercontent.com/saulocalixto/Arquitetura-SempreUFG/master/LICENSE?token=AToqX04caRGkblS08vGx9pPaThtpMYRSks5bDTAQwA%3D%3D)
