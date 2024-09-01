const TransactionModel = require("../../models/Transaction");

module.exports = async function getTransactions(req, res) {
  try {
    const transactions = await TransactionModel.find({});

    if (transactions.length > 0) {
      return res.status(200).json({
        status: true,
        code: 200,
        message: "🎉 Transactions found successfully!",
        data: transactions,
      });
    }

    res.status(404).json({
      status: false,
      code: 404,
      message: "🔎 No transactions found.",
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
