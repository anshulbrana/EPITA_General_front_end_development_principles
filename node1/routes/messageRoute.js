const { request, response } = require('express')
const express = require('express')

const messageModel = require('../models/messageModel')

const Router = express.Router()

Router.get('/', async (request, response) => {
    messages = await messageModel.find({})
    return response.status(200).json(messages)
})

Router.get('/:messageId', async (request, response) => {
    const {messageId} = request.params

    message = await messageModel.findOne({_id: messageId})
    return response.status(200).json(message)
})

Router.post('/', async (request, response) => {
    const {message} = request.body

    const messageObj = new messageModel(message)
    await messageObj.save()
    return response.status(200).json(messageObj)
})

Router.put('/:messageId', async (request, response) => {
    const {name} = request.body.message
    const {messageId} = request.params

    const message = await messageModel.findByIdAndUpdate(messageId, {
        name: name
    },{
        new: true
    })

    return response.status(200).json(message)
})


Router.delete('/:messageId', async (request, response) => {
    const {messageId} = request.params

    await messageModel.findOneAndDelete({_id: messageId})
    return response.status(200).json({"msg" : "Message sucessfully deleted"})
})

module.exports = Router