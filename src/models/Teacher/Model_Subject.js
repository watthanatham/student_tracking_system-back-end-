var dbCon = require('../../../config/db.config')

var Model_Subject = function(model_subject) {
  this.module_id = model_subject.module_id
  this.course_id = model_subject.course_id
  this.module_name = model_subject.module_name
  this.module_credit = model_subject.module_credit
}
Model_Subject.getAllModules = (course_id, result) => {
  dbCon.query('SELECT module_id, module_name, module_credit FROM module WHERE course_id = ?', course_id, (err, res) => {
    if(err) {
      console.log('Error while fetching module.')
      result(null, err)
    }else {
      console.log('Module fetched successfully.')
      result(null, res)
    }
  })
}
Model_Subject.searchModuleById = (id, result) => {
  dbCon.query('SELECT module_id, module_name, module_credit FROM module WHERE module_id = ?', id, (err, res) => {
    if(err) {
      console.log('Error while fetching module.')
      result(null, err)
    }else {
      console.log('Module fetched success')
      result(null, res)
    }
  })
}
Model_Subject.getModuleSubject = (course_id, module_id, result) => {
  dbCon.query('SELECT a.sub_id, a.sub_name_thai, a.sub_credit FROM subject AS a WHERE a.module_id = ? AND a.course_id = ?', [module_id, course_id],(err, res) => {
    if(err) {
      console.log('Error while fetching subject Module.', err)
      result(null, err)
    }else {
      console.log('Module fetched successfully.')
      result(null, res)
    }
  })
}
Model_Subject.getModuleinForm = (id, result) => {
  dbCon.query('SELECT module_id as value, module_name as text FROM module WHERE course_id=?', id, (err, res) => {
    if(err) {
      console.log('Error getting subject type')
      result(null,err)
    }else {
      console.log('Get subject type in form success')
      result(null, res)
    }
  })
}
Model_Subject.createNewModule = (moduleReqdata, result) => {
  dbCon.query('INSERT INTO module SET ?', moduleReqdata, (err, res) => {
    if(err) {
      console.log('Error while inserting data')
      result(null, err)
    }else {
      console.log('Insert new type success')
      result(null, res)
    }
  })
}
Model_Subject.InspectModule = (course_id, module_id, stu_year, result) => {
  dbCon.query('SELECT a.sub_id,a.sub_name_thai, substring(cast(b.stu_id as varchar(8)),1,2) AS series, sum(case \'F\' when b.sr_grade then 0 else 1 end) AS pass, SUM(case \'W\' when b.sr_grade then 1 else (case \'F\' when b.sr_grade then 1 else 0 end) end) AS fail FROM subject AS a INNER JOIN student_result AS b ON a.sub_id=b.sub_id INNER JOIN student AS c ON c.stu_id=b.stu_id WHERE substring(cast(b.stu_id as varchar(8)),1,2) = ? AND a.course_id = ? AND a.module_id = ? GROUP BY a.sub_id, substring(cast(b.stu_id as varchar(8)),1,2)', [stu_year, course_id, module_id], (err, res) => {
    if(err) {
      console.log('Error while fetching information.', err)
      result(null, err)
    }else {
      console.log('Information fetched successfully.')
      result(null, res)
    }
  })
}
Model_Subject.getReportforFail = (stu_year, course_id, module_id, sub_id, result) => {
  dbCon.query('SELECT c.stu_id, c.stu_firstname, c.stu_lastname FROM subject AS a INNER JOIN student_result AS b ON a.sub_id=b.sub_id INNER JOIN student AS c ON c.stu_id = b.stu_id WHERE substring(cast(b.stu_id as varchar(8)),1,2) = ? AND a.course_id = ? AND a.module_id = ? AND (b.sr_grade = \'F\' OR b.sr_grade = \'W\') AND a.sub_id = ?', [stu_year, course_id, module_id, sub_id], (err, res) => {
    if (err) {
      console.log('Error while fetching information.', err)
      result(null, err)
    }else {
      console.log('Information fetched successfuly')
      result(null, res)
    }
  })
}
Model_Subject.updateModule = (id, moduleReqdata, result) => {
  dbCon.query('UPDATE module SET module_credit=? WHERE module_id = ?', [moduleReqdata.module_credit, id], (err, res) => {
    if(err) {
      console.log('Error while update data')
      result(null, err)
    } else {
      console.log('Update module successfully')
      result(null, res)
    }
  })
}

module.exports = Model_Subject