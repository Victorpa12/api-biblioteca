const { z } = require("zod");

const criarLivroSchema = z.object({
    titulo: z.string().min(1)
});

const atualizarLivroSchema = z.object({
    titulo: z.string().min(1)
});

module.exports = {
    criarLivroSchema,
    atualizarLivroSchema
};