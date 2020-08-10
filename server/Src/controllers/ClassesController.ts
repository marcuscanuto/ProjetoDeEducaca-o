import { Request, Response } from 'express'

import db from '../Database/conection'
import converterHora from '../utils/convertHoras'


interface scheduleItem {
    week_day: number
    from: string
    to: string
}

export default class ClassesController {

    // async create(request, response) =>request, response dar erro pq eles n estão sendo chamado
    // pelo routes.post lá do arquivo routes então ele fica como any nessa pasta aqui n
    // tem a importação do express
    //  para corrigir importa de dentro do express cuidado com letra maiúscula e coloca aqui.

    // index aqui é conhecido como método de listagem dentro do padrão  mvc
    async index(request: Request, response: Response) {
        const filters = request.query // request.query para filtrar,paginar e etc

        const subject = filters.subject as string
        const week_day = filters.week_day as string
        const time = filters.time as string


        if (!filters.week_day || !filters.subject || !filters.time) {
            return response.status(400).json({
                error: 'missing filters to search classes '
            })
        }

        // filters.time as string estamos falando que isso aqui é uma string
        const timeInMinutes = converterHora(time)
        // fazendo a query


        const classes = await db('classes')
            .whereExists(function (){ // criando uma query pra vê se existe horário disponível
                this.select('class_schedule.*')
                .from('class_schedule')
                .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                .whereRaw('`class_schedule`.`week_day` = ??',[Number(week_day)])
                .whereRaw('`class_schedule`.`from` <= ??',[timeInMinutes])
                .whereRaw('`class_schedule`.`to` > ??',[timeInMinutes])
            })
            .where('classes.subject', '=', subject) //comparando se a matéria bate
            .join('users', 'classes.user_id' , '=' ,'users.id')
            .select(['classes.*','users.*']) // classes.* seleciona todos os dados da tabela classes e da tabela users

            return response.json(classes)

    }



    async create(request: Request, response: Response) {
        // usando a desestruturação do Js

        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body

        // o primeiro parâmetro é qual a tabela que ele vai fazer a inserção do dado
        // passando o obj com os dados do request.body
        // const insertedUsersIds recebe os ids dos usuários inseridos 
        // o insert alem de inserir ele retorna a lista de ids inseridos

        // iremos fazer o esquema de transaction === vai fazer tudo ao mesmo tempo se uma tabela dar erro ela apaga todo o resto
        const trx = await db.transaction()
        // e você substitui no lugar de db das funções você coloca trx

        try {

            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
            })

            const user_id = insertedUsersIds[0] //pegando o primeiro

            const insertedClassesId = await trx('classes').insert({
                subject,
                cost,
                user_id,
            })

            const class_id = insertedClassesId[0]
            // os parenteses e o:any é pq o typeScript dar erro um jeito de corrigir e fazer uma interface pra dizer o que vem
            const classSchedule = schedule.map((scheduleItem: scheduleItem) => {


                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: converterHora(scheduleItem.from),
                    to: converterHora(scheduleItem.to),
                }
            })
            // o insert aceita um array pra você passar vários ao mesmo tempo
            await trx('class_schedule').insert(classSchedule)

            await trx.commit()  //aqui ele insere tudo ao mesmo tempo no banco de dados

            return response.status(201).send()
        } catch (err) {
            await trx.rollback() // desfaz qualquer alteração que tenha acontecido
            console.log(err)
            return response.status(400).json({
                error: 'Unexpected erro while creating new class'
            })
        }
    }

}