// server.js
import express from "express";
import cors from "cors";
import empRouter from './router/empRouter.js'

const server = express(); // exporess 서버 역할 담당 라이브러리 모듈 : 파일 안에서 server 이름으로 사용
const PORT = 8000;

server.use(express.json()); // exporess에서 제공되는 json 방식으로 주고받고 명시 필요 ( 그래야 진행 가능 )
server.use(cors());

server.use('/', empRouter);

server.listen(PORT, () => {
  console.log(`server running! => ${PORT}`)
}); // 서버 뜬 다음 데이터 출력, 8000서버 뜬 다음 모니터링 작업 함수 호출 필요시 콜백