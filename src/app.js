import express from 'express'
import { router } from './routes/routes.js'

/* to get all functionalities */
const app = express()

/* middleware to read the body and receive it in json format */
app.use(express.json())
app.use('/api/v1', router)

export default app