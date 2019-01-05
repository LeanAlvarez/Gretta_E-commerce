const express = require('express')
const path = require('path')
const morgan = require('morgan')
const app = express()

const { mongoose } = require('./database')

//settings
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))


//rutas
app.use('/shop/productos/',require('./routes/productos'))
app.use('/shop/admin/',require('./routes/admin'))

//archivos staticos
app.use(express.static(path.join(__dirname, 'public')))


//switch de servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor funcionando en puerto: ${app.get('port')}`)
})