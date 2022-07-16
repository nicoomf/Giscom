const activController = {};

const Public = require("../models/Publicaciones");
const Invest = require("../models/Investigadores");
const Event = require("../models/Eventos");
const Categ = require("../models/Categorias");
const { randomName, randomUrl } = require("../helpers/libs");
const format = require("date-fns/format");
const mongoosePaginate = require("mongoose-paginate-v2");

activController.renderPublicaciones = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const categoria = req.query.categoria || 1;
  if (categoria != 1) {
    const publicI = await Public.paginate(
      {categoria},
      { page, limit: 5, sort: { createdAt: -1 } }
    );
    const totalPages = [];
    for (let index = 0; index < publicI.totalPages; index++) {
      totalPages.push(index + 1);
    }
    const public = publicI.docs;
    const ultPage = publicI.totalPages;
    // Ultimos 3 eventos para mostrar en inicio:
    const event = await Event.find();
    const primero = event[event.length - 1];
    const segundo = event[event.length - 2];
    const tercero = event[event.length - 3];
    const ultimos3 = [primero, segundo, tercero];
    res.render("actividades/publicaciones", {
      public,
      ultimos3,
      totalPages,
      page,
      ultPage,
    });
  } else {
    const publicI = await Public.paginate(
      {},
      { page, limit: 5, sort: { createdAt: -1 } }
    );
    const totalPages = [];
    for (let index = 0; index < publicI.totalPages; index++) {
      totalPages.push(index + 1);
    }
    const public = publicI.docs;
    const ultPage = publicI.totalPages;
    // Ultimos 3 eventos para mostrar en inicio:
    const event = await Event.find();
    const primero = event[event.length - 1];
    const segundo = event[event.length - 2];
    const tercero = event[event.length - 3];
    const ultimos3 = [primero, segundo, tercero];
    res.render("actividades/publicaciones", {
      public,
      ultimos3,
      totalPages,
      page,
      ultPage,
    });
  }
};

activController.renderPublic = async (req, res) => {
  const public = await Public.findById(req.params.id);
  res.render("actividades/publicacion", { public });
};

activController.renderAdminPublicaciones = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const publicI = await Public.paginate(
    {},
    { page, limit: 10, sort: { createdAt: -1 } }
  );
  const totalPages = [];
  for (let index = 0; index < publicI.totalPages; index++) {
    totalPages.push(index + 1);
  }
  const public = publicI.docs;
  const ultPage = publicI.totalPages;

  res.render("admin/actividades/admin-public", {
    public,
    totalPages,
    page,
    ultPage,
  });
};

activController.renderNuevaPublic = async (req, res) => {
  const autores = await Invest.find();
  const categorias = await Categ.find();
  res.render("admin/actividades/nueva-public", { autores, categorias });
};

activController.createPublic = async (req, res) => {
  try {
    const savePublic = async () => {
      const publicUrl = randomUrl();
      const urls = await Public.find({ url: publicUrl });
      if (urls.length > 0) {
        savePublic();
      } else {
        const { titulo, descripcion, autor, categoria } = req.body;
        const url = publicUrl;
        const creado = format(new Date(), "dd/MM/yyyy");
        // console.log(creado);
        const newPublic = new Public({
          titulo,
          descripcion,
          url,
          creado,
          autor,
          categoria,
        });
        // console.log(newPublic);
        await newPublic.save();
        res.send({ mensaje: "ok" });
      }
    };

    savePublic();
  } catch (error) {
    res.send({ mensaje: error });
  }
};

activController.renderEditPublic = async (req, res) => {
  const public = await Public.findById(req.params.id);
  const autores = await Invest.find();
  const categorias = await Categ.find();
  // console.log(public);
  res.render("admin/actividades/edit-public", { public, autores, categorias });
};

activController.updatePublic = async (req, res) => {
  const { titulo, descripcion, autor, categoria } = req.body;
  await Public.findByIdAndUpdate(req.params.id, {
    titulo,
    descripcion,
    autor,
    categoria,
  });
  res.redirect("/admin/publicaciones");
};

activController.deletePublic = async (req, res) => {
  await Public.findByIdAndDelete(req.params.id);
  res.redirect("/admin/publicaciones");
};

activController.addCategoria = async (req, res) => {
  const { categoria } = req.body;
  console.log(categoria);
  const newCateg = new Categ({
    categoria,
  });
  await newCateg.save();
  res.send("ok");
};

module.exports = activController;
