//Importacion de los modelos
const usuarios = require('../modelo/modelo.producto')

//Función para listar los produtos
module.exports.listarProductos = async ()=>{
    //Control de errores
    try {
        //Uso de objeto
        let resultado = await usuarios.listar()
        return resultado
    } catch (e) {
        console.log(e);
        throw new Error ('Error al listar')
    }
}

//Funcion para dar de alta productos
module.exports.altaProductos = async (data)=>{
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

//Función para actualizar productos
module.exports.updateProductos = async (data) => {

    try {
        //Uso de objetos
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

//Función para eliminar productos
module.exports.bajaProductos = async (data) => {
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