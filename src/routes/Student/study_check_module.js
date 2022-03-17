const express = require('express')
const router = express.Router()

const studyCheckModuleController = require('../../controllers/Student/StudyCheckModuleController')

router.get('/', studyCheckModuleController.getModuleResult)
// fix id don't forget to fixed
module.exports = router