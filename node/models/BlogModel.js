
// los modelos es una asbtraccion que representa una tabala en la BD 
// ña entidad debe de represnetar la tabal de datos, como el nombre y sus columnas, con el mismo nomre 

// nombre de la variable que usa sequelize es en plurar y el nombre de las tablas en singular 

// definicion de los modelos 

import db from "../database/DB.js";
import { DataTypes } from "sequelize";

// en la base de datos hay 2 espacios, los cuales somn createdAt y updateAt, pero se ingresan en froma automatico, lo hjace sequilize 
const BlogModel= db.define('pacientes',{
    exp_num:{type:DataTypes.INTEGER,primaryKey:true},
    nombre:{type:DataTypes.STRING},
    fecha_nacimiento:{type:DataTypes.DATE},
    numero_tel:{type:DataTypes.INTEGER},
    id:{type:DataTypes.INTEGER}
})

export default BlogModel;




