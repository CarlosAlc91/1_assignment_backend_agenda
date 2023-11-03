import { Router } from 'express'
import { router as userRouter } from './../users/user.route.js'
import { router as repairsRouter } from './../repairs/repairs.route.js'
import { protect } from '../users/users.middleware.js'

export const router = Router()

router.use('/users', userRouter)
router.use(protect)
router.use('/repairs', repairsRouter)