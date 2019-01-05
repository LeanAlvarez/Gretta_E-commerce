const express = require('express')
const router = express.Router()



//-->Rutas Usuarios<---
router.get('/', (req, res) => {
   res.json({ "title": "hola q tal"})
})
//-->/Rutas Usuarios<---





module.exports = router