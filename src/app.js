const express = require("express");
const livroRoutes = require("./routes/livroRoutes");

const app = express();

app.use(express.json());

app.use("/livros", livroRoutes);

module.exports = app;