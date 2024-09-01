const TransactionModel = require("../../models/Transaction");

module.exports = async function deleteTransaction(req, res) {
  try {
    const transactionID = req.params.id;

    const removedTransaction = await TransactionModel.findByIdAndDelete(
      transactionID
    );

    if (removedTransaction) {
      return res.status(200).json({
        status: true,
        code: 200,
        message: "🎉 Transaction deleted successfully!",
        data: removedTransaction,
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
