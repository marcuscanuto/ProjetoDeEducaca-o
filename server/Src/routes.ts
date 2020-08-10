import express from 'express'
import ClassesControllers from './controllers/ClassesController'
import ConnectionsController from './controllers/connectionsController'



const routes = express.Router() // são para trabalhar só com as rotas e exportar
// criando alguma coisa sempre o método post estamos criando a aula

const classesControllers = new ClassesControllers()
const connectionController = new ConnectionsController()

routes.get('/classes',classesControllers.index)
routes.post('/classes',classesControllers.create)
routes.get('/connection',connectionController.index)
routes.post('/connection',connectionController.create)



export default routes