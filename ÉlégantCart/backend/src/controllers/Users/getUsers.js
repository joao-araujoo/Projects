const userModel = require('../../models/User')

module.exports = async function getUsers(req, res) {
    try {
        const users = await userModel.find({})

        if (users) {
            return res.status(200).json({ status: true, code: 200, message: '🎉 Users found successfully!', data: users })
        }

        res.status(404).json({ status: true, code: 404, message: '🔎 No users found.' })
    } catch (error) {
        res.status(500).json({ status: false, code: 500, error: 'Server Error', message: error.message })
    }
}