const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const mongoosePaginate = require('mongoose-paginate-v2');

const eventoSchema = new Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  fechaFormat: { type: String },
  creado: { type: String },
  url: { type: String, required: true },
  hora: { type: String },
  subs: [
    {
      nombre: { type: String },
      apellido: { type: String },
      email: { type: String}
    },
  ],
});

eventoSchema.plugin(mongoosePaginate);

module.exports = model("Eventos", eventoSchema);
