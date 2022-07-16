const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const subsSchema = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    evento: {type: Schema.Types.ObjectId, ref: 'Eventos'},
    email: {type: String}
});

module.exports = model('Subs', subsSchema);