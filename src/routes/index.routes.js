import { Router} from "express"
import tareasRouter from "./tareas.routes.js"
// http://localhost:3000/api/tareas

const router = Router()

router.use('/tareas', tareasRouter)

export default router