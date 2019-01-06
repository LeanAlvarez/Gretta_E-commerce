const express = require('express')
const router = express.Router()

const Productos = require('../models/productos')
const Usuarios = require('../models/usuarios')

//-->Rutas Usuarios<---

//busqueda de todos los productos
router.get('/', async (req, res) => {
   const productos = await Productos.find()
   res.json(productos)
})

router.get('/:id', async(req, res) => {
    const producto = await Productos.findOne(req.params.id)
    res.json(producto)
})

//-->/Rutas Usuarios<---





module.exports = router