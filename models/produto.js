const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Categoria = require('./categoria');

const ProdutoSchema = new Schema({
    titulo:{ type: String, required:true},
    // img:{ type: String, required:true},
    categoria:{ type: mongoose.Schema.Types.ObjectId, ref: Categoria, required:true},
    preco:{ type: String, required:true},
    descricao:{ type: String, required:true}
});

const produto = mongoose.model("Produtos", ProdutoSchema);

module.exports = produto;