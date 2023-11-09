// database.js (db)
import mysql from 'mysql2' // db 연동 promise 사용

const pool = mysql.createPool({
  host : '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'dovmf1010',
  database: 'hrdb2019'
}); // 커넥션은 하나만 풀은 미리 만을어놓고 접속한 사람들에게 접속한 수만큼 주고 회수

export const db = pool.promise();