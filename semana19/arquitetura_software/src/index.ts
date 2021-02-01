import express from 'express'
import cors from 'cors'
import { signup, login, businessGetAllUsers } from './controller/userController'
import { createTask,getTaskById } from './controller/taskController'

const app = express()
app.use(express.json())
app.use(cors())

app.put('/signup', signup)
app.post('/login', login)
app.get('/all', businessGetAllUsers)

app.put('/task', createTask)
app.get('/task/:id', getTaskById)

app.listen(3000, () => {
   console.log('Servidor rodando na porta 3000')
})