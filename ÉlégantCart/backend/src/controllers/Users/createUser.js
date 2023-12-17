const userModel = require('../../models/User')
const bcrypt = require('bcrypt')

module.exports = async function createUser(req, res) {
    try {
        const { username, email, password  } = req.body
    
        if (!username || typeof username !== 'string') {
            return res.status(400).json({ status: false, code: 400, error: 'Bad Request', message: '⚠ The username must not be empty or not a string' })
        }
    
        if (!email || typeof email !== 'string') {
            return res.status(400).json({ status: false, code: 400, error: 'Bad Request', message: '⚠ The email must not be empty or not a string' })
        }
    
        if (!password || typeof password !== 'string') {
            return res.status(400).json({ status: false, code: 400, error: 'Bad Request', message: '⚠ The password must not be empty or not a string' })
        }

        const salt = await bcrypt.genSalt(12)
        const hashPassword = await bcrypt.hash(password, salt)
    
        const user = await userModel.create({
            username, 
            email,
            password: hashPassword
        })

        res.status(201).json({ status: true,  code: 201, message: '🎉 User created successfully!', data: user })
    } catch (error) {
        res.status(500).json({ status: false, code: 500, error: '⚠ Server Error', message: error.message })
    } 
}