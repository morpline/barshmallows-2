const { it, describe } = require("node:test");
const fsp = require("fs/promises");
const assert = require("assert");
const game = require("../game");
const axios = require("axios");
//Round 1 tests things like data loading, function returns, etc.
describe("Round 1",{},()=>{

    it("game.ready",{},async () => {
        await game.init();
        assert.strictEqual(game.ready,true);
    })
    it("config.init",{},async()=>{
        await game.init();
        // assert.notEqual(game.config.configData,{})
        assert.strictEqual(game.config.ready,true);
    })
})
//Round 2 tests things like user logins, routes, networking.
describe("Round 2",{},()=>{
    it("test user login",{},async()=>{
        let data = await axios.get("http://127.0.0.1:203/api/login?username=morpline&password=morpline");
        console.log(data);
        assert.strictEqual(data.data.loginResult,true);
    })
})