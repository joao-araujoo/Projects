const CategoryModel = require("../../models/Category");

module.exports = async function createCategory(req, res) {
  try {
    const { name, budget, actual, userId } = req.body;

    // Validar se os campos obrigatórios estão presentes e são válidos
    if (!name || typeof name !== "string" || !budget || typeof budget !== "number" || !userId) {
      return res.status(400).json({
        status: false,
        code: 400,
        error: "Bad Request",
        message: "⚠ All fields are required (name, budget, userId)!",
      });
    }

    const category = await CategoryModel.create({
      name,
      budget,
      actual: actual || 0, // Se não for fornecido, usa o valor padrão de 0
      userId,
    });

    res.status(201).json({
      status: true,
      code: 201,
      message: "🎉 Category created successfully!",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      code: 500,
      error: "⚠ Server Error.",
      message: error.message,
    });
  }
};
