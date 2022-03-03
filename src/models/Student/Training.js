const e = require('express')
var dbCon = require('../../../config/db.config')

var Training = function(training) {
    this.th_id = training.th_id
    this.stu_id = training.stu_id
    this.th_section = training.th_section
    this.th_hours = training.th_hours
    this.th_status = training.th_status
}
// get all training information
Training.getAllTrainingHours = (result) => {
    dbCon.query('SELECT th_id, th_section, th_hours, th_status FROM trainning_hours', (err, res) => {
        if(err) {
            console.log('Error while fetching information', err)
            result(null, err)
        }else {
            console.log('Information fetched successfully')
            result(null, res)
        }
    })
}
Training.insertNewInformation = (trainingReqData, result) => {
    dbCon.query('INSERT INTO trainning_hours SET ?', trainingReqData, (err, res) => {
        if(err) {
            console.log('Error while inserting information')
            result(null, err)
        }else {
            console.log('Insert new information success')
            result(null, res)
        }
    })
}
Training.updateTrainingInformation = (id, trainingReqData, result) => {
    dbCon.query('UPDATE trainning_hours=? SET WHERE th_id=?', [trainingReqData.th_status, id], (err, res) => {
        if(err) {
            console.log('Error while update data')
            result(null, err)
        }else {
            console.log('Update information success')
            result(null, res)
        }
    })
}
module.exports = Training