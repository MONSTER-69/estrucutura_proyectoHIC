import express from 'express'
import cors from 'cors'
import db from './database/DB.js'


import router from './routers/routes.js'




const app=express()



app.use(cors())

app.use(express.json())

app.use('/blogs',router)

try {
    await db.authenticate()
    console.log("conexion exitosa a la DB")
} catch (error) {
    console.log(`conexion fallida: ${error}`);

}

// app.get('/',(rea,res)=>{
//     res.send('Hola Mundo')
// })


app.listen(8000, ()=>{
    console.log('server Up running in http://localhost:8000/')
})









