import express from 'express'
import { router as userRouter } from './../users/user.route.js'

/* all routes will be placed in here */

export const router = express.Router()

router.use('/users', userRouter)