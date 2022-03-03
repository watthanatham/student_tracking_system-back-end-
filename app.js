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
const subjectRouter = require('./src/routes/Teacher/subject')
const subjecttypeRouter = require('./src/routes/Teacher/subject_type')
const courseRouter = require('./src/routes/Teacher/course')
const studentRouter = require('./src/routes/Teacher/student')
const modelsubjectRouter = require('./src/routes/Teacher/model_subject')
const studentresultRouter = require('./src/routes/Teacher/student_result')
const typesubjectRouter = require('./src/routes/Teacher/type_subject')
const trainingRouter = require('./src/routes/Student/training')
const studyresultsRouter = require('./src/routes/Student/study_results')

// create routes
app.use('/users', userRouter)
app.use('/subject', subjectRouter)
app.use('/subject_type', subjecttypeRouter)
app.use('/course', courseRouter)
app.use('/student', studentRouter)
app.use('/model_subject', modelsubjectRouter)
app.use('/student_result', studentresultRouter)
app.use('/type_subject', typesubjectRouter)
app.use('/training_hours', trainingRouter)
app.use('/study_results', studyresultsRouter)


app.listen(port, ()=> {
  console.log('Server is running...')
})