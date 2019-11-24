Integrantes = function(game){}

Integrantes.prototype = {
    create:function(){
        this.background = this.game.add.sprite(0, 0, "bg_green");

        this.Oscar = this.game.add.text(this.game.width/2, this.game.height/2 - 200, "Oscar Fernandez");
        this.Oscar.anchor.setTo(0.5);
        this.Oscar.fill = "#FFFFFF";
        this.Oscar.fontSize = 50;

        this.Diego = this.game.add.text(this.game.width/2, this.game.height/2, "Diego Johnson");
        this.Diego.anchor.setTo(0.5);
        this.Diego.fill = "#FFFFFF";
        this.Diego.fontSize = 50;

        this.Luis = this.game.add.text(this.game.width/2, this.game.height/2 + 200, "Luis Guillermo");
        this.Luis.anchor.setTo(0.5);
        this.Luis.fill = "#FFFFFF";
        this.Luis.fontSize = 50;

        this.backBtn = this.game.add.text(this.game.width, this.game.height, "Atrás");
        this.backBtn.anchor.setTo(1,1);
        this.backBtn.fill = "#FFFFFF";
        this.backBtn.fontSize = 30;
        this.backBtn.inputEnabled = true;
        this.backBtn.events.onInputDown.add(this.back, this);
    },
    back:function(){
        this.game.state.start("Menu");
    }
}