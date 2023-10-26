import express from 'express'
import { router } from './routes/routes.js'
import { AppError } from './errors/app.Error.js'
import { globalErrorHandler } from './errors/error.controller.js'

/* to get all functionalities */
const app = express()

/* middleware to read the body and receive it in json format */
app.use(express.json())
app.use('/api/v1/', router)

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404))
})

app.use(globalErrorHandler)
export default app