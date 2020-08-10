// tabela para os horarios
import Knex from 'knex';


export async function up(knex:Knex){
return knex.schema.createTable('class_schedule',table=>{
            table.increments('id').primary()

            table.integer('week_day').notNullable()
            table.integer('from').notNullable()
            table.integer('to').notNullable()

            
            table.integer('class_id')
            .notNullable()
            .references('id') 
            .inTable('classes') 
            .onUpdate('CASCADE') // o que vai acontecer com o id class_id caso ele seja alterado lá na tabela classes ('CASCADE') NO UPDATE === reflete a alteração em todos os lugares que dependem daquela informação
            .onDelete('CASCADE') // o que acontece se for deletado da plataforma 'CASCADE'FAZ deletar tudo            

    })
            
}

export async function down(knex:Knex){

return knex.schema.dropTable('class_schedule')
}