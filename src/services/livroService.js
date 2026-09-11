const pool = require("../database/connection");

async function listar() {
    const resultado = await pool.query(
        "SELECT * FROM livros WHERE ativo = TRUE"
    );

    return resultado.rows;
}

async function criar(titulo) {
    const resultado = await pool.query(
        "INSERT INTO livros (titulo) VALUES ($1) RETURNING *",
        [titulo]
    );

    return resultado.rows[0];
}

async function buscarPorId(id) {
    const resultado = await pool.query(
        "SELECT * FROM livros WHERE id = $1 AND ativo = TRUE",
        [id]
    );

    return resultado.rows[0];
}

async function atualizar(id, titulo) {
    const resultado = await pool.query(
        "UPDATE livros SET titulo = $1 WHERE id = $2 AND ativo = TRUE RETURNING *",
        [titulo, id]
    );

    return resultado.rows[0];
}

async function excluir(id) {
    const resultado = await pool.query(
        "UPDATE livros SET ativo = FALSE WHERE id = $1 AND ativo = TRUE RETURNING *",
        [id]
    );

    return resultado.rows[0];
}

module.exports = {
    listar,
    criar,
    buscarPorId,
    atualizar,
    excluir
};