const indexController = {};

const Public = require("../models/Publicaciones");
const Event = require("../models/Eventos");

indexController.renderIndex = async (req, res) => {
  const public = await Public.find();
  const event = await Event.find();

  // ultima publicacion:
  const ultPublic = public[public.length - 1];

  // ultimo evento:
  const ultEvent = event[event.length - 1];

  // ultimas 3 publicaciones en descendente:
  const publicUlt1 = public[public.length - 1];
  const publicUlt2 = public[public.length - 2];
  const publicUlt3 = public[public.length - 3];
  const public2 = [publicUlt1, publicUlt2, publicUlt3];

  // Ultimos 3 eventos para mostrar en inicio:
  const primero = event[event.length - 1];
  const segundo = event[event.length - 2];
  const tercero = event[event.length - 3];
  const ultimos3 = [primero, segundo, tercero];

  const novedades = [primero, publicUlt1, segundo, publicUlt2];

  res.render("index", {
    public,
    ultPublic,
    ultEvent,
    public2,
    ultimos3,
    novedades,
  });
};

indexController.renderAbout = (req, res) => {
  res.render("nosotros");
};

module.exports = indexController;
