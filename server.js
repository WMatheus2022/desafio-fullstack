const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./connection/db.Connection");
const cors = require("cors");

connectDB(); // conecta ao banco

const app = express();

import cors from "cors";
app.use(
  cors({
    origin: "https://cotabox-projeto-jhnb.vercel.app",
  })
);

app.use(express.json());

// Rotas
app.use("/api/contacts", require("./routes/contactRoutes"));

// Middleware para tratar erros
app.use(errorHandler);

// Porta segura via .env
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
