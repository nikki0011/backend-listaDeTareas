import  { Router } from 'express'
import { borrarTareaPorID, crearTarea, editarTareaPorID, listaTarea, obtenerTareaPorID, prueba } from '../controllers/tareas.controllers.js'
import { validacionIDTarea, validacionTarea } from '../middlewares/validacionServicio.js'

const router = Router()
// http://localhost:3000/api/tareas/

router.route('/test').get(prueba)
router.route('/').post(validacionTarea,crearTarea).get(listaTarea)
router.route('/:id').get(validacionIDTarea,obtenerTareaPorID).delete(borrarTareaPorID).put([validacionIDTarea,validacionTarea],editarTareaPorID).patch(editarTareaPorID)


export default router