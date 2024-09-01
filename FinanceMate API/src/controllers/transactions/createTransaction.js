const TransactionModel = require("../../models/Transaction");

module.exports = async function createTransaction(req, res) {
  try {
    const { date, type, category, description, amount, paid, receipt, userId } =
      req.body;

    if (
      !date ||
      !type ||
      !category ||
      !description ||
      !amount ||
      typeof paid !== "boolean" ||
      !userId
    ) {
      return res.status(400).json({
        status: false,
        code: 400,
        error: "Bad Request",
        message: "⚠ All fields are required!",
      });
    }

    const transaction = await TransactionModel.create({
      date,
      type,
      category,
      description,
      amount,
      paid,
      receipt,
      userId,
    });

    res.status(201).json({
      status: true,
      code: 201,
      message: "🎉 Transaction created successfully!",
      data: transaction,
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
