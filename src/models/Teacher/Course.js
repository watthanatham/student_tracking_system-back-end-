var dbCon = require('../../../config/db.config')

var Course = function(course) {
    this.course_id = course.course_id
    this.course_name = course.course_name
    this.course_totalcredit = course.course_totalcredit
}
// get all course
Course.getAllCourse = (result) => {
    dbCon.query('SELECT * FROM course', (err, res) => {
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
Course.getCourseinForm = (result) => {
    dbCon.query('SELECT course_id as value, course_name as text FROM course', (err, res) => {
        if(err) {
            console.log('Error getting course')
            result(null,err)
          }else {
            console.log('Get course in form success')
            result(null, res)
        }
    })
}
module.exports = Course