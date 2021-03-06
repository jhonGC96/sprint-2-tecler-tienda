//Importacion de los modulos que se encuentran en el controlador
const controladorProducto = require('../controlador/controlador.productos')
const verificacion = require ('../controlador/controlador')

module.exports = async (app) => {

    //Método get para listar productos
    app.get('/listarproductos', async (req, res) => {
        //Control de erorres
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
        //Control de errores
        try {
            res.render('crearproducto')
        } catch (err) {
            console.log(err)
            res.estatus(400).json('Error al dirigirse a la pagina CREAR')
        }
    })

    app.post('/saveproducto', verificacion.checkProduct, async (req, res) => {
        let alta = req.body
        console.log(alta);
        //Control de errores
        try {
            await controladorProducto.altaProductos(alta)
            res.redirect('/listarproductos')
        } catch (e) {
            console.log(e);
        }
    })

    //Método get para actualizar productos de acuerdo a un ID
    app.get('/updateProducto/:id_producto', async (req, res) =>{
        try {
            //Uso de objetos
            let resultado = await controladorProducto.updateProductos(update)
            res.render('editarproducto', {
                data:resultado[0]
            })
        } catch (e) {
            console.log(e);
        }
    })


    //Método get para la baja de producto de acuerdo con un ID

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
        //Control de errores
        try {
            //Uso de objetos
            await controladorProducto.bajaProductos(baja)
            res.redirect('/listarproductos')
        } catch (err) {
            console.log(err);
        }
    })

    
}