//Importación de modulos dados por el controlador
const controladorUsuario = require('../controlador/controlador.usuarios')
const verificacion = require('../controlador/controlador')

//Exportación de módulos
module.exports = (app) => {

    app.get('/', async (req, res) => {
        try {
            res.send('ok')
        } catch (e) {
            console.log(e);
            res.status(400).json('Error al encontrar')
        }
    })

    //Método get para listar los usuarios
    app.get('/listarusuarios', async (req, res) => {
        //Control de errores
        try {
            let resultado = await controladorUsuario.listarUsuarios()
            res.render("listarusuario", {
                data: resultado[0]
            })


        } catch (e) {
            console.log(e);
        }
    })

    //rutas para crear usuario y guardarlo
    app.get('/createuser', async (req, res) => {
        //Control de errores
        try {
            await res.render('crearusuarios')

        } catch (err) {
            console.log(err)
            res.estatus(400).json('Error al dirigirse a la pagina CREAR')
        }
    })

    //Método POST para guardar usuario
    app.post('/saveuser',verificacion.checkUser,  async (req, res) => {
        //creacion de objeto
        let alta = req.body
        //Control de errores
        try {
             //Uso de objetos
            await controladorUsuario.altaUsuarios(alta)
            res.redirect('/listarusuarios')
        } catch (e) {
            console.log(e);
        }
    })

    //Método get para acutlizar el usuario dado por un ID
    app.get('/updateUsuario/:id_usuario', async (req, res) =>{
        //Creacion de objeto
        let update = req.params.id_usuario
        //Control de errores
        try {
            
            let resultado = await controladorUsuario.updateUsuario(update)
            res.render('editarusuarios', {
                data:resultado
            })
        } catch (e) {
            console.log(e);
        }
    })

    //Metodo get para dar de baja usuario dado por un ID
    app.get('/bajaUsuario/:id_usuario', async (req, res) => {
        //Creacion de objeto
        const baja = req.params.id_usuario
        //Control de errores
        try {
            //Uso de objetos
            await controladorUsuario.bajaUsuario(baja)
            res.redirect('/listarusuarios')
        } catch (err) {
            console.log(err);
        }
    })

    
}