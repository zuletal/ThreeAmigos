const express = require('express')

const cors = require('cors')
const path = require('path')
const apiRouter = require('./routers/apiRouter')
const app = express()

app.use(cors())
app.use(express.json());


app.use('/api', apiRouter)
app.use(express.static(path.join(__dirname, "../frontend/build")));

module.exports = app