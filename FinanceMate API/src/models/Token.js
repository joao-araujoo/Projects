const JWT = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

class Token {
  #secret;
  #duration;

  constructor() {
    this.#secret = process.env.JWT_SECRET;
    this.#duration = 60 * 60 * 24; // 24 hours
  }

  generate(payload) {
    return JWT.sign({ data: payload }, this.#secret, {
      expiresIn: this.#duration,
    });
  }

  stripToken(token) {
    return token.replace(/^Bearer\s+/, "");
  }

  validate(token) {
    try {
      token = this.stripToken(token);
      return JWT.verify(token, this.#secret);
    } catch (error) {
      throw new Error("⚠ Error validating token: " + error.message);
    }
  }
}

module.exports = new Token();
