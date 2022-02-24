const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = process.env.PORT || 8081
const cors = require('cors')
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to students tracking system')
})

// import routes
const userRouter = require('./src/routes/user')
const subjectRouter = require('./src/routes/subject')
const subjecttypeRouter = require('./src/routes/subject_type')
const courseRouter = require('./src/routes/course')
const studentRouter = require('./src/routes/student')


// create routes
app.use('/users', userRouter)
app.use('/subject', subjectRouter)
app.use('/subject_type', subjecttypeRouter)
app.use('/course', courseRouter)
app.use('/student', studentRouter)


app.listen(port, ()=> {
  console.log('Server is running...')
})