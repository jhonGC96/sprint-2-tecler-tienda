//Importación de nuestros recursos
const Joi = require ('joi')

//Exportamos nuestro schema

module.exports = {
    //uso de objetos
    Login : Joi.object().keys({
        username_usuario : Joi.string().alphanum().min(5).max(20).required(), 
        pass_usuario : Joi.string().regex(/^[a-zA-Z0-9]{10,20}$/).min(10).required()
    }).with('username_usuario','username_pass'),
}
