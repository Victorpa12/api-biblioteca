const pool = require("../database/connection");

async function listar() {
    const resultado = await pool.query("SELECT * FROM livros");

    return resultado.rows;
}

module.exports = {
    listar
};