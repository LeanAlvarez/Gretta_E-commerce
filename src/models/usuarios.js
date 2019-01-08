// const mongoose = require('mongoose')
// const { Schema } = mongoose
// // const bcrypt = require('bcrypt-nodejs')
// // const crypto = require('crypto')

// const UsuariosSchema = new Schema({
//     nombre: { type: String, required: true},
//     apellido: { type: String, required: true },
//     ciudad: { type: String, required: true },
//     // password: { type: String, select: false,},
//     // signUpDate:{ type: Date, default: Date.now()},
//     // avatar: String,
//     // lastLogin: Date,
//     cp: { type: Number, required: true },
//     edad: { type: Number, required: true },
//     genero: { type: String, required: true },
//     email: { type: String, required: true, unique: true, lowercase:true }
// })


//hashea la contraseña

// UsuariosSchema.pre('save', (next) => {
//     let user = this
//     if(!user.isModified('password')) return next()

//     bcrypt.genSalt(10, (err,salt) =>{
//         if(err) return next(err)

//         bcrypt.hash(user.password, salt, null, (err, hash) =>{
//             if(err) return next(err)

//             user.password = hash
//             next()
//         })
//     })
// })


//para guardar el avatar que tiene el mail
// UsuariosSchema.methods.gravatar = function () { 
//     if(!user.email) return `https://gravatar.com/avatar/?s=200&d=retro`

//     const md5 =  crypto.createHash('md5').update(this.email).digest('hex') 
    
//     return `https://gravatar.com/avatar/${md5}?s=200&d=retro`

//  }


// module.exports = mongoose.model('Usuarios', UsuariosSchema)