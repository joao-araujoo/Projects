const CategoryModel = require("../../models/Category");

module.exports = async function getCategoriesByUser(req, res) {
  try {
    const userId = req.user.data._id;

    const categories = await CategoryModel.find({ userId: userId });

    if (categories) {
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
      message: "🔎 No category found with the provided user.",
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
