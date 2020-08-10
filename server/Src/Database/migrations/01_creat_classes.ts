// tabela para as aulas
import Knex from 'knex';


export async function up(knex:Knex){
return knex.schema.createTable('classes',table=>{
                    table.increments('id').primary()
            table.string('subject').notNullable()
            table.decimal('cost').notNullable()

            // criando um relacionamento
            // essa tabela classes sempre vai pertencer a um usuário no caso o professor quem está dando essa aula
            table.integer('user_id')
            .notNullable()
            .references('id') // vai referênciar o campo id
            .inTable('users') // dentro da tabela
            .onUpdate('CASCADE') // o que vai acontecer com o id user_id caso ele seja alterado lá na tabela users ('CASCADE') NO UPDATE === reflete a alteração em todos os lugares que dependem daquela informação
            .onDelete('CASCADE') // o que acontece com as aulas do professor se o professor for deletado da plataforma 'CASCADE'FAZ deletar todas as aulas do professor
            

    })
            
}

export async function down(knex:Knex){

return knex.schema.dropTable('classes')
}
   
       

