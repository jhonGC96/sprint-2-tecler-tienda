const usuarios = require('../modelo/modelo.usuario')

module.exports.listarUsuarios = async ()=>{
    try {
        let resultado = await usuarios.listar()
        return resultado
    } catch (e) {
        console.log(e);
        throw new Error ('Error al listar')
    }
}

module.exports.altaUsuarios = async (data)=>{
    try {
        await usuarios.alta(data)
        return 'Alta correcta'
    } catch (e) {
        console.log(e);
        throw new Error ('Error al agregar')
    }
}

module.exports.updateUsuario = async (data) => {
    console.log(data);
    try {
        let resultado = await usuarios.modificar(data)
    }catch (err){
        throw new Error ('No se pudo actualizar el producto seleccionado')
    }
}

module.exports.bajaUsuario = async (data) => {
    try {
        await usuarios.eliminar(data)
        return 'Baja correcta'
    } catch (e) {
        console.log(e);
        throw new Error ('Error al dar de baja  ')
    }
}