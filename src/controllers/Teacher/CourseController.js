const CourseModel = require('../../models/Teacher/Course')

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
exports.createNewCourse = (req, res) => {
    console.log('Req course data', req.body)
    const courseReqData = new CourseModel(req.body)

    if(req.body.contructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({success: false, message: 'Please fill data all fields'})
    }else {
        console.log('Valid data')
        CourseModel.createNewCourse(courseReqData, (err, course) => {
            if(err)
            res.send(err)
            res.json({ status: true, message: 'Insert course successfully', data: course })
        })
    }
}
exports.getCourseinForm = (req, res) => {
    CourseModel.getCourseinForm((err, course) => {
        console.log('Get all course in form success')
        if(err)
        res.send(err)
        console.log('Get Course', course)
        res.send(course)
    })
}