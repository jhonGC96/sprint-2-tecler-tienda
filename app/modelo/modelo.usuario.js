const sequelize = require ('../../db/db.conexion')

module.exports = class Datos {
    constructor (datos) {
        this.datos = datos
    }

    static async listar (){
        let resultado = await sequelize.query('SELECT * FROM usuarios')
        return resultado
    }

    static async alta (data){
        let usuarioNuevo = [
            data.nombres_usuario, 
            data.apellidos_usuario,
            data.email_usuario,
            data.username_usuario, 
            data.pass_usuario, 
            data.tipo_usuario
        ]
        try {
            let resultado = await sequelize.query(`INSERT INTO usuarios(nombres_usuario, apellidos_usuario, email_usuario, username_usuario, pass_usuario, tipo_usuario) VALUES (?,?,?,?,?,?)`,
            {replacements : usuarioNuevo, type: sequelize.QueryTypes.SELECT})
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
            let resultado = await sequelize.query(`DELETE FROM usuarios WHERE id_usuario = ? `,
            {replacements : usuarioBaja, type : sequelize.QueryTypes.SELECT})
           
            return resultado
        } catch (e) {
            console.log(e);
            throw new Error ('Ocurrio un error al realizar la baja')
        }
    }

    async modificar (data){
        let usuarioUpdate = [
            data
        ]
        try {
            let resultado = await sequelize.query(`SELECT * FROM usuarios WHERE id_usuario = ? `,
            {replacements : usuarioUpdate, type : sequelize.QueryTypes.SELECT})
            return resultado;
        } catch (error) {
            
        }
    }
}