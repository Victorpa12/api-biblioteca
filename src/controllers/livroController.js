const livroService = require("../services/livroService");

function listar(req, res) {
    const livros = livroService.listar();

    res.json(livros);
}

module.exports = {
    listar
};