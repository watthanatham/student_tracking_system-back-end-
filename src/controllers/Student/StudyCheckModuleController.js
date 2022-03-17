const StudyCheckModuleModel = require('../../models/Student/Study_Check_Module')

// get study result by module
// fix id don't forget to fixed id
exports.getModuleResult = (req, res) => {
  StudyCheckModuleModel.getModuleResult((err, studycheckmodule) => {
    console.log('Get result success')
    if(err)
    res.send(err)
    console.log('Result', studycheckmodule)
    res.send(studycheckmodule)
  })
}