//이 프로젝트에서는 http 서버가 아닌 express 서버로 구동한다.
//http는 내장모듈이므로 따로 install 안해도된다.
// const http = require('http') 
// const app = http.createServer((req,res)=>{ 

//     //한국어로 바꿔줌
//     res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//     if(req.url === "/"){
//         res.end("여기는 루트입니다")
//     }else if(req.url === "/login"){
//         res.end("http로 가동된 서버입니다")
//     }

// }); 

// app.listen(3001, ()=> {
//     console.log("http로 가동된 서버입니다")
// }) 
