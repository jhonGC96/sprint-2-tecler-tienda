//Importación de conexión
const sequelize = require ('../../db/db.conexion')

//Exportacion y creación de clase con funciones
module.exports = class Datos {

    //constructor
    constructor (datos) {
        this.datos = datos
    }
<<<<<<< HEAD

    //funcion para listar
=======
 
>>>>>>> 98ecfab9ea8f0de2e4b185ead3156b93775a1f78
    static async listar (){
        let resultado = await sequelize.query('SELECT * FROM usuarios')
        return resultado
    }

    //funcion para dar de alta
    static async alta (data){
        //creación de objeto
        let usuarioNuevo = [
            data.nombres_usuario, 
            data.apellidos_usuario,
            data.email_usuario,
            data.username_usuario, 
            data.pass_usuario, 
            data.tipo_usuario
        ]
        //Control de erorres
        try {
            //Uso de objetos
            let resultado = await sequelize.query(`INSERT INTO usuarios(nombres_usuario, apellidos_usuario, email_usuario, username_usuario, pass_usuario, tipo_usuario) VALUES (?,?,?,?,?,?)`,
            {replacements : usuarioNuevo, type: sequelize.QueryTypes.SELECT})
            return resultado
        } catch (e) {
            console.log(e);
            throw new Error ('Ocurrio un error al realizar la alta')
        }
    }

    //funcion para eliminar
    static async eliminar (usuario){
        //creación de objeto
        let usuarioBaja = [
            usuario
        ]
        //Control de erorres
        try {
            //Uso de objetos
            let resultado = await sequelize.query(`DELETE FROM usuarios WHERE id_usuario = ? `,
            {replacements : usuarioBaja, type : sequelize.QueryTypes.SELECT})
           
            return resultado
        } catch (e) {
            console.log(e);
            throw new Error ('Ocurrio un error al realizar la baja')
        }
    }

<<<<<<< HEAD

    //Funcion para modificar
    async modificar (data){
        //creación de objeto
=======
    static async modificar (data){
>>>>>>> 98ecfab9ea8f0de2e4b185ead3156b93775a1f78
        let usuarioUpdate = [
            data
        ]
        //Control de errores
        try {
            //Uso de objetos
            let resultado = await sequelize.query(`SELECT * FROM usuarios WHERE id_usuario = ? `,
            {replacements : usuarioUpdate, type : sequelize.QueryTypes.SELECT})
            return resultado;
        } catch (error) {
            throw new Error ('Ocurrio un error')
        }
    }

    static async modificarSave (data, id){
        let usuarioUpdate = [
            data.nombres_usuario,
            data.apellidos_usuario,
            data.email_usuario,
            data.username_usuario,
            data.tipo_usuario,
            id
        ]
        try {
            let resultado = await sequelize.query(`UPDATE usuarios SET nombres_usuario= ?, apellidos_usuario= ?, email_usuario= ?, username_usuario= ?, tipo_usuario= ? WHERE id_usuario= ? `,
            {replacements : usuarioUpdate, type : sequelize.QueryTypes.SELECT})
            return resultado;
        } catch (error) {
        }
    }
 
} 