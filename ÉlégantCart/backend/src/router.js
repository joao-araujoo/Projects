const express = require('express')

const getUsers = require('./controllers/Users/getUsers')
const getUserByID = require('./controllers/Users/getUserByID')
const createUser = require('./controllers/Users/createUser')
const updateUser = require('./controllers/Users/updateUser')
const deleteUser = require('./controllers/Users/deleteUser')
const login = require('./auth/login')

const router = express.Router()

router.get("/", (req, res) => res.send("Hello World!"))
router.post('/auth/login', login)
router.get('/users', getUsers)
router.get('/users/:id', getUserByID)
router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

module.exports = router