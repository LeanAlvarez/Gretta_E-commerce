const mongoose = require('mongoose')
const { Schema } = mongoose


const UsuariosSchema = new Schema({
    nombre: { type: String, required: true},
    apellido: { type: String, required: true },
    ciudad: { type: String, required: true },
    cp: { type: Number, required: true },
    edad: { type: Number, required: true },
    genero: { type: String, required: true },
    email: { type: String, required: true, unique: true }
})


module.exports = mongoose.model('Usuarios', UsuariosSchema)