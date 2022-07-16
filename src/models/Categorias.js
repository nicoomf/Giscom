const mongoose = require('mongoose');
const { Schema, model} = mongoose;

const categoriaSchema = new Schema({
    categoria: {type: String}
});

module.exports = model('Categorias', categoriaSchema);