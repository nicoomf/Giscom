const Image  = require('../models/Image');
const path = require('path');
const fs = require('fs-extra');
const { randomName } = require('../helpers/libs');

uploadController = {};

uploadController.renderUpload = async (req, res) => {
    const imagenes = await Image.find();
    res.render('admin/general/subirimg', { imagenes });
}

uploadController.saveUpload = async (req, res) => {
    
    const imgTitulo = randomName();

    const titulo = req.body.titulo;
    const ext = path.extname(req.file.originalname).toLocaleLowerCase();
    const imgTempPath = req.file.path;
    const targetPath = path.resolve(`src/public/uploads/${imgTitulo}${ext}`);

    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' ){
        await fs.rename(imgTempPath, targetPath);
        const img = new Image({
            title: titulo,
            filename: imgTitulo + ext,
            idmodal: imgTitulo
        });

        await img.save();
        console.log(img);
        res.redirect('/admin/subir-imagen');
    } else {
        await fs.unlink(imgTempPath);
        res.status(500);
    }
}

module.exports = uploadController;