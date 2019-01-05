const mongoose = require('mongoose')
const { Schema } = mongoose


const ProductSchema = new Schema({
    titulo: {type: String, required: true},
    descripcion: { type: String, required: true },
    // foto: { data: Buffer, contentType: String},
    foto: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true }
})

module.exports = mongoose.model('Productos', ProductSchema)