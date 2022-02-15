const express = require('express');
const router = express.Router()
const subjecttypeController = require('../controllers/SubjectTypesController')

router.get('/', subjecttypeController.getAllTypes)

module.exports = router