const express = require('express')
const connectToDatabase = require('./database/connect')
const routes = require('./router')

const app = express()

app.use(express.json())
app.use('/api', routes)

const PORT = 8080

try {
    connectToDatabase()

    app.listen(PORT, () => console.log(`🎉 Listening on port ${PORT}!`))
} catch (error) {
    console.error('⚠ An error occurred while starting the server! ' + error.message)
}