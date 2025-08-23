const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./connection/db.Connection");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/contacts", require("./routes/contactRoutes"));

// Middleware para tratar erros
app.use(errorHandler);

// Conectar ao banco e só depois iniciar o servidor
const startServer = async () => {
  try {
    await connectDB();
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(` Server running on port ${port}`);
    });
  } catch (error) {
    console.error(" Erro ao conectar ao banco:", error.message);
    process.exit(1);
  }
};

startServer();
