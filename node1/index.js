const express = require('express')

//To get the data in body
let bodyParser = require('body-parser')
const todoRouter = require('./routes/todoRoute')


const app = express()

//To manage the log part only so that it can be seen and easily viewed
const morgan = require('morgan')


app.use(morgan('tiny'))
app.use(express.json())

//We can use this as well insted of app.use(express.json())

/*app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));*/

app.get('/', function (request, response){
    return response.status(200).send('It works')

})

app.post('/test', (request, response) =>{
    // return response.status(200).json('post works')

    console.log(request.body)
    const{name} = request.body
    
    if(!name && name == ""){
        return response.status(500).json('Data not received')
    }
    return response.status(200).json(`My name is ${name}`)

})

app.get('/test', (request, response) =>{
    return response.status(200).json('post works on /test')

})

app.use('/todos',todoRouter)

const PORT = 4500


app.listen(PORT, function(){
    console.log(`Server is listening to http://localhost:${PORT}`)
})


// console.log('Hello world !')
// let count = 0

// for( i = count; i < 10; i++){
//     console.log(count)
//     count++

// }