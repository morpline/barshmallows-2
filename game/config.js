const fsp = require("fs/promises");

var config = {};

config.ready = false;

config.configData = {};

config.init = async () => {
    // let cfd = await require("../gameConfig.json")
    let cfd = await fsp.readFile("./gameConfig.json");
    let psd = await JSON.parse(String(cfd));
    config.configData = psd;
    console.log("config:",config);
    config.ready = true;
    
    return;
}

module.exports = config;