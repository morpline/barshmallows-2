// const button = document.getElementById("refresh");
const list = document.getElementById("list");
let hostAddress = "http://127.0.0.1:203" 
const update = async () => {
    console.log("updating");
    const data = await axios.get(hostAddress+"/api/logs")
    console.log(data)
    const logs = data.data.logs;
    let logListParsed = "";
    logs.forEach((e,i) => {
        logListParsed+="<li>"+sparse(e)+"</li>";
    });
    list.innerHTML = logListParsed;
}

function sparse (line = "") {
    let parsedLine = "";
    let parseMode = -1;//integer for optimize
    let modes= ["#", "+", "$", "=", "!", "?", "&",]
    let modeClasses = ["system", ""]
    parseMode = modes.indexOf(line[0])
    let currentMode = -1;
    let smallModes = [ '@', ":", "#"];
    function switchModes (m) {
        let toAdd = "</span>";
        switch (m) {
            case 0:
                toAdd="<span class=\"username\">";
                break;
            case 1:
                toAdd="<span class=\"itemName\">";
                break;
            case 2:
                toAdd="<span class=\"barshmallowsId\">";
                break;
        }
        if(currentMode != m) {
            parsedLine+=toAdd;
        }
        currentMode = m;
    }
    for (let i = 1; i < line.length; i++) {
        const e = line[i];
        switch(e) {
            case "@":
                switchModes(0);
                break;
            case ":":
                switchModes(1);
                break;
            case ";":
                switchModes(-1);
                break;
            case "#":
                switchModes(2);
            default:
                parsedLine+=e;
        }
    }
    return parsedLine
}

// button.addEventListener("click",update)


update();

