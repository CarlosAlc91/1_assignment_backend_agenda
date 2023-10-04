import express from 'express'

/* to get all functionalities */
const app = express()

/* middleware to read the body and receive it in json format */
app.use(express.json())


export default app