const CourseModel = require('../models/Course')

// get all course
exports.getAllCourse = (req, res) => {
    CourseModel.getAllCourse((err, course) => {
        console.log('Get all course successfully')
        if(err)
        res.send(err)
        console.log('Course', course)
        res.send(course)
    })
}