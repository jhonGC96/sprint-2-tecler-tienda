//Importación de modelos
const usuarios = require('../modelo/modelo.usuario')

//Funcion para listar usuarios
module.exports.listarUsuarios = async ()=>{
    // Control de errores
    try {
        //Uso de objetos
        let resultado = await usuarios.listar()
        return resultado
    } catch (e) {
        console.log(e);
        throw new Error ('Error al listar')
    }
}

//Función para alta de usuarios
module.exports.altaUsuarios = async (data)=>{
    //Control de errores
    try {
        //Uso de objetos
        await usuarios.alta(data)
        return 'Alta correcta'
    } catch (e) {
        console.log(e);
        throw new Error ('Error al agregar')
    }
}

//Función para actualizar usuarios
module.exports.updateUsuario = async (data) => {
    console.log(data);
    //Control de errores
    try {
        //Uso de objetos
        let resultado = await usuarios.modificar(data)
    }catch (err){
        throw new Error ('No se pudo actualizar el producto seleccionado')
    }
}

//Función para dar de baja un usuario
module.exports.bajaUsuario = async (data) => {
    //Control de errores
    try {
        //Uso de objetos
        await usuarios.eliminar(data)
        return 'Baja correcta'
    } catch (e) {
        console.log(e);
        throw new Error ('Error al dar de baja  ')
    }
}