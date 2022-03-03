const express = require('express')
const router = express.Router()

const studentController = require('../../controllers/Teacher/StudentController')

// get all student
router.get('/', studentController.getAllStudent)
// get student by id 
router.get('/:id', studentController.getStudentById)
// insert new student
router.post('/', studentController.insertNewStudent)
// import new student
router.post('/import', studentController.insertNewStudentImport)
// update student 
router.put('/:id', studentController.updateStudent)
// delete student 
router.delete('/:id', studentController.deleteStudent)

module.exports = router