var game = {};

game.latestLog = "# None";

game.config = require("./config");

game.logs = require("./logSystem");

game.save = require("./save");

game.barshmallows = require("./barshmallows");

game.time = require("./time");

game.users = require("./users");

game.ready = false;

game.init = async () => {
    console.log("Loading...");
    console.time("Load Time");
    await game.config.init();
    await (game.config.ready);
    await (game.time.ready);
    console.timeEnd("Load Time");
    console.log("Loading complete.");
    game.logs.addNewLog("# Game Loaded. Time: "+new Date(Date.now()).toString())
    game.ready = true;
}

module.exports = game;