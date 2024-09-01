const CategoryModel = require("../../models/Category");

module.exports = async function deleteCategory(req, res) {
  try {
    const categoryID = req.params.id;

    const removedCategory = await CategoryModel.findByIdAndDelete(categoryID);

    if (removedCategory) {
      return res.status(200).json({
        status: true,
        code: 200,
        message: "🎉 Category deleted successfully!",
        data: removedCategory,
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
