// importorara un modelo de la base de datos
import BlogModel from "../models/BlogModel.js";


// metodos para el CRUD 




// mostrar todos los registros 
// funcion asysc
export const getAllBlog= async (req, res) => {
    try{

        const blogs= await BlogModel.findAll()
        res.json(blogs)

    }catch(error){
        res.json({message: error.message})
    }
}

// mostrar un registro 

export const getBlog = async (req,res)=>{


    try {
        const blog= await BlogModel.findAll({
            where:{
                exp_num:req.params.exp_num
            }
        })
        res.json(blog[0])
        
    } catch (error) {
        res.json({message: error.message})
    }
}


// crear un registro 

export const createBlog = async (req,res) =>{

    try {
        await BlogModel.create(req.body)
        res.json({
            "message": "registro creado"
        })

    } catch (error) {
        res.json({message: error.message})
    }

}


// actualizar un registro 

export const updateBlog= async(req, res)=>{

    try {
        await BlogModel.update(req.body, {
            where: {exp_num: req.params.exp_num}
        })
        res.json("se ha actualizado correctamente")
    } catch (error) {
        res.json({message: error.message})
    }


}


// eliminar un regisdtro 


export const detaleBlog= async (req,res) =>{

    try {
        BlogModel.destroy({
            where:{exp_num:req.params.exp_num}
        })
        res.json("se ha borrado  correctmante")
    } catch (error) {
        res.json({message: error.message})
    }


}





