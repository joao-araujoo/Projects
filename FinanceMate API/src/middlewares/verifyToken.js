const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function verifyToken(req, res, next) {
  // Obter o token do cabeçalho da requisição
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    // Token não fornecido
    return res.status(401).json({
      status: false,
      code: 401,
      error: "Unauthorized",
      message: "⚠ Token not provided. Please log in to continue.",
    });
  }

  // O token é geralmente enviado como 'Bearer <token>', então precisamos separar o 'Bearer ' do token
  const token = authHeader.split(" ")[1];

  if (!token) {
    // Nenhum token encontrado após o prefixo 'Bearer'
    return res.status(401).json({
      status: false,
      code: 401,
      error: "Unauthorized",
      message: "⚠ Invalid token format. Please log in to continue.",
    });
  }

  try {
    // Verificar e decodificar o token usando a chave secreta
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Adicionar os dados decodificados do token ao objeto de requisição
    req.user = decoded;

    // Continuar para a próxima middleware ou rota
    next();
  } catch (error) {
    // Token inválido ou erro ao verificar
    return res.status(401).json({
      status: false,
      code: 401,
      error: "Unauthorized",
      message: "⚠ Invalid or expired token. Please log in again.",
    });
  }
};
