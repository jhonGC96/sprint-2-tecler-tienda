//Importación de recursos
const rateLimit = require('express-rate-limit'); 
const Joi = require('joi')
const {Login} = require('./verificaciones')

//Uso de cors para el acceso a nuestras direcciones
/*const corsOption = {
    origin : function (origin, callback) {
        if (process.env.listaBlanca.indexOf(origin) !== -1){
            callback(null, true)
        }else {
            callback(new Error('No autorizado por Cors'))
        }

    }
}
*/

//Uso de rate limit para limitar el intento y tiempo de acceso
const limiter = rateLimit({
    //Limite de acceso 20 minutos
    windowMs: 20 * 60 * 1000, 
    //Limite de intentos para acceder
    max: 100, 
    message: 'Excediste los intentos. Estarás bloqueado por 20 minutos'
});

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
module.exports = {/*corsOptions,*/ limiter}