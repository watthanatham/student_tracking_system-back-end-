const express = require('express')
const router = express.Router()

const courseController = require('../../controllers/Teacher/CourseController')

// get all course
router.get('/', courseController.getAllCourse)
// create new course
router.post('/', courseController.createNewCourse)

module.exports = router