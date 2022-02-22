const express = require('express')
const router = express.Router()

const courseController = require('../controllers/CourseController')

// get all course
router.get('/', courseController.getAllCourse)

module.exports = router