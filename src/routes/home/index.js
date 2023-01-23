"use strict"; //ECMA script 문법을 준수하겠다.
 //💗라우트 해줌 
const express = require('express'); 
const router = express.Router();
const ctroller = require("./home.ctroller"); 

//render 부분을 ctrl에 빼줌(모듈화해줌)
router.get("/", ctroller.output.hello); 
//localhost:3000/login
router.get("/login", ctroller.output.login); 
 

//아래의 코드를 위와 같이 모듈화 해주었다
// router.get("login",(req,res)=> {
//     res.render("home/login")
// })
//app.js파일과 연결하기 위해 내보내준다.
module.exports = router;  



