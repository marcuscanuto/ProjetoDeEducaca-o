// usando banco SqlLite por ser mais simples
//instalar o knex que permite escrever sql usando Js === yarn add knex sqlite3 

//instalar o cors permite que nosso front end que está rodando em uma porta diferente ex:8080
// acesse nossa API que está rodando em outra porta ex:3000
// yarn add cors


// server.ts é o principal arquivo tudo vai partir dele.
//  Vamos utilizar o typeScript pra desenvolver a API com o node
// instalar o typeScript com === yarn add typescript -D
// Ou com npm i typescript -D
// Depois instale as configurações === yarn tsc --init || npx tsc --init
// vai lá no tsconfig.json e mude onde tem "target":es5 e coloca para "target":es2017 pois o node ainda não entende o js as 
// outras versões  
// instalar outra dependência === yarn add ts-node-dev -D (add ts-node-dev -D executa o servidor e obs se tem alteração no scrpit)
// lá no package.json --transpile-only === transforma o código typescript em js
// lá no package.json --ignore-watch node_modules === para não tentar fazer conversões de código na dentro da pasta node_modules
// lá no package.json --respawn === para toda vez que tiver uma alteração no código vai restartar
// ctrl + c para parar de exercutar 
// depois instalar o express yarn add express
//de inicio ele dar erro pq o express não tem as configurações todas do TypeScript
//  passa o mmouse por cima e instale a dependência que ele pede
// yarn add @types/express -D

// // rotas
//  métodos http:
//  GET: BUSCAR OU LISTAR UMA INFORMAÇÃO
//  POST: CRIAR NOVA INFORMAÇÃO DENTRO DO  BACKEND
//  PUT: ATUALIZAR UMA INFORMAÇÃO EXISTENTE
//  DELETE:  DELETAR UMA INFORMAÇÃO
// essa função dentro do get é passada dois parâmetros dentro dela request(que tem informações sobre a requisição onde vem
// os dados do usuário)
//  e o segundo parâmetro é o response que é a resposta que eu vou devolver

// usando método post com o insomnia rest
// pq as requisições lá no browser só funciona com o get

// obs: as rotas podem ser iguais contanto que os métodos sejam diferentes
                          
                                
//                                     PARÂMETROS
//1- as informações do usuário lá no front vem no corpo da requisição (request body)

// 2- routes params === identificar um recurso quero atualizar ou deletar e ele vem na rota 
// ex: app.delete('/users/:id',(request,response) OS " : " SERVEM PARA DIZER QUE AQUILO É UM PARÂMETRO NÃO PARTE DA ROTA
//console.log(request.params) 

// 3- query params === para paginação,filtros,ordenação
// acessa através de request.query dar um console.log

// app.get('/',(request,response)=>{
//     //  a gente consegue acessar o corpo da requisição com o request.body
//     // console.log(request.query)
    
//     // response exite vários metodos para responder se for pra responder um texto use o send
//     // return response.send('Hello world')    só que a gente vai trabalhar com a API REST para funcionar no mobile e vamos
//     // usar o json
//     return response.json({messagem:'Hello world'})
// })


import express from 'express'
import routes from './routes'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.json()) // para servir pq o express não entende json agora ele faz o parser
app.use(routes) // vai servir essa rota

app.listen(3333) //ouvir nessa porta