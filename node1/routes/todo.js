const express = require('express')

const Router = express.Router()

const todos = []

Router.get('/', (request, response) => {
    response.status(200).json(todos)
})

Router.post('/', (request, response) =>{
    const {todo} = request.body
    todos.push(todo)

    response.status(200).json(todo)
    // console.log("Body :",request.body)
})

module.exports = Router
