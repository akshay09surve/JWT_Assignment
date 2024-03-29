const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const { PORT } = process.env

app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.use('/api',require('./routes/api'))

const portNumber = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is live & running on ${PORT}, http://localhost:${PORT}`)
})