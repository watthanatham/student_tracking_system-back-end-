const express = require('express');
const router = express.Router()
const subjecttypeController = require('../controllers/SubjectTypesController')

// get all types
router.get('/', subjecttypeController.getAllTypes)
// insert types
router.post('/',subjecttypeController.createNewType)

module.exports = router