const JWT = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

class Token {
    #secret
    #duration

    constructor() {
        this.#secret = process.env.TOKEN_SECRET
        this.#duration = 60 * 60 * 24 // 24 hours
    }

    generate(payload) {
        const token = JWT.sign({ data: payload }, this.#secret, { expiresIn: this.#duration })
        
        return token
    }

    stripToken(token) {
        let tokenArray = token.split(" ")

        token = tokenArray[1]
        token = token.replace("<", "")
        token = token.replace(">", "")

        return token
    }

    validate(token) {
        try {
            token = this.stripToken(token)

            const decodedToken = JWT.verify(token, this.#secret)

            return decodedToken
        } catch (error) {
            throw new Error("⚠ Error validating token: " + error.message)
        }
    }
}

module.exports = new Token()