const express = require('express')
const router = express.Router()

const subjectController = require('../../controllers/Teacher/SubjectsController')

// get all subjects
router.get('/:id', subjectController.getAllSubjects)
// get subject by id
router.get('/:id', subjectController.getSubjectById)
// create new subject
router.post('/', subjectController.createNewSubject)
// import
router.post('/import', subjectController.importNewSubject)
// update subject
router.put('/:id', subjectController.updateSubject)
// delete subject
router.delete('/:id', subjectController.deleteSubject)

module.exports = router