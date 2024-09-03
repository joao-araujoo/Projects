const CategoryModel = require("../../models/Category");

module.exports = async function updateCategory(req, res) {
  try {
    const categoryID = req.params.id;
    const { name, budget, actual } = req.body;
    const userId = req.user.data._id;

    // Validar se os campos obrigatórios estão presentes e são válidos
    if (
      !name ||
      typeof name !== "string" ||
      !budget ||
      typeof budget !== "number" ||
      !userId
    ) {
      return res.status(400).json({
        status: false,
        code: 400,
        error: "Bad Request",
        message: "⚠ All fields are required (name, budget, userId)!",
      });
    }

    const updatedCategory = await CategoryModel.findByIdAndUpdate(
      categoryID,
      {
        name,
        budget,
        actual: actual || 0, // Se não for fornecido, usa o valor padrão de 0
        userId,
      },
      {
        new: true,
      }
    );

    if (updatedCategory) {
      return res.status(200).json({
        status: true,
        code: 200,
        message: "🎉 Category updated successfully!",
        data: updatedCategory,
      });
    }

    res.status(404).json({
      status: false,
      code: 404,
      message: "🔎 No category found with the provided ID.",
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
