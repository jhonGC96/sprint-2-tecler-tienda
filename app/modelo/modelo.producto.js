//Importacion de la conexión
const sequelize = require ('../../db/db.conexion')

//Uso de clase que se exporta con sus funciones
module.exports = class Datos {
    //Constructor
    constructor (datos) {
        this.datos = datos
    }

    //funcion para listar
    static async listar (){
        let resultado = await sequelize.query('SELECT * FROM productos')
        return resultado
    }

    //funcio para dar de alta
    static async alta (data){
        //Creación de objeto
        let productoNuevo = [
            data.descripcion_prod, 
            data.precio_prod,
            data.id_categoria,
            data.imagen_prod, 
            data.cantidad_inventario_prod
        ]
        //Control de errores
        try {
            //Uso de objetos
            let resultado = await sequelize.query(`INSERT INTO productos(descripcion_prod, precio_prod, id_categoria, imagen_prod, cantidad_inventario_prod) VALUES (?,?,?,?,?)`,
            {replacements : productoNuevo, type: sequelize.QueryTypes.SELECT})
            return resultado
        } catch (e) {
            console.log(e);
            throw new Error ('Ocurrio un error al realizar la alta')
        }
    }

    //Función para eliminar
    static async eliminar (usuario){
        //Creacion de objeto
        let usuarioBaja = [
            usuario
        ]
        //Control de errores
        try {
            //Uso de objetos
            let resultado = await sequelize.query(`DELETE FROM productos WHERE id_producto = ? `,
            {replacements : usuarioBaja, type : sequelize.QueryTypes.SELECT})
           
            return resultado
        } catch (e) {
            console.log(e);
            throw new Error ('Ocurrio un error al realizar la baja')
        }
    }

    //Función para modificar
    async modificar (data){
        //creación de objeto
        let usuarioUpdate = [
            data
        ]
        // Control de errores
        try {
            //Uso de objetos
            let resultado = await sequelize.query(`SELECT * FROM productos WHERE id_producto = ? `,
            {replacements : usuarioUpdate, type : sequelize.QueryTypes.SELECT})
            return resultado;
        } catch (error) {
            
        }
    }
}