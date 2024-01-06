const userModel = require('../../models/User')
const bcrypt = require('bcrypt')

module.exports = async function updateUser(req, res) {
    try {
        const userID = req.params.id

        const { name, email, password } = req.body

        if (!name || typeof name !== 'string') {
            return res.status(400).json({ status: false, code: 400, error: 'Bad Request', message: '⚠ The name must not be empty or not a string' })
        }
    
        if (!email || typeof email !== 'string') {
            return res.status(400).json({ status: false, code: 400, error: 'Bad Request', message: '⚠ The email must not be empty or not a string' })
        }
    
        if (!password || typeof password !== 'string') {
            return res.status(400).json({ status: false, code: 400, error: 'Bad Request', message: '⚠ The password must not be empty or not a string' })
        }

        const salt = await bcrypt.genSalt(12)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = {
            name,
            email,
            password: hashPassword,
        }

        const updatedUser = await userModel.findByIdAndUpdate(userID, newUser, { new: true })

        if (updatedUser) {
            return res.status(200).json({ status: true, code: 200, message: '🎉 User updated successfully!', data: updatedUser })
        }

        res.status(404).json({ status: true, code: 404, message: '🔎 No user found with the provided ID.' })
    } catch (error) {
        res.status(500).json({ status: false, code: 500, error: 'Server Error', message: error.message })
    }
}