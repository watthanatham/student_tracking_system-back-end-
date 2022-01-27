const express = require('express')
const router = express.Router()

const subjectController = require('../controllers/SubjectsController')
// get all subjects
router.get('/', subjectController.getAllSubjects)

module.exports = router