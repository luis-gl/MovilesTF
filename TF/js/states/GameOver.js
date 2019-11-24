GameOver = function(game){}

GameOver.prototype = {
    init:function(score){
        this.score = score;
    },
    create:function() {
        this.background = this.game.add.sprite(0, 0, "bg_purple");

        this.title = this.game.add.text(this.game.width/2, 200, "PERDISTE");
        this.title.anchor.setTo(0.5);
        this.title.fill = "#FFFFFF";
        this.title.fontSize = 70;

        this.title = this.game.add.text(this.game.width/2, this.game.height/2, "Score: " + this.score);
        this.title.anchor.setTo(0.5);
        this.title.fill = "#FFFFFF";
        this.title.fontSize = 50;

        this.playBtn = this.game.add.text(this.game.width/2, this.game.height/2 + 100, "Play");
        this.playBtn.anchor.setTo(0.5);
        this.playBtn.fill = "#FFFFFF";
        this.playBtn.fontSize = 50;
        this.playBtn.inputEnabled = true;
        this.playBtn.events.onInputDown.add(this.play, this);

        this.backBtn = this.game.add.text(this.game.width/2, this.game.height/2 + 200, "Menu");
        this.backBtn.anchor.setTo(0.5);
        this.backBtn.fill = "#FFFFFF";
        this.backBtn.fontSize = 50;
        this.backBtn.inputEnabled = true;
        this.backBtn.events.onInputDown.add(this.back, this);
    },
    play:function(){
        this.game.state.start("Game");
    },back:function(){
        this.game.state.start("Menu");
    }
}