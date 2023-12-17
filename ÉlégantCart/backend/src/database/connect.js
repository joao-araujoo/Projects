const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ptv4wct.mongodb.net/?retryWrites=true&w=majority`)

        console.log('Conexão ao banco de dados realizada com sucesso!')
    } catch (error) {
        throw new Error(`Ocorreu um erro ao se conectar ao banco de dados: ${error.message}`)
    }
}

module.exports = connectToDatabase