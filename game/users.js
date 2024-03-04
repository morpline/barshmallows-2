var users = {};
const config = require("./config");

users.login = (username, password) => {
    console.log("Login attempt with: ",username,",",password)
    let key = false;
    config.configData.players.forEach((e,i) => {
        console.log(
            "comparing ("+
            e.username+") and ["+ username+ "]"
        )
        console.log(
            "comparing ("+
            e.password+") and ["+ password+ "]"
        )
        if("usernams:"+(e.username) == "usernams:"+(username)) {
            console.log("username correct");
            if(e.password == password) {
                console.log("passwor correct");
                key = e.key;
                return;
            } else {
                console.log("Password Incorrect.");
                return false;
            }
        }
    });
    // console.log("Username incorrect.");
    return key;
}

users.authenticate = (key,next) => {
    config.configData.players.forEach((e,i) => {
        if(e.key == key) {
            next();
            console.log("Authentication Successful");
            return;
        }
    });
}

module.exports = users;