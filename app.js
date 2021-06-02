//Importación de recursos
var express = require ('express')
var app = express ()
require ('dotenv').config()
const sequelize = require ('./db/db.conexion')
const vistaUsuarios = require ('./app/vista/vista.usuarios')
const vistaProductos = require ('./app/vista/vista.productos')
const vistaLogin = require ('./app/vista/vista.login')


//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//settings
app.use(express.static(__dirname + '/public'))
app.set('view engine','ejs')
app.set('views',__dirname+'/views')


//Inicio de server
async function  inicioServer(){
    try {
        await sequelize.authenticate()
        console.log('Conexión Aceptada');
        app.listen(process.env.PORT, function(){
            console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`);
        })
    } catch (e) {
        console.error('Conexión fallida: ',e);
    }
}
inicioServer()

//Errores dentro el servidor
app.use((err, req, res, next)=>{
    if (err){
        console.log(err);
        if(!res.headerSent){
            res.render('404',{result:err.message})
                res.status(500).send("Error en el servidor: " +err.message)
        }
    }
    next()
})

exports.addTest = function (value){
    var result = value + "tested"
    return result
}

//Uso de los elementos que se requiren h 
vistaUsuarios(app)
vistaProductos(app)
vistaLogin(app)