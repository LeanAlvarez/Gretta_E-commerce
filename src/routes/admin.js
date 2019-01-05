const express = require('express')
const router = express.Router()





//-->Rutas Admin<---
router.get('/', (req, res) => {
    res.json({"title": "ruta admin"})
})

//-->/Rutas Admin<---


module.exports = router