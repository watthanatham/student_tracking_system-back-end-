const express = require('express');
const router = express.Router()
const subjecttypeController = require('../../controllers/Teacher/SubjectTypesController')

// get by id
router.get('/search_id/:id', subjecttypeController.getTypebyId)
// get all types
router.get('/:id', subjecttypeController.getAllTypes)
// insert types
router.post('/',subjecttypeController.createNewType)
// update subject_type
router.put('/:id', subjecttypeController.updateSubjectType)
// get subject_type in form
router.get('/st/:id', subjecttypeController.getSubjectTypeinForm)
module.exports = router