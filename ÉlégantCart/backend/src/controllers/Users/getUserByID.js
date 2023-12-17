const userModel = require('../../models/User')

module.exports = async function getUserByID(req, res) {
    try {
        const userID = req.params.id

        const user = await userModel.findById(userID)

        if (user) {
            return res.status(200).json({ status: true, code: 200, message: '🎉 User found successfully!', data: user })
        }

        res.status(404).json({ status: true, code: 404, message: '🔎 No user found with the provided ID.' })
    } catch (error) {
        res.status(500).json({ status: false, code: 500, error: 'Server Error', message: error.message })
    }
}