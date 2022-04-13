const ModelsubjectModel = require('../../models/Teacher/Model_Subject')

exports.getAllModules = (req, res) => {
  ModelsubjectModel.getAllModules (req.params.course_id, (err, model_subject) => {
    console.log('Get all module')
    if(err)
    res.send(err)
    console.log('Module', model_subject)
    res.send(model_subject)
  })
}
exports.getModuleSubject = (req, res) => {
    ModelsubjectModel.getModuleSubject(req.params.course_id,req.params.module_id,(err, model_subject) => {
        if(err)
        res.send(err)
        console.log(model_subject)
        res.send(model_subject)
    })
}
exports.InspectModule = (req, res) => {
  ModelsubjectModel.InspectModule(req.params.course_id,req.params.module_id,req.params.stu_year,(err, model_subject) => {
      if(err)
      res.send(err)
      console.log(model_subject)
      res.send(model_subject)
  })
}
exports.getReportforFail = (req, res) => {
  ModelsubjectModel.getReportforFail(req.params.stu_year, req.params.course_id, req.params.module_id, req.params.sub_id,(err, model_subject) => {
    if(err)
    res.send(err)
    console.log(model_subject)
    res.send(model_subject)
  })
}
exports.getModuleinForm = (req, res) => {
  ModelsubjectModel.getModuleinForm (req.params.id, (err, model_subject) => {
    console.log('Get module in form')
    if(err)
    res.send(err)
    console.log('Module', model_subject)
    res.send(model_subject)
  })
}
exports.createNewModule = (req, res) => {
  var payload = req.body,
  { module_id, ...payload } = payload
  moduleReqdata = new ModelsubjectModel(payload)
  
  if(req.body.contructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({success: false, message: 'Please fill data all fields'})
  }else {
    console.log('Valid data')
    console.log(moduleReqdata)
    ModelsubjectModel.createNewModule(moduleReqdata, (err, model_subject) => {
      if(err)
      res.send(err)
      res.json({ status: true, message: 'Insert new module success', data: model_subject})
    })
  }
}
exports.updateModule = (req, res) => {
  const moduleReqdata = new ModelsubjectModel(req.body)
  console.log('module req data update', moduleReqdata)

  if(req.body.contructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({success: false, message: 'Please fill all fields'})
  }else {
    console.log('Valid data')
    ModelsubjectModel.updateModule(req.params.id, moduleReqdata, (err, model_subject) => {
      if(err)
      res.send(err)
      res.json({ status : true, message: 'Update module information successfully', data: model_subject})
    })
  }
}
exports.searchModuleById = (req, res) => {
  ModelsubjectModel.searchModuleById (req.params.id, (err, model_subject) => {
    console.log('Get module by id sucessfully')
    if(err)
    res.send(err)
    console.log('Module by id', model_subject)
    res.send(model_subject)
  })
}
