import express from 'express'
import {
  createRepair,
  deleteRepair,
  findAllRepairs,
  findRepairById,
  updateRepair
} from './repairs.controller.js'

export const router = express.Router()

router
  .route('/')
  .get(findAllRepairs)
  .post(createRepair)

router
  .route('/:id/')
  .get(findRepairById)
  .patch(updateRepair)
  .delete(deleteRepair)