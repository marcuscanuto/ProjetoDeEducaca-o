// tabela para conexões
import Knex from 'knex';


export async function up(knex:Knex){
return knex.schema.createTable('connection',table=>{
            table.increments('id').primary()

           
            
            table.integer('user_id')
            .notNullable()
            .references('id') 
            .inTable('users') 
            .onUpdate('CASCADE') // o que vai acontecer com o id class_id caso ele seja alterado lá na tabela classes ('CASCADE') NO UPDATE === reflete a alteração em todos os lugares que dependem daquela informação
            .onDelete('CASCADE') // o que acontece se for deletado da plataforma 'CASCADE'FAZ deletar tudo            

            table.timestamp('created_at') // quando aconteceu o contato ou a conexão
            .defaultTo(knex.raw('CURRENT_TIMESTAMP')) // o horário atual que esse registro está sendo criado e salva no creat_at
            .notNullable()  

    })
            
}

export async function down(knex:Knex){

return knex.schema.dropTable('connection')
}