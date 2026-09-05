const livroService = require("../services/livroService");

async function listar(req, res) {
    const livros = await livroService.listar();

    res.json(livros);
}

async function criar(req, res) {
    const { titulo } = req.body;

    const livro = await livroService.criar(titulo);

    res.status(201).json(livro);
}

module.exports = {
    listar,
    criar
};