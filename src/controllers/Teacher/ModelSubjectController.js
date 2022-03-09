const ModelsubjectModel = require('../../models/Teacher/Model_Subject')

// get all course
exports.getModule = (req, res) => {
    ModelsubjectModel.getModule(req.params.id,(err, model_subject) => {
        if(err)
        res.send(err)
        console.log(model_subject)
        res.send(model_subject)
    })
}
