import {Request,Response} from 'express'
import db from '../Database/conection'

export default class ConnectionsController{
    async index(request:Request,response:Response){
            const totalConncections = await db('connection').count('* as total')
            // listando todas as conexões
            const {total} = totalConncections[0]
            return response.json({total})
    }
    
    async create(request:Request,response:Response){
        const {user_id} = request.body

        await db('connection').insert({
            user_id,
        })

        return response.status(201).send()
    }
}