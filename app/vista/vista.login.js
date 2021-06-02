const controladorLogin = require ('../controlador/controlador.login')

//Exportar nuestros endpoint

module.exports = async (app) => {
    
    app.get('/', controladorLogin.verificacionUsuario, async (req, res) => {
        res.json('ok')
    })

    app.get('/paginaprincipal', async (req, res) => {
        try {
            res.render("paginaprincipal")
        } catch (error) {
            console.log(err)
            res.estatus(400).json('No se pudo abrir la pagina')
        }
    })

    app.get('/login', async (req, res) => {
        try {
            res.render("login")
        } catch (error) {
            console.log(err)
            res.estatus(400).json('No se pudo abrir la pagina')
        }
    })
    
    
    app.post('/login', async (req, res) => {
        let usuario = req.body
        try {
            let resultado = await controladorLogin.chequearUsuario(usuario)
            if (resultado) {
                let tokenResult = await controladorLogin.generaToken(usuario)
                res.redirect('/paginaprincipal')
            } else {
                throw new Error(err)
            }
        } catch (err) {
            console.log(err)
            res.status(400).json('Usuario o contrasena incorrecta')
        }
    })

}