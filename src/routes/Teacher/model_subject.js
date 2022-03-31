const express = require('express');
const router = express.Router()

const modelsubjectController = require('../../controllers/Teacher/ModelSubjectController')

// get module inspect
router.get('/inspect/:course_id/:module_id/:stu_year', modelsubjectController.InspectModule)
// get report for fail
router.get('/module_report/:stu_year/:course_id/:module_id', modelsubjectController.getReportforFail)
// get moduleinform
router.get('/md/:id', modelsubjectController.getModuleinForm)
// get all types
router.get('/:course_id/:module_id', modelsubjectController.getModule)
// insert new module
router.post('/', modelsubjectController.createNewModule)

module.exports = router