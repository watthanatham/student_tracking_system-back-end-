var TrainingModel = require('../../models/Student/Training')

// get all information
exports.getAllTrainingHours = (req, res) => {
    TrainingModel.getAllTrainingHours((err, training) => {
        console.log('Get all information success')
        if(err)
        res.send(err)
        console.log('Training', training)
        res.send(training)
    })
}
exports.insertNewInformation = (req, res) => {
    console.log('Req information data', req.body)
    const trainingReqData = new TrainingModel(req.body)

    if(req.body.contructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({success: false, message: 'Please fill data all fields'})
    }else {
        console.log('Valid data')
        TrainingModel.insertNewInformation(trainingReqData, (err, training) => {
            if(err)
            res.send(err)
            res.json({ status: true, message: 'Insert information completed', data: training })
        })
    }
}
exports.updateTrainingInformation = (req, res) => {
    const trainingReqData = new TrainingModel(req.body)
    console.log('Information req data update', trainingReqData)

    if(req.body.contructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({success: false, message: 'Please fill all fields'})
    }else {
        console.log('Valid data')
        TrainingModel.updateTrainingInformation(req.params.id, trainingReqData, (err, training) => {
            if(err)
            res.send(err)
            res.json({ status : true, message: 'Update information completed', data: training })
        })
    }
}