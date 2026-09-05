const express = require("express");

const app = express();

app.use(express.json());

const livroRoutes = require("./routes/livroRoutes");

app.use("/livros", livroRoutes);

module.exports = app;