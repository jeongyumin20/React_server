// empRepository.js (repository)
import {db} from '../db/database.js'

export async function getList(){
  // const sql = `select row_number() over(order by emp_id) rno, emp_id, emp_name, hire_date, dept_id, phone, email from employee`
  const sql = `
          select row_number() over(order by emp_id) rno, 
          e.emp_id, 
            e.emp_name, 
            left(e.hire_date, 10) as hire_date, 
            d.dept_name as dept_id, 
            e.phone, 
            e.email 
          from employee e, department d 
          where e.dept_id = d.dept_id`
  
  return db
    .execute(sql) // 파라미터 있으면 옆에 ,[]
    .then((rows) => rows[0]);
}