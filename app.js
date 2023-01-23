"use strict"; 

const express = require('express'); 
//app라는 변수에 express를 실행시켜줌 
const app = express();

//앱세팅 -화면에 보이는 뷰단을 처리해주는 부분셋팅 
//html 템플릿엔진 ejs설정 
app.set("views", "./src/views"); 
app.set("view engine", "ejs");
//__dirname은 현재 파일위치를 반환한다.
// node에서는 js파일과 ejs파일을 연결해주는 미들웨어(정적경로로 추가해 주겠다.)
app.use(express.static(`${__dirname}/src/public`));

//routes 파일연결
const home = require("./src/routes/home"); 
//미들웨어를 등록하는 메소드
app.use("/",home); //루트경로로 오면 home으로 이동함


module.exports = app;