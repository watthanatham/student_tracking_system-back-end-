const StudentResultModel = require('../../models/Teacher/Student_Result')

// get all result
exports.getAllStudentResult = (req, res) => {
    console.log(req.params.id)
    StudentResultModel.getAllStudentResult (req.params.course_id,req.params.sub_id, (err, student_result) => {
        console.log('Get all student result success')
        if(err)
        res.send(err)
        console.log('Student result', student_result)
        res.send(student_result)
    })
}
exports.getStudentResultById = (req, res) => {
    StudentResultModel.getStudentResultById(req.params.id, (err, student_result) => {
        console.log('Get student by id successfully')
        if(err)
        res.send(err)
        console.log('Student result', student_result)
        res.send(student_result)
    })
}
exports.insertStudentResult = async (req, res) => {
    try {
        // console.log('Req student result data', req.body)
        const studentresultReqData = new StudentResultModel(req.body)

        if(req.body.contructor === Object && Object.keys(req.body).length === 0) {
            res.send(400).send({success: false, message: 'Please fill data all fields'})
        }else {
            // console.log('Valid data')
            StudentResultModel.insertStudentResult(studentresultReqData, (err, student_result) => {
                if(err)
                    res.json({ status: false, message: 'failed', data: err })
                else 
                    res.json({ status: true, message: 'Insert student result completed', data: student_result})
            })
        }
    }catch (e) {
        console.log(e)
    }
}
exports.importNewResult = (req, res) => {
    try {
        // console.log('Req student_result data', req.body)
        // const studentReqData = new StudentResultModel(req.body)
    
        if(req.body.contructor === Object && Object.keys(req.body).length === 0) {
            res.send(400).send({success: false, message: 'Please fill data all fields'})
        }else {
            console.log('Valid data')
            StudentResultModel.importNewResult(req.body, (err, student_result) => {
                if(err) 
                    res.json({ status: false, message: 'failed', data: err })
                else 
                    res.json({ status: true, message: 'Insert student_result completed', data: student_result })
                })
        }
    }catch (e) {
        console.log(e)
    }
  }
exports.updateStudentResult = (req, res) => {
    const studentresultReqData = new StudentResultModel(req.body)
    console.log('student result req data update', studentresultReqData)

    if(req.body.contructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({success: false, message: 'Please fill all fields'})
    }else {
        console.log('Valid data')
        StudentResultModel.updateStudentResult(req.params.id, studentresultReqData, (err, student_result) => {
            if(err)
            res.send(err)
            res.json({ status : true, message: 'update student result completed', data: student_result })
        })
    }
}
exports.deleteStudentResult = (req, res) => {
    StudentResultModel.deleteStudentResult(req.params.id, (err, student_result) => {
        if(err)
        res.send(err)
        res.json({ success: true, message: 'Deleted student result success'})
    })
}