//Importación de recursos
//const rateLimit = require('express-rate-limit'); 
const Joi = require('joi')
const {Login} = require('./verificacion')

//Función para chequear los usuarios
module.exports.checkUser = async(req, res, next) =>{
    try {
        await Joi.attempt(req.body, Login, 'Los datos son incorrectos, intentalo de nuevo')
        return next()
    } catch (e) {
        console.log(e);
        res.status(500).json({error : e.message})
    }
}

//Exportamos nuestros módulos
//module.exports = {/*corsOptions,*/ limiter}