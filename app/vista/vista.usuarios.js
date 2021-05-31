const controladorUsuario = require('../controlador/controlador.usuarios')

module.exports = async (app) => {
    

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
            res.render('crearusuarios')
        } catch (err) {
            console.log(err)
            res.estatus(400).json('Error al dirigirse a la pagina CREAR')
        }
    })

    app.post('/saveuser', async (req, res) => {
        let alta = req.body
        console.log(alta);
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
            res.render('editarusuario', {
                data:resultado[0]
            }) 
        } catch (e) {
            console.log(e);
        }
    }) 

    app.post('/updateUsuario/:id_usuario', async (req, res) =>{
        let id = req.params.id_usuario
        let update = req.body
        try {
            await controladorUsuario.saveUpdateUsuario(update, id)
            res.redirect('/listarusuarios')
        } catch (e) {
            console.log(e);
        }
    })

    app.get('/bajaUsuario/:id_usuario', async (req, res) => {
        const baja = req.params.id_usuario
        try {
            let resultado = await controladorUsuario.bajaUsuario(baja)
            res.redirect('/listarusuarios')
        } catch (err) {
            console.log(err);
        }
    })

    
}