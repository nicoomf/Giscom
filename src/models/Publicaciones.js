const mongoose = require('mongoose');
const { Schema, model} = mongoose;
const mongoosePaginate = require('mongoose-paginate-v2');

const publicacionSchema = new Schema({
    titulo: {type: String, required: true},
    descripcion: {type: String, required: true},
    url: {type: String, required: true},
    creado: {type: String},
    autor: {type: String},
    categoria: {type: String, unique: true}
},{
    timestamps: true
});

publicacionSchema.plugin(mongoosePaginate);

module.exports = model('Publicaciones', publicacionSchema);
