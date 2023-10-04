import express from 'express'

export const router = express.Router()

/* CRUD DEFINITION */
router
  .route('/users')
  .get()
  .post()
router
  .route('/users/:id/')
  .get()
  .patch()
  .delete()