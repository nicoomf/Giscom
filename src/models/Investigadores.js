const mongoose = require('mongoose');
const { Schema, model} = mongoose;

const investigadorSchema = new Schema({
    nombre: {type: String, required: true},
    departamento: {type: String, required: true},
    titulos: [
        {type: String, required: true}
    ],
    areas: [
        {type: String, required: true}
    ],
    email: {type: String, required: true, unique: true},
    numero: {type: String},
    imgUrl: {type: String},
    idmodal: {type: String}
});

// investigadorSchema.methods.setImgUrl = function setImgUrl (filename) {
//     this.imgUrl = `/img/investigadores/${filename}`
// }

module.exports = model('Investigadores', investigadorSchema);