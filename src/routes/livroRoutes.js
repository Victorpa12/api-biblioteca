const express = require("express");
const livroController = require("../controllers/livroController");
const validate = require("../middlewares/validate");
const { criarLivroSchema } = require("../schemas/livroSchema");

const router = express.Router();

router.get("/", livroController.listar);

router.get("/:id", livroController.buscarPorId);

router.post(
    "/",
    validate(criarLivroSchema),
    livroController.criar
);

module.exports = router;