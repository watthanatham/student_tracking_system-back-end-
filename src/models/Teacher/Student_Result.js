var dbCon = require('../../../config/db.config')

var Student_Result = function(student_result) {
    this.sr_id = student_result.sr_id
    this.stu_id = student_result.stu_id
    this.sub_id = student_result.sub_id
    this.sr_year = student_result.sr_year
    this.sr_term = student_result.sr_term
    this.sr_grade = student_result.sr_grade
}
// get all result
Student_Result.getAllStudentResult = (course_id,sub_id, result) => {
    dbCon.query('SELECT a.stu_id, a.stu_firstname, a.stu_lastname,b.sub_id, b.sr_id, b.sr_year, b.sr_term, b.sr_grade FROM student AS a, student_result AS b WHERE a.stu_id = b.stu_id AND a.course_id = ? AND b.sub_id = ?', [course_id, sub_id],(err, res) => {
        if(err) {
            console.log('Error while fetching student result', err)
            result(null, err)
        }else {
            console.log('Student result fetched successfully')
            result(null, res)
        }
    })
}
// get by id
Student_Result.getStudentResultById = (id, result) => {
    dbCon.query('SELECT b.sr_id, b.sub_id, a.stu_id, a.stu_firstname, a.stu_lastname, b.sr_year, b.sr_term, b.sr_grade FROM student a INNER JOIN student_result b ON a.stu_id = b.stu_id WHERE sr_id=?', id, (err, res) => {
        if(err) {
            console.log('Error while fetched student result by id', err)
            result(null, err)
        }else {
            console.log('Student fetched by id success')
            result(null, res)
        }
    })
}
// insert student result
Student_Result.insertStudentResult = async (studentresultReqData, result) => {
    await dbCon.query('SELECT * FROM student_result WHERE stu_id = ? AND sub_id = ?', [studentresultReqData.stu_id, studentresultReqData.sub_id], async (err, res) => {
        if(res.length > 0) {
            result(res, null)
            return
        }

        await dbCon.query('INSERT INTO student_result SET ?', studentresultReqData, (err, res) => {
            if(err) {
                console.log('Error while inserting data')
                result(null, err)
            }else {
                console.log('Insert new student result successfully')
                result(null, res)
            }
        })
    })   
}
Student_Result.importNewResult = async (studentresultReqData, result) => {
    const resultcheck = studentresultReqData.map(x => x[0])
    await dbCon.query('SELECT * FROM student_result WHERE stu_id IN(?)', [resultcheck], async (err, res) => {
        if(res.length > 0) {
            result(res, null)
            return
        }

        await dbCon.query('INSERT INTO student_result (stu_id, sub_id, sr_year, sr_term, sr_grade) VALUES ?',[studentresultReqData], (err, res) => {
            if(err) {
                console.log('Error while import data')
                result(null, err)
            }else {
                console.log('Import result success')
                result(null, res)
            }
        })
    })  
}
Student_Result.updateStudentResult = (id, studentresultReqData, result) => {
    dbCon.query('UPDATE student_result SET sr_year=?, sr_term=?, sr_grade=? WHERE sr_id=?', [studentresultReqData.sr_year, studentresultReqData.sr_term, studentresultReqData.sr_grade, id], (err, res) => {
        if(err) {
            console.log('Error while update data')
            result(null, err)
        }else {
            console.log('Update student result success')
            result(null, res)
        }
    })
}
Student_Result.deleteStudentResult = (id, result) => {
    dbCon.query('DELETE FROM student_result WHERE sr_id=?', [id], (err, res) => {
        if(err){
            console.log('Error deleting student result')
            result(null, err)
        }else {
            console.log('Delete student result success')
            result(null, res)
        }
    })
}

module.exports = Student_Result