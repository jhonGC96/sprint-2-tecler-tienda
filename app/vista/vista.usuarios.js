const controladorUsuario = require('../controlador/controlador.usuarios')
const verificacion = require('../controlador/controlador')

module.exports = (app) => {
    app.get('/', async (req, res) => {
        try {
            res.send('ok')
        } catch (e) {
            console.log(e);
            res.status(400).json('Error al encontrar')
        }
    })

    app.get('/listarusuarios', async (req, res) => {
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

        try {
            await res.render('crearusuarios')

        } catch (err) {
            console.log(err)
            res.estatus(400).json('Error al dirigirse a la pagina CREAR')
        }
    })

    app.post('/saveuser',verificacion.checkUser,  async (req, res) => {
        let alta = req.body
        try {
            await controladorUsuario.altaUsuarios(alta)
            res.redirect('/listarusuarios')
        } catch (e) {
            console.log(e);
        }
    })

    app.get('/updateUsuario/:id_usuario', async (req, res) =>{
        let update = req.params.id_usuario
        try {
            let resultado = await controladorUsuario.updateUsuario(update)
            res.render('editarusuarios', {
                data:resultado
            })
        } catch (e) {
            console.log(e);
        }
    })

    app.get('/bajaUsuario/:id_usuario', async (req, res) => {
        const baja = req.params.id_usuario
        try {
            await controladorUsuario.bajaUsuario(baja)
            res.redirect('/listarusuarios')
        } catch (err) {
            console.log(err);
        }
    })

    
}