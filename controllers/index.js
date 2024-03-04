const game = require("../game");
var controller = {};

controller.logs = async (req,res)=>{
    console.log("Logs requested");
    let losgs = await game.logs.getLogs()
    res.send({logs:losgs});
};

controller.login = async (req,res) => {
    console.log("User Login requested.");
    let login = await game.users.login(req.query.username,req.query.password);
    if(login) {
        res.send({loginResult:true,key:login});
    } else {
        res.send({loginResult:false,message:"Login failed."})
    }
}

module.exports = controller;