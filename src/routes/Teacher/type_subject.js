const express = require('express');
const router = express.Router()
const typesubjectController = require('../../controllers/Teacher/TypeSubjectController')

// get all types
router.get('/:id', typesubjectController.getTypeSubject)
module.exports = router