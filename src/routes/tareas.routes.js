import  { Router } from 'express'
import { prueba } from '../controllers/tareas.controllers.js'

const router = Router()
// http://localhost:3000/api/tareas/test
router.route('/test').get(prueba)

export default router