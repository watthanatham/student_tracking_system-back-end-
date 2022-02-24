const express = require('express');
const router = express.Router()
const subjecttypeController = require('../controllers/SubjectTypesController')

// get all types
router.get('/', subjecttypeController.getAllTypes)
// insert types
router.post('/',subjecttypeController.createNewType)
// update subject_type
router.put('/:id', subjecttypeController.updateSubjectType)
module.exports = router