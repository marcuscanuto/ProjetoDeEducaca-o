// tabela para os usuários


// para rodar em typeScript precisa sobrescrever o comando do knex acessa yarn knex para ver comandos
// lá no packjson a gente escreve o script knex:migrate e vai ser o comando para executar as migrations 
import knex from 'knex'
import Knex from 'knex';
// 00 no nome do arquivo é para identificar a ordem que os arquivos do migration vão ser executados
// ex: se for criar uma tabela depois e ela depender de outra só que ela executar antes pode dar problema
// a documentação de usar as migration só olhar no site knex em migration api


// recebe como parâmetro o Knex cuidado que tá falando a variável knex recebe o tipo Knex vai receber uma conexão com o banco
// É obrigatório ter esse nome
export async function up(knex:Knex){
    // metodo up quais funções a genter quer realizar no banco de dados
    // parâmetro table é onde a gente vai colocar os parâmetros da nossa tabela
    return knex.schema.createTable('users',table=>{
        //campo do tipo auto increments pro id do usuário campo do tipo primario
        // ele vai co locando 1 ou 2 ou 3 para cada registro
            table.increments('id').primary()
            table.string('name').notNullable()
            table.string('avatar').notNullable()
            table.string('whatsapp').notNullable()
            table.string('bio').notNullable() 
            // notNullable === não pode ser nulos
    })
}

export async function down(knex:Knex){
// caso aconteça algum problema a gente voltar atrás
return knex.schema.dropTable('users')
}
   
       

