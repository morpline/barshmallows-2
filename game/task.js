var task = {};

const game = require("./index")

task.taskQueue = [];

task.newTask = (
    name="Default",
    timeToEnd="2024-03-07T12:30+07:00"
    //Use Y M D H M plus time zone.
) => {

}

function tick () {
    if(game)
    requestAnimationFrame( tick )
}

module.exports = task;