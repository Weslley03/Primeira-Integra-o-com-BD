import { Router } from "express" //exporta algo especifico 
import { getUsers, createUser, deleteUser } from "./controller/UserController.js"

const routes = Router()

routes.get('/users', getUsers)
routes.post('/users', createUser)
routes.delete('/users/:id', deleteUser)


export default routes
