const express = require('express')
const router = express.Router()

const Productos = require('../models/productos')


//-->Rutas Usuarios<---

//busqueda de todos los productos
router.get('/', async (req, res) => {
   const productos = await Productos.find()
   res.json(productos)
})

//-->/Rutas Usuarios<---





module.exports = router