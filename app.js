const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to Informatics Result System')
})

// import routes
const userRouter = require('./src/routes/user')


// create routes
app.use('/users', userRouter)


app.listen(port, ()=> {
  console.log('server is running...')
})