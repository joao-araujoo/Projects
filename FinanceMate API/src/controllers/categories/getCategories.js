const CategoryModel = require("../../models/Category");

module.exports = async function getCategories(req, res) {
  try {
    const categories = await CategoryModel.find({});

    if (categories.length > 0) {
      return res.status(200).json({
        status: true,
        code: 200,
        message: "🎉 Categories found successfully!",
        data: categories,
      });
    }

    res.status(404).json({
      status: false,
      code: 404,
      message: "🔎 No categories found.",
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
