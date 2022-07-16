const mongoose = require('mongoose');

const mongodb_uri = 'mongodb+srv://nicoomf:nicoomf@cluster0.bvpzl.mongodb.net/Giscom?retryWrites=true&w=majority';

mongoose.connect(mongodb_uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(db => console.log('BASE DE DATOS CONECTADA'))
    .catch(err => console.log(err));