const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://joaoaraujo:saf9jXJz9eoZ4odH@cluster0.uohux.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("🎉 Succefully connected to database!");
  } catch (error) {
    throw new Error(
      `⚠ An error occurred while connecting to the database: ${error.message}`
    );
  }
};

module.exports = connectToDatabase;
