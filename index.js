const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const { PORT, MONGO_URI} = process.env
const mongoose = require('mongoose')

app.use(express.urlencoded({extended:false}))

mongoose.connect(MONGO_URI)
mongoose.Promise = global.Promise

app.use(express.json())

app.use('/api',require('./routes/api'))

const portNumber = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is live & running on ${PORT}, http://localhost:${PORT}`)
})