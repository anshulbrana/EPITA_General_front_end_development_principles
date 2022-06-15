const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({ 
    name: String
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

const message = mongoose.model('Message', {name: String, message:String})

module.exports = message