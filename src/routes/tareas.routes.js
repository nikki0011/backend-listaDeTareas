import  { Router } from 'express'
import { crearTarea, prueba } from '../controllers/tareas.controllers.js'

const router = Router()
// http://localhost:3000/api/tareas/

router.route('/test').get(prueba)
router.route('/').post(crearTarea)

export default router