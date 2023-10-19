const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.frtvxn5.mongodb.net/?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexão ao banco de dados realizada com sucesso!');
    } catch (error) {
        console.error('Ocorreu um erro ao se conectar ao banco de dados: ', error);
    }
};

module.exports = connectToDatabase;