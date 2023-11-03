import { Router } from 'express'
import {
  createRepair,
  deleteRepair,
  findAllRepairs,
  findOneRepair,
  updateRepair
} from './repairs.controller.js'
import { validateExistRepairs } from './repairs.middleware.js'
import { protect, restricTo } from '../users/users.middleware.js'


export const router = Router()

router
  .route('/')
  .get(findAllRepairs)
  .post(protect, restricTo('employee', 'owner'), createRepair)

router
  .route('/:id/')
  .get(validateExistRepairs, findOneRepair)
  .patch(validateExistRepairs, protect, restricTo('employee'), updateRepair)
  .delete(validateExistRepairs, protect, restricTo('employee'), deleteRepair)