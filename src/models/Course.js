var dbCon = require('../../config/db.config')

var Course = function(course) {
    this.course_id = course.course_id
    this.course_name = course.course_name
    this.course_totalcredit = course.course_totalcredit
    this.course_generaleducation = course.course_generaleducation
    this.course_core = course.course_core
    this.course_compulsory = course.course_compulsory
    this.course_elective = course.course_elective
    this.course_free = course.course_free
    this.course_specific_subject = course.course_specific_subject
}
// get all course
Course.getAllCourse = (result) => {
    dbCon.query('SELECT course_id, course_name FROM course', (err, res) => {
        if(err) {
            console.log('Error while fetching course', err)
            result(null, err)
        }else {
            console.log('Course fetched successfully')
            result(null, res)
        }
    })
}
Course.createNewCourse = (courseReqData, result) => {
    dbCon.query('INSERT INTO course SET ?', courseReqData, (err, res) => {
        if(err) {
            console.log('Error while inserting data')
            result(null, err)
        }else {
            console.log('Insert new course successfully')
            result(null, res)
        }
    })
}
module.exports = Course