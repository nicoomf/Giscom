const subsController = {};

const Subs = require('../models/Subs');
const Event = require('../models/Eventos');

subsController.addSubs = async (req, res) => {

    const { email, nombre, apellido, id } = req.body;
    const subs = { nombre, apellido, email };

    const event = await Event.find( { "_id": id ,"subs.email": email } );

    if (event.length !== 0) {        
        console.log("el correo ya existe!");
    } else {
        await Event.findByIdAndUpdate(id, {$push: { 'subs': subs }});
        res.sendStatus(200);
    }
};

module.exports = subsController;