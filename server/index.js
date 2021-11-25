const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const categoriesRouter = require('./routes/categories')
const peopleRouter = require('./routes/people')

require("dotenv").config();

const url = process.env.MONGODB_URL

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

mongoose.connect(url, { useNewUrlParser: true })

const connection = mongoose.connection
connection.once('open', _ => {
  console.log('Database connected:', url)
})

connection.on('error', err => {
  console.error('connection error:', err)
})

app.use('/categories', categoriesRouter)
app.use('/people', peopleRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})