const output = {
    hello: (req,res)=>{
        res.render("home/index")
    },

    login:(req,res) => {
        res.render("home/login");
    }
}; 


module.exports = {
    output
} 

//객체에서는 키값만 넣어주면 자체적으로 값에 키와 같은 값을 넣어준다
//ex) login: login 