//Importación de recursos
<<<<<<< HEAD
const Joi = require('joi')

//Importacion de nuestras verificaciones
const {Login} = require('./verificacion')
const {Product} = require('./verificacion')

//Función para chequear los usuarios
module.exports.checkUser = async(req, res, next) =>{
    //control de errores
    try {
        //Uso de objetos
=======
//const rateLimit = require('express-rate-limit'); 
const Joi = require('joi')
const {Login} = require('./verificacion')
const {Product} = require('./verificacion')
//Función para chequear los usuarios
module.exports.checkUser = async(req, res, next) =>{
    try {
>>>>>>> Samuel
        await Joi.attempt(req.body, Login, 'Los datos son incorrectos, intentalo de nuevo')
        return next()
    } catch (e) {
        console.log(e);
        res.status(500).json({error : e.message})
    }
}

<<<<<<< HEAD
//Funcion para chequear los productos
module.exports.checkProduct = async(req, res, next) =>{
    //Control de errores
    try {
        //Uso de objetos
=======
module.exports.checkProduct = async(req, res, next) =>{
    try {
>>>>>>> Samuel
        await Joi.attempt(req.body, Product, 'Los datos son incorrectos, intentalo de nuevo')
        return next()
    } catch (e) {
        console.log(e);
        res.status(500).json({error : e.message})
    }
}
<<<<<<< HEAD
=======

//Exportamos nuestros módulos
//module.exports = {/*corsOptions,*/ limiter}
>>>>>>> Samuel
