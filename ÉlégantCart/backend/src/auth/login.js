const userModel = require('../models/User')
const bcrypt = require('bcrypt')
const Token = require('../models/Token')

module.exports = async function login(req, res) {
    try {
        const { email, password  } = req.body
    
        if (!email || typeof email !== 'string') {
            return res.status(400).json({ status: false, code: 400, error: 'Bad Request', message: '⚠ The email must not be empty or not a string' })
        }
    
        if (!password || typeof password !== 'string') {
            return res.status(400).json({ status: false, code: 400, error: 'Bad Request', message: '⚠ The password must not be empty or not a string' })
        }

        const user = await userModel.findOne({ email: email })

        if (!user) {
            return res.status(400).json({ status: true, code: 400, error: 'Bad Request', message: '⚠ User not found' })
        }

        const checkPassword = await bcrypt.compare(password, user.password)

        if (!checkPassword) {
            return res.status(401).json({ status: true, code: 401, error: 'Unauthorized', message: '⚠ Invalid password'})
        }

        const token = Token.generate(user)

        res.status(200).json({ status: true,  code: 200, message: '🎉 Login successful!', user, token: token })
    } catch (error) {
        res.status(500).json({ status: false, code: 500, error: '⚠ Server Error', message: error.message })
    } 
}