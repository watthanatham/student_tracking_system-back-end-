const express = require('express')
const router = express.Router()

const studyCheckModuleController = require('../../controllers/Student/StudyCheckModuleController')

// get overview
router.get('/:stu_id', studyCheckModuleController.getModuleOverview)
// get subject result by module
router.get('/check_result/:module_id/:stu_id', studyCheckModuleController.getResultSubjectbyModule)
// fix id don't forget to fixed
module.exports = router