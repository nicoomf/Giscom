const mongoose = require('mongoose');
const { Schema } = mongoose;
const path = require('path');

const imageSchema = new Schema({
    title: {type: String, required: true},
    filename: {type: String, required: true},
    idmodal: {type: String, required: true, unique: true}
})

imageSchema.virtual('uniqueId')
    .get(function () {
        return this.filename.replace(path.extname(this.filename), '')
    })

module.exports = mongoose.model('Image', imageSchema);