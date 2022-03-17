const express = require('express');
const router = express.Router()

const modelsubjectController = require('../../controllers/Teacher/ModelSubjectController')

// get moduleinform
router.get('/md/:id', modelsubjectController.getModuleinForm)
// get all types
router.get('/:id', modelsubjectController.getModule)

module.exports = router