const express = require('express')
const router = express.Router()

const trainingController = require('../../controllers/Student/TrainingController')

// get all information
router.get('/', trainingController.getAllTrainingHours)
// insert information
router.post('/', trainingController.insertNewInformation)
// update information 
router.put('/:id', trainingController.updateTrainingInformation)

module.exports = router