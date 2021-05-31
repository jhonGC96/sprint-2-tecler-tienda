const sequelize = require ('../../db/db.conexion')

module.exports = class Datos {
    constructor (datos) {
        this.datos = datos
    }

    static async existenciaDeUsuario (data){
        let usuarioUpdate = [
            data.username_usuario,
            data.pass_usuario
        ]
        try {
            let resultado = await sequelize.query(`SELECT * FROM usuarios WHERE username_usuario = ? AND pass_usuario = ?`,
            {replacements : usuarioUpdate, type : sequelize.QueryTypes.SELECT})
            //console.log(resultado[0]);
            if (resultado[0] === undefined) {
                return false
            } else {
                return true
            }
        } catch (error) {
            throw new Error ('Ocurrio un error')
        }
    }
 
} 