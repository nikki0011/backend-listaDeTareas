import  { Router } from 'express'
import { borrarTareaPorID, crearTarea, editarTareaPorID, listaTarea, obtenerTareaPorID, prueba } from '../controllers/tareas.controllers.js'
import { validacionIDTarea, validacionTarea, validacionTareaPatch } from '../middlewares/validacionTarea.js'

const router = Router()
// http://localhost:3000/api/tareas/

router.route('/test').get(prueba)
router.route('/').post(validacionTarea,crearTarea).get(listaTarea)
router.route('/:id').get(validacionIDTarea,obtenerTareaPorID).delete(validacionIDTarea,borrarTareaPorID).put([validacionIDTarea,validacionTarea],editarTareaPorID).patch(validacionTareaPatch,editarTareaPorID)


export default router