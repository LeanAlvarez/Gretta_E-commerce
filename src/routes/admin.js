const express = require('express')
const router = express.Router()
const multer = require('multer')
const cloudinary = require('cloudinary')

const config = require('../config')

// const upload = multer({ dest: 'src/uploads' })

const Productos = require('../models/productos')
// const Usuarios = require('../models/usuarios')

//multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
      console.log(file)
      cb(null, file.originalname)
    }
  })

  
  
  
  router.post('/upload', (req, res, next) => {
    const upload = multer({ storage }).single('file')
    upload(req, res, function(err) {
      if (err) {
        return res.send(err)
      }
      res.json(req.file)
    })
  })
  


//-->Rutas Admin<---

router.get('/', (req, res) => {
    res.render('index')
})

//busqueda de productos
router.get('/', async (req, res) => {
    const productos = await Productos.find()
    res.json(productos)
 })

 //busqueda de producto por categoria
 router.get('/:categoria', async(req, res) => {
    const producto = await Productos.find(req.params)
    res.json(producto)
})

 //busqueda de un prudcto x id
//  router.get('/:id', async (req, res) => {
//      const producto = await Productos.findById(req.params.id)
//      res.json(producto)
//  })

 
 
 //agrego un producto nuevo
 router.post('/', async(req, res) => {
     const { titulo, categoria, descripcion, foto, precio, stock } = req.body
     const producto = new Productos({ titulo, categoria, descripcion, foto, precio, stock })
     await producto.save()
     res.json({status: 'producto guardado'})
 })



 //Modifico un producto
 router.put('/:id', async(req, res) => {
    const { titulo, categoria, descripcion, foto, precio, stock } = req.body
    const NuevoProducto = { titulo, categoria, descripcion, foto, precio, stock } 
    await Productos.findOneAndUpdate(req.param.id, NuevoProducto)
    res.json({status: 'producto actualizado'})
 })


 //elimino producto
 router.delete('/:id', async(req, res) => {
     await Productos.findByIdAndDelete(req.params.id)
     res.json({status: 'producto eliminado'})
 })


//-->/Rutas Admin<---


module.exports = router