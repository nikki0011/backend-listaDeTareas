import  { Router } from 'express'
import { borrarTareaPorID, crearTarea, editarTareaPorID, listaTarea, obtenerTareaPorID, prueba } from '../controllers/tareas.controllers.js'

const router = Router()
// http://localhost:3000/api/tareas/

router.route('/test').get(prueba)
router.route('/').post(crearTarea).get(listaTarea)
router.route('/:id').get(obtenerTareaPorID).delete(borrarTareaPorID).put(editarTareaPorID).patch(editarTareaPorID)


export default router