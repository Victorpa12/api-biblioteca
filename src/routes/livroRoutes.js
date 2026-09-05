const express = require("express");
const livroController = require("../controllers/livroController");

const router = express.Router();

router.get("/", livroController.listar);

router.post("/", livroController.criar);

module.exports = router;