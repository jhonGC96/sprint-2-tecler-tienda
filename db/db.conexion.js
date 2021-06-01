//Importación de modulo sequelize
const Sequelize = require('sequelize')

//Creación de objeto y realizamos la conexión
const sequelize = new Sequelize ('Tienda_01', null, null, {
    dialect : 'mssql', 
    server : process.env.DB_HOST, 
    port : process.env.DB_PORT, 
    dialectOptions: {
        authentication : {
            type : 'default', 
            options : {
                encrypt : true,
                userName : process.env.DB_USER, 
                password : process.env.DB_PASS
            } 
        }
    }
})

module.exports = sequelize;