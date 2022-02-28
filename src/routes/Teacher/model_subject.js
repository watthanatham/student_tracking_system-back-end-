const express = require('express');
const router = express.Router()
const modelsubjectController = require('../../controllers/Teacher/ModelSubjectController')

// get all types
router.get('/', modelsubjectController.getModule)
module.exports = router