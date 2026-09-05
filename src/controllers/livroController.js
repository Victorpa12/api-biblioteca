const livroService = require("../services/livroService");
const { criarLivroSchema } = require("../schemas/livroSchema");

async function listar(req, res) {
    const livros = await livroService.listar();

    res.json(livros);
}

async function criar(req, res) {
    const resultado = criarLivroSchema.safeParse(req.body);

    if (!resultado.success) {
        return res.status(400).json({
            mensagem: "Dados inválidos",
            erros: resultado.error.issues
        });
    }

    const { titulo } = resultado.data;

    const livro = await livroService.criar(titulo);

    res.status(201).json(livro);
}

module.exports = {
    listar,
    criar
};