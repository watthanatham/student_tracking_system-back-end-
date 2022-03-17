const express = require('express')
const router = express.Router()

const courseController = require('../../controllers/Teacher/CourseController')

// get all course
router.get('/', courseController.getAllCourse)
// get course in form
router.get('/course_form', courseController.getCourseinForm)
// create new course
router.post('/', courseController.createNewCourse)

module.exports = router