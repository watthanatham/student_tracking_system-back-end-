const express = require('express');
const router = express.Router()
const typesubjectController = require('../../controllers/Teacher/TypeSubjectController')

// get all types
router.get('/', typesubjectController.getTypeSubject)
module.exports = router