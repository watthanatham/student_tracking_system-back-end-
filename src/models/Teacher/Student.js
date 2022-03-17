var dbCon = require('../../../config/db.config')

var Student = function(student) {
    this.stu_id = student.stu_id
    this.course_id = student.course_id
    this.stu_firstname = student.stu_firstname
    this.stu_lastname = student.stu_lastname
    this.stu_gen = student.stu_gen
    this.stu_username = student.stu_username
    this.stu_password = student.stu_password
}
// get all student
Student.getAllStudent = (result) => {
    dbCon.query('SELECT stu_id, stu_firstname, stu_lastname FROM student', (err, res) => {
        if(err) {
            console.log('Error while fetching student', err)
            result(null, err)
        }else {
            console.log('Student fetched successfully')
            result(null, res)
        }
    })
}
// get student by id
Student.getStudentById = (id, result) => {
    dbCon.query('SELECT stu_id, stu_firstname, stu_lastname , stu_gen, stu_username, stu_password FROM student WHERE stu_id=?', id, (err, res) => {
        if(err) {
            console.log('Error while fetching student by id', err)
            result(null,err)
        }else {
            console.log('Student fetched by id successfully')
            result(null,res)
        }
    })
}
// insert student 
Student.insertNewStudent = (studentReqData, result) => {
    dbCon.query('INSERT INTO student SET ?', studentReqData, (err, res) => {
        if(err) {
            console.log('Error while inserting data')
            result(null, err)
        }else {
            console.log('Insert new student successfully')
            result(null, res)
        }
    })
}

Student.insertNewStudentImport = (studentReqData, result) => {
    dbCon.query('INSERT INTO student (stu_id, course_id, stu_firstname, stu_lastname, stu_gen, stu_username, stu_password) VALUES ?', [studentReqData], (err, res) => {
        if(err) {
            console.log('Error while inserting data')
            result(null, err)
        }else {
            console.log('Insert new student successfully')
            result(null, res)
        }
    })
}
// update student 
Student.updateStudent = (id, studentReqData, result) => {
    dbCon.query('UPDATE student SET course_id=?, stu_firstname=?, stu_lastname=?, stu_gen=?, stu_username=?, stu_password=? WHERE stu_id=?', [studentReqData.course_id, studentReqData.stu_firstname, studentReqData.stu_lastname, studentReqData.stu_gen, studentReqData.stu_username, studentReqData.stu_password, id], (err, res) => {
        if(err) {
            console.log('Error while update data')
            result(null, err)
        }else {
            console.log('Update student success')
            result(null, res)
        }
    })
}
// delete student 
Student.deleteStudent = (id, result) => {
    dbCon.query('DELETE FROM student WHERE stu_id=?', [id], (err, res) => {
        if(err) {
            console.log('Error while deleting student')
            result(null, err)
        }else {
            console.log('Delete student success')
            result(null, res)
        }
    })
}
module.exports = Student
