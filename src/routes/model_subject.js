const express = require('express');
const router = express.Router()
const modelsubjectController = require('../controllers/ModelSubjectController')

// get all types
router.get('/id', modelsubjectController.getAllModel)
module.exports = router