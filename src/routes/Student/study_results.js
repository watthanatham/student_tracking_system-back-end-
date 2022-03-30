const express = require('express')
const router = express.Router()

const studyResultController = require('../../controllers/Student/StudyResultController')

// get all result
router.get('/:st_id/:stu_id', studyResultController.getStudyResult)

module.exports = router