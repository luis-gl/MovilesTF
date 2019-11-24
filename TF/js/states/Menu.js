Menu = function(game){}

Menu.prototype = {
    create:function(){
        this.background = this.game.add.sprite(0, 0, "bg_menu");
        this.title = this.game.add.text(this.game.width/2, this.game.height/2 - 200, "Trash Recover");
        this.title.anchor.setTo(0.5);
        this.title.fill = "#FFFFFF";
        this.title.fontSize = 70;

        this.playBtn = this.game.add.text(this.game.width/2, this.game.height/2 + 100, "Play");
        this.playBtn.anchor.setTo(0.5);
        this.playBtn.fill = "#FFFFFF";
        this.playBtn.fontSize = 50;
        this.playBtn.inputEnabled = true;
        this.playBtn.events.onInputDown.add(this.play, this);

        this.integrantesBtn = this.game.add.text(this.game.width/2, this.game.height/2 + 200, "Integrantes");
        this.integrantesBtn.anchor.setTo(0.5);
        this.integrantesBtn.fill = "#FFFFFF";
        this.integrantesBtn.fontSize = 50;
        this.integrantesBtn.inputEnabled = true;
        this.integrantesBtn.events.onInputDown.add(this.integrantes, this);

        this.instruccionesBtn = this.game.add.text(this.game.width/2, this.game.height/2 + 300, "Instrucciones");
        this.instruccionesBtn.anchor.setTo(0.5);
        this.instruccionesBtn.fill = "#FFFFFF";
        this.instruccionesBtn.fontSize = 50;
        this.instruccionesBtn.inputEnabled = true;
        this.instruccionesBtn.events.onInputDown.add(this.instrucciones, this);
    },
    play:function(){
        this.game.state.start("Game");
    },
    integrantes:function(){
        this.game.state.start("Integrantes");
    },
    instrucciones:function(){
        this.game.state.start("Instrucciones");
    }
}