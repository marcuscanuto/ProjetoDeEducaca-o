//          É A CONEXÃO COM O  BANCO
// se colocar no terminal yarn knex vai aparecer a lista de comandos que eu posso usar
// o knex por padrão ele executa com o javascript 
// para ele executar com o  typeScript cria uma nova pasta Knexfile.ts 
// migrations - controla as versões do banco de dados
import knex from'knex'
import path from 'path' // ajuda a caminhar pelos caminhos da nossa aplicação

const db = knex({
    client:'sqlite3',
    connection:{
        // path.resolve para não se preocupar com as barras
        filename: path.resolve(__dirname,'database.sqlite') //__dirname referência o diretório desse arquivo aqui
    },
    useNullAsDefault:true, // tem que passar pq o sqlite não sabe o que colocar nos campos vazios aqui a gente manda colocar null

})

export default db