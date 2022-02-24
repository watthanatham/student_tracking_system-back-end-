const ModelsubjectModel = require('../../models/Teacher/Model_Subject')

// get all course
exports.getAllModel = (req, res) => {
    ModelsubjectModel.getAllModel((err, course) => {
        console.log('Get all course successfully')
        if(err)
        res.send(err)
        console.log('Module', module)
        res.send(course)
    })
}
