const mongoose = require('mongoose')

// TODO atualizar informações do usuário futuramente
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel