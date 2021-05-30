const controladorProducto = require('../controlador/controlador.productos')

module.exports = async (app) => {

    app.get('/listarproductos', async (req, res) => {
        try {
            let resultado = await controladorProducto.listarProductos()
            res.render("listarproducto", {
                data: resultado[0]
            })

        } catch (e) {
            console.log(e);
        }
    })

    //rutas para crear usuario y guardarlo
    app.get('/createproducto', async (req, res) => {
        try {
            res.render('crearproducto')
        } catch (err) {
            console.log(err)
            res.estatus(400).json('Error al dirigirse a la pagina CREAR')
        }
    })

    app.post('/saveproducto', async (req, res) => {
        let alta = req.body
        console.log(alta);
        try {
            await controladorProducto.altaProductos(alta)
            res.redirect('/listarproductos')
        } catch (e) {
            console.log(e);
        }
    })

    app.get('/updateProducto/:id_producto', async (req, res) =>{
        let update = req.params.id_producto
        try {
            let resultado = await controladorProducto.updateProductos(update)
            res.render('editarproducto', {
                data:resultado[0]
            })
        } catch (e) {
            console.log(e);
        }
    })

    app.post('/updateProducto/:id_producto', async (req, res) =>{
        let id = req.params.id_producto
        let update = req.body
        try {
            await controladorProducto.saveUpdateProducto(update, id)
            res.redirect('/listarproductos')
        } catch (e) {
            console.log(e);
        }
    })

    app.get('/bajaProducto/:id_producto', async (req, res) => {
        const baja = req.params.id_producto
        try {
            await controladorProducto.bajaProductos(baja)
            res.redirect('/listarproductos')
        } catch (err) {
            console.log(err);
        }
    })

    
}