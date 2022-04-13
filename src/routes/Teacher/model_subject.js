const express = require('express');
const router = express.Router()

const moduleController = require('../../controllers/Teacher/ModelSubjectController')

// get report for fail
router.get('/module_report/:stu_year/:course_id/:module_id/:sub_id', moduleController.getReportforFail)
// get module inspect
router.get('/inspect/:course_id/:module_id/:stu_year', moduleController.InspectModule)
// get moduleinform
router.get('/md/:id', moduleController.getModuleinForm)
// get all modules
router.get('/all/:course_id', moduleController.getAllModules)
// get by id
router.get('/search_id/:id', moduleController.searchModuleById)
// get all types
router.get('/:course_id/:module_id', moduleController.getModuleSubject)
// insert new module
router.post('/', moduleController.createNewModule)
// update
router.put('/:id', moduleController.updateModule)

module.exports = router