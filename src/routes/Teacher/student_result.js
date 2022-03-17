const express = require('express')
const router = express.Router()

const studentResultController = require('../../controllers/Teacher/StudentResultController')

// get by id
router.get('/result_get/:id', studentResultController.getStudentResultById)
// get all result
router.get('/:course_id/:sub_id', studentResultController.getAllStudentResult)
// insert new student result 
router.post('/', studentResultController.insertStudentResult)
// import data
router.post('/import', studentResultController.importNewResult)
// update student result 
router.put('/:id', studentResultController.updateStudentResult)
// delete student result 
router.delete('/:id', studentResultController.deleteStudentResult)

module.exports = router