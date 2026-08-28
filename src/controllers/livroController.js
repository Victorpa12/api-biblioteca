function listar(req, res) {
    res.json({
        mensagem: "Lista de livros"
    });
}

module.exports = {
    listar
};