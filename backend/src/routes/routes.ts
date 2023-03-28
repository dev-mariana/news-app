import { Router } from 'express'
import { NewController } from '../application/new/controllers/new.controller'

const router = Router()

const newController = new NewController()

router.post('/news', newController.createNew)
router.get('/news', newController.findAll)

export default router
