const { request, response } = require('express')
const express = require('express')

const { v4: uuidv4 } = require('uuid')

const Router = express.Router()


const todos = []

/*
Todos:{
    id: 1,
    label: "label test",
    isDone: true
    }
*/

Router.get('/', (request, response) => {
    response.status(200).json(todos)
})


Router.post('/', (request, response) =>{
    const {todo} = request.body

    todo.id = uuidv4()
    
    todos.push(todo)

    response.status(200).json(todo)
})

Router.put('/:index',(request,response)=>{
    console.log("Entered in PUT")
    const{index} = request.params // From the route
    // const{test} = request.query // From params from URL
    console.log(index)

    const {isDone, label} = request.body // Values that are provided in json as required
    console.log(isDone, label) // To check the value of isDone i.e. true or false from the body of json

    if (typeof todos[index] != 'undefined') {
        if (typeof isDone != 'undefined') {
            todos[index].isDone = isDone
        }
        if (typeof label != 'undefined') {
            todos[index].label = label
        }
    } else {
        return response.status(500).json({"msg": "Todo not found !"})
    }

    return response.status(200).json(todos[index])

})

Router.delete('/:index', (request, response) => {
    const{index} = request.params

    if (typeof todos[index] != 'undefined') {
        todos.splice(index,1) // Point to delete and number of elements to delete
        return response.status(200).json({"msg": "Deleted !"})


    }else{
        return response.status(500).json({"msg": "Todo not found !"})

    }


})

module.exports = Router
