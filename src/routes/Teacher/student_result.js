const express = require('express')
const router = express.Router()

const studentResultController = require('../../controllers/Teacher/StudentResultController')

// get all result
router.get('/:course_id/:sub_id', studentResultController.getAllStudentResult)
// get by id
router.get('/id/:id', studentResultController.getStudentResultById)
// insert new student result 
router.post('/', studentResultController.insertStudentResult)
// update student result 
router.put('/:id', studentResultController.updateStudentResult)
// delete student result 
router.delete('/:id', studentResultController.deleteStudentResult)

module.exports = router