const express = require('express')
const router = express.Router()

const studyResultController = require('../../controllers/Student/StudyResultController')

// get all result
router.get('/', studyResultController.getStudyResult)

module.exports = router