const mongoose = require('mongoose')
const { Schema, model } = mongoose
const path = require('path')

const ayudanteSchema = new Schema({
  nombre: { type: String, required: true },
  proyecto: { type: String, required: true },
  carrera: { type: String, required: true },
  profesor: [{ type: String, required: true }],
  email: { type: String, unique: true },
  imgUrl: {type: String},
  idmodal: {type: String}
})

module.exports = model('Ayudantes', ayudanteSchema)
