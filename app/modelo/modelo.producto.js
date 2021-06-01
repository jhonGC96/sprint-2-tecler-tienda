const sequelize = require ('../../db/db.conexion')

module.exports = class Datos {
    constructor (datos) {
        this.datos = datos
    }

    static async listar (){
        let resultado = await sequelize.query('SELECT * FROM productos')
        return resultado
    }

    static async alta (data){
        let productoNuevo = [
            data.descripcion_prod, 
            data.precio_prod,
            data.id_categoria,
            data.imagen_prod, 
            data.cantidad_inventario_prod
        ]
        try {
            let resultado = await sequelize.query(`INSERT INTO productos(descripcion_prod, precio_prod, id_categoria, imagen_prod, cantidad_inventario_prod) VALUES (?,?,?,?,?)`,
            {replacements : productoNuevo, type: sequelize.QueryTypes.SELECT})
            return resultado
        } catch (e) {
            console.log(e);
            throw new Error ('Ocurrio un error al realizar la alta')
        }
    }

    static async eliminar (usuario){
        
        let usuarioBaja = [
            usuario
        ]
        try {
            let resultado = await sequelize.query(`DELETE FROM productos WHERE id_producto = ? `,
            {replacements : usuarioBaja, type : sequelize.QueryTypes.SELECT})
           
            return resultado
        } catch (e) {
            console.log(e);
            throw new Error ('Ocurrio un error al realizar la baja')
        }
    }

    static async modificar (data){
        let usuarioUpdate = [
            data
        ]
        try {
            let resultado = await sequelize.query(`SELECT * FROM productos WHERE id_producto = ? `,
            {replacements : usuarioUpdate, type : sequelize.QueryTypes.SELECT})
            return resultado;
        } catch (error) {
            throw new Error ('Ocurrio un error')
        }
    }

    static async modificarSave (data, id){
        let usuarioUpdate = [
            data.descripcion_prod,
            data.precio_prod,
            data.id_categoria,
            data.imagen_prod,
            data.cantidad_inventario_prod,
            id
        ]
        try {
            let resultado = await sequelize.query(`UPDATE productos SET descripcion_prod= ?, precio_prod= ?, id_categoria= ?, imagen_prod= ?, cantidad_inventario_prod= ? WHERE id_producto= ? `,
            {replacements : usuarioUpdate, type : sequelize.QueryTypes.SELECT})
            return resultado;
        } catch (error) {
            throw new Error ('Un campo esta incorrecto, intente de nuevo')

        }
    }

}