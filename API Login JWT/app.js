require('dotenv').config()

const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const connectToDatabase = require('./src/database/connect')

const PORT = 3000

const app = express()

app.use(express.json())

// models
const User = require('./src/models/User')

// middleware - check token
function checkToken(req, res, next) {
    const authHeader = req.headers['authorization']
    // check if header exists and split the "Bearer" from the token
    const token = authHeader && authHeader.split(' ')

    if (!token) {
        return res.status(401).json({ msg: 'Acesso negado!' })
    }

    try {
        const secret = process.env.SECRET

        jwt.verify(token, secret)

        next()
    } catch (error) {
        res.status(400).json({ msg: 'Token inválido!' })
    }
}

// public route
app.get('/', (req, res) => {
    res.status(200).json({ msg: "Bem vindo a nossa API!" })
})

// private route
app.get('/users/:id', checkToken, async (req, res) => {
    try {
        const id = req.params.id

        // check if user exists
        const user = await User.findById(id, '-password')

        if (!user) {
            return res.status(404).json({ msg: 'Usuário não encontrado!' })
        }

        res.status(200).json(user)
    } catch (error) {
        console.log(error.message)

        res.status(500).json({ msg: 'Aconteceu um erro no servidor, tente novamente mais tarde!' })
    }
})

// register user
app.post('/auth/register', async (req, res) => {
    const { name, email, password, confirmPassword } = req.body

    // validations
    if (!name) {
        return res.status(422).json({ msg: 'O nome é obrigatório!' })
    }

    if (!email) {
        return res.status(422).json({ msg: 'O email é obrigatório!' })
    }

    if (!password) {
        return res.status(422).json({ msg: 'A senha é obrigatória!' })
    }

    if (password !== confirmPassword) {
        return res.status(422).json({ msg: 'As senhas não conferem!' })
    }

    // check if user exists
    const userExists = await User.findOne({ email: email })

    if (userExists) {
        return res.status(422).json({ msg: 'Este email já está sendo utilizado!' })
    }

    // create password
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    // create user 
    const user = new User({
        name,
        email,
        password: passwordHash
    })

    try {
        await user.save()

        res.status(201).json({ msg: 'Usuário criado com sucesso!' })
    } catch (error) {
        console.log(error.message)

        res.status(500).json({ msg: 'Aconteceu um erro no servidor, tente novamente mais tarde!' })
    }
})

// login user
app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body

    // validations
    if (!email) {
        return res.status(422).json({ msg: 'O email é obrigatório!' })
    }

    if (!password) {
        return res.status(422).json({ msg: 'A senha é obrigatória!' })
    }

    const user = await User.findOne({ email: email })

    // check if user exists
    if (!user) {
        return res.status(404).json({ msg: 'Usuário não encontrado!' })
    }

    // check if password match
    const checkPassword = await bcrypt.compare(password, user.password)

    if (!checkPassword) {
        return res.status(422).json({ msg: 'Senha inválida!' })
    }

    try {
        const secret = process.env.secret

        const token = jwt.sign(
            {
                id: user._id
            },
            secret
        )

        res.status(200).json({ msg: 'Usuário logado com sucesso!', token })
    } catch (error) {
        console.log(error.message)

        res.status(500).json({ msg: 'Aconteceu um erro no servidor, tente novamente mais tarde!' })
    }
})


connectToDatabase()

app.listen(PORT, () => console.log(`Servidor aberto na porta ${PORT}`))