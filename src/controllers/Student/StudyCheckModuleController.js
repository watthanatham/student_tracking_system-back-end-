const StudyCheckModuleModel = require('../../models/Student/Study_Check_Module')

// get study result by module
// fix id don't forget to fixed id
exports.getModuleOverview  = (req, res) => {
  StudyCheckModuleModel.getModuleOverview (req.params.stu_id,(err, studycheckmodule) => {
    console.log('Get result success')
    if(err)
    res.send(err)
    console.log('Result', studycheckmodule)
    res.send(studycheckmodule)
  })
}
exports.getResultSubjectbyModule = (req, res) => {
  StudyCheckModuleModel.getResultSubjectbyModule(req.params.module_id, req.params.stu_id,(err, studycheckmodule) => {
    if(err)
    res.send(err)
    console.log('Result', studycheckmodule)
    res.send(studycheckmodule)
  })
}