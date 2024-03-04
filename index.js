console.log("test");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 203;

app.use(express.static("./public"));
app.use("/log",express.static("./public/logs"));
app.use("/api", require("./routes"));

app.use(cors);

const game = require("./game");

game.init();

app.listen(PORT,()=>{
    console.log(`Test server running on port: ${PORT}`);
});