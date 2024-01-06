const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./database/connect");
const routes = require("./router");

const app = express();

// TODO adicionar middleware para tokenJWT
app.use(express.json());
app.use(cors());
app.use("/api", routes);

const PORT = 8080;

try {
  connectToDatabase();

  app.listen(PORT, () => console.log(`🎉 Listening on port ${PORT}!`));
} catch (error) {
  console.error(
    "⚠ An error occurred while starting the server! " + error.message
  );
}
