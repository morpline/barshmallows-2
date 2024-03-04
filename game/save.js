var save = {};

const config = require("./config")

const fsp = require("fs/promises")

save.data = {
    //Important save data goes here.
    barshmallows:{},
    barshmallowId:0,
}

save.init = async () => {
    let svd = await require (`../gameData/${config.configData.saveFile}`)
    if(!svd){
        console.log("requested save file not found, creating");
    }
}

save.save = async () => {
    
}

module.exports = save;