const TransactionModel = require("../../models/Transaction");

module.exports = async function getTransactionByID(req, res) {
  try {
    const transactionID = req.params.id;

    const transaction = await TransactionModel.findById(transactionID);

    if (transaction) {
      return res.status(200).json({
        status: true,
        code: 200,
        message: "🎉 Transaction found successfully!",
        data: transaction,
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
