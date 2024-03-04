var logSystem = {};

const config = require("./config")
const game = require("./index")

const fsp = require("fs/promises"); 
logSystem.addNewLog = async (loge) => {
    console.log("Logging ",loge);
    // const logfile = await fsp.readFile(`./gameData/${config.configData.saveFile}.log`)
    await config.ready
    await fsp.appendFile(`./gameData/${config.configData.saveFile}.log`,"\n"+loge)
    game.latestLog = loge;
    console.log("Log complete.");
}

logSystem.getLogs = async () => {
    await config.ready
    const logfile = await fsp.readFile(`./gameData/${config.configData.saveFile}.log`)
    let niceFile = [];
    let f = "";
    file = (""+logfile)
    for (let i = 0; i < file.length; i++) {
        const c = file[i];
        if(c=="\n"){
            niceFile.push(f);
            f="";
        } else {
            f+=String(c);
        }
    }
    niceFile.push(f);
    // console.log("nicefile",niceFile);
    return niceFile;
}

module.exports = logSystem;