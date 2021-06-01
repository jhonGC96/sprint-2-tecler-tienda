const usuarios = require('../modelo/modelo.producto')

module.exports.listarProductos = async ()=>{
    try {
        let resultado = await usuarios.listar()
        return resultado
    } catch (e) {
        console.log(e);
        throw new Error ('Error al listar')
    }
}

module.exports.altaProductos = async (data)=>{
    try {
        await usuarios.alta(data)
        return 'Alta correcta'
    } catch (e) {
        console.log(e);
        throw new Error ('Error al agregar')
    } 
} 

module.exports.updateProductos = async (data) => {
    try {
        let resultado = await usuarios.modificar(data)
        return resultado;
    }catch (err){
        throw new Error ('No se pudo actualizar el producto seleccionado')
    }
}

module.exports.saveUpdateProducto = async (data, id) => {
    try {
        await usuarios.modificarSave(data, id)
        return 'se actualizo correcto'
    }catch (err){
        throw new Error ('No se pudo actualizar el producto seleccionado')
    }
}

module.exports.bajaProductos = async (data) => {
    try {
        await usuarios.eliminar(data)
        return 'Baja correcta'
    } catch (e) {
        console.log(e);
        throw new Error ('Error al dar de baja  ')
    }
}