// conexion a la base de datos 

// este paguete hara la conexion a la base de datos. 
import {Sequelize} from 'sequelize'

const db = new Sequelize("expedientes_db",'root','Best4ever2018',{
    host:'localhost',
    dialect:'mysql'
})

// exportamos para poder usar la variable que hace la conexion 
export default db;

