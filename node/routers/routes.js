import express from "express"
import { createBlog, detaleBlog, getAllBlog, getBlog, updateBlog } from "../controllers/BlogController.js"

const router = express.Router()


router.get('/',getAllBlog)

router.get('/:exp_num',getBlog)

router.post('/',createBlog)

router.put('/:exp_num',updateBlog)

router.delete('/:exp_num',detaleBlog)


export default router
















