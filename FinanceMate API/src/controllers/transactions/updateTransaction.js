const TransactionModel = require("../../models/Transaction");

module.exports = async function updateTransaction(req, res) {
  try {
    const transactionID = req.params.id;

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

    const updatedTransaction = await TransactionModel.findByIdAndUpdate(
      transactionID,
      {
        date,
        type,
        category,
        description,
        amount,
        paid,
        receipt,
        userId,
      },
      {
        new: true,
      }
    );

    if (updatedTransaction) {
      return res.status(200).json({
        status: true,
        code: 200,
        message: "🎉 Transaction updated successfully!",
        data: updatedTransaction,
      });
    }

    res.status(404).json({
      status: false,
      code: 404,
      message: "🔎 No transaction found with the provided ID.",
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
