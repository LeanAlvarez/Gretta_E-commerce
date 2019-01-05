const mongoose = require('mongoose')

const URI = 'mongodb://localhost/gretta-ecommerce'

mongoose.connect(URI)
    .then(db => console.log('Base de datos conectada'))
    .catch(error => console.log(error))




module.exports = mongoose