const livroService = require("../services/livroService");

async function listar(req, res) {
    const livros = await livroService.listar();

    res.json(livros);
}

module.exports = {
    listar
};