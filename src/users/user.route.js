import { Router } from 'express'
import {
  createUser,
  deleteUser,
  findAllUsers,
  findUserById,
  loginUser,
  updateUser
} from './users.controller.js'
import { protect, restricTo, validateExistUser } from './users.middleware.js'

export const router = Router()

router
  .route('/')
  .get(findAllUsers)
  .post(protect, restricTo('employee', 'owner'), createUser)

router
  .post('/login', loginUser)

router
  .route('/:id/')
  .get(validateExistUser, findUserById)
  .patch(validateExistUser, protect, restricTo('owner'), updateUser)
  .delete(validateExistUser, protect, restricTo('owner'), deleteUser)