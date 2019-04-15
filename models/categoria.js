const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriaSchema = new Schema({
    titulo:{ type: String, required:true}
});

const categoria = mongoose.model("Categorias", CategoriaSchema);

module.exports = categoria;