const eventController = {};

const Event = require("../models/Eventos");
const { randomName, randomUrl } = require("../helpers/libs");
const { format } = require("date-fns");
const mongoosePaginate = require("mongoose-paginate-v2");

eventController.renderEventos = async (req, res) => {
  const eventI = await Event.find();
  const event = eventI.reverse();
  res.render("actividades/eventos", { event });
};

eventController.renderEvento = async (req, res) => {
  const event = await Event.findById(req.params.id);
  res.render("actividades/evento", { event });
};

eventController.renderAdminEventos = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const eventI = await Event.paginate(
    {},
    { page, limit: 10, sort: { creado: -1 }}
  );
  const totalPages = [];
  for (let index = 0; index < eventI.totalPages; index++) {
    totalPages.push(index + 1);
  }
  const event = eventI.docs;
  const ultPage = eventI.totalPages;
  res.render("admin/actividades/admin-eventos", { event, totalPages, page, ultPage });
};

eventController.renderNuevoEvento = (req, res) => {
  res.render("admin/actividades/nuevo-evento");
};

eventController.createEvento = async (req, res) => {
  try {
    const saveEvent = async () => {
      const eventUrl = randomUrl();
      const urls = await Event.find({ url: eventUrl });
      if (urls.length > 0) {
        saveEvent();
      } else {
        const { titulo, descripcion, fecha, hora } = req.body;
        const url = eventUrl;
        const creado = format(new Date(), "dd/MM/yyyy");
        const fechaArray = fecha.split("-");
        const fechaInversa = fechaArray.reverse();
        const fechaFormat = fechaInversa.join("/");
        // console.log(fecha);
        // const fechaFormat = fecha.split("-").join("/");
        // const fechaFormat = format(fecha, 'dd/MM/yyyy');
        // console.log(fechaFormat);
        const newEvent = new Event({
          titulo,
          descripcion,
          fechaFormat,
          url,
          creado,
          hora,
        });
        // console.log(newEvent);
        await newEvent.save();
        res.send({ mensaje: "ok" });
      }
    };

    saveEvent();
  } catch (error) {
    res.send({ mensaje: error });
  }
};

eventController.renderEditEvento = async (req, res) => {
  const event = await Event.findById(req.params.id);
  res.render("admin/actividades/edit-evento", { event });
};

eventController.updateEvent = async (req, res) => {
  const { titulo, descripcion, fecha, hora } = req.body;
  // const fechaFormat = fecha.split("-").join("/");

  if (fecha.length !== 0) {
    const fechaArray = fecha.split("-");
    const fechaInversa = fechaArray.reverse();
    const fechaFormat = fechaInversa.join("/");
    // console.log("la fecha es: ", fecha);
    await Event.findByIdAndUpdate(req.params.id, {
      titulo,
      descripcion,
      fechaFormat,
      hora,
    });
    res.redirect("/admin/eventos");
  } else {
    await Event.findByIdAndUpdate(req.params.id, {
      titulo,
      descripcion,
      hora,
    });
    res.redirect("/admin/eventos");
  }
};

eventController.deleteEvent = async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.redirect("/admin/eventos");
};

module.exports = eventController;
