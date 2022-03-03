const StudyResultModel = require('../../models/Student/Study_Results.js')

exports.getStudyResult = (req, res) => {
  StudyResultModel.getStudyResult ((err, study_results) => {
    if(err)
    res.send(err)
    console.log(study_results)
    res.send(study_results)
  })
}