import express from 'express'
import {
  createUser,
  deleteUser,
  findAllUsers,
  findUserById,
  loginUser,
  updateUser
} from './users.controller.js'

export const router = express.Router()

/* CRUD DEFINITION */
router
  .route('/')
  .get(findAllUsers)
  .post(createUser)

router.post('/login', loginUser)
router
  .route('/:id/')
  .get(findUserById)
  .patch(updateUser)
  .delete(deleteUser)