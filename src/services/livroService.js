const pool = require("../database/connection");

async function listar() {
    const resultado = await pool.query("SELECT * FROM livros");

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
        "SELECT * FROM livros WHERE id = $1",
        [id]
    );

    return resultado.rows[0];
}

module.exports = {
    listar,
    criar,
    buscarPorId
};