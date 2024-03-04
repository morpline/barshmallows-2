var barshmallows = {};

const save = require("./save")

barshmallows.barshmallowId = 0;// Pull from save file during game.init

//since it's a class we'll have to use functions on the barshmallows object
// it could be an object but thats work i'd rather not do
class Barshmallow {
    constructor ({height=(Math.random()*20), color=0, shape=0, luck=0.5,visible=true,texture=-1,scrutinized=false}) {
        this.height=height;
        if(color <0){
            this.color = 0;
        }else{ 
            this.color=color;
        }
        if(shape < -1){
            this.shape = -1;
        }else{ 
            this.shape=shape;
        }
        this.luck=luck;
        this.visible = visible;
        this.textured=(texture!=-1)
        if(texture <-1){
            this.texture = -1;
        }else{ 
            this.texture=texture;
        }
        this.id=barshmallowId;
        this.scrutinized = scrutinized;
        this.type = "Barshmallow";
        //^^^ ONLY HAVE SET TO "Barshmallow" IF IT'S A Barshmallow AND NOT A GENERIC OBJECT
        this.worth = Math.round((this.height*100+((this.color+1)%2)*500+this.shape*100+this.texture*100+(this.luck*1000)));
        console.log(this.id);
    }

}
barshmallows.Barshmallow = Barshmallow;

barshmallows.addBarshmallow = (b) => {
    let bToAdd;// must be Barshmallow
    if(b.type == "Barshmallow") {

    }
}

module.exports = barshmallows;