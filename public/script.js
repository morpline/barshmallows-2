const button = document.getElementById("refresh");
let hostAddress = "http://127.0.0.1:203" 
const update = async () => {
    const data = await axios.get(hostAddress+"/api/logs")
    console.log(data)
}
button.addEventListener("click",update)

update();