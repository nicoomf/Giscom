const investController = {}

const Invest = require('../models/Investigadores')
const Image = require('../models/Image')
const { randomName } = require('../helpers/libs')

investController.renderInvest = async (req, res) => {
  const invest = await Invest.find()
  res.render('equipo/investigadores', { invest })
}

investController.renderAdminInvest = async (req, res) => {
  const invest = await Invest.find()
  res.render('admin/equipo/admin-invest', { invest })
}

investController.renderInvestForm = async (req, res) => {
  const fotos = await Image.find()
  res.render('admin/equipo/nuevo-invest', { fotos })
}

investController.createInvest = async (req, res) => {
  try {
    const {
      nombre,
      departamento,
      titulos,
      areas,
      email,
      numero,
      imgUrl,
    } = req.body
    const idmodal = randomName()
    const newInvest = new Invest({
      nombre,
      departamento,
      titulos,
      areas,
      email,
      numero,
      imgUrl,
      idmodal,
    })

    // console.log(newInvest);

    await newInvest.save()
    res.send({ mensaje: 'ok' })
  } catch (error) {
    res.send({ mensaje: error })
  }
}

investController.renderEditInvest = async (req, res) => {
  const invest = await Invest.findById(req.params.id)
  const fotos = await Image.find()
  res.render('admin/equipo/edit-invest', { invest, fotos })
}

investController.updateInvest = async (req, res) => {
  const {
    nombre,
    departamento,
    titulos,
    areas,
    email,
    numero,
    imgUrl,
  } = req.body
  await Invest.findByIdAndUpdate(req.params.id, {
    nombre,
    departamento,
    titulos,
    areas,
    email,
    numero,
    imgUrl,
  })
  res.redirect('/admin/investigadores')
}

investController.deleteInvest = async (req, res) => {
  await Invest.findByIdAndDelete(req.params.id)
  res.redirect('/admin/investigadores')
}

module.exports = investController
