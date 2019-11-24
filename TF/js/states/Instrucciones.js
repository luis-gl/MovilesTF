Instrucciones = function(game){}

Instrucciones.prototype = {
    create:function(){
        this.background = this.game.add.sprite(0, 0, "bg_green");

        this.linea1 = this.game.add.text(this.game.width/2, this.game.height/2 - 200, "Haz clic en la basura que cae en el");
        this.linea1.anchor.setTo(0.5);
        this.linea1.fill = "#FFFFFF";
        this.linea1.fontSize = 30;

        this.linea2 = this.game.add.text(this.game.width/2, this.game.height/2 - 100, "fondo del mar para ganar puntos,");
        this.linea2.anchor.setTo(0.5);
        this.linea2.fill = "#FFFFFF";
        this.linea2.fontSize = 30;

        this.linea3 = this.game.add.text(this.game.width/2, this.game.height/2, "acomula 1000 puntos para ganar.");
        this.linea3.anchor.setTo(0.5);
        this.linea3.fill = "#FFFFFF";
        this.linea3.fontSize = 30;

        this.linea4 = this.game.add.text(this.game.width/2, this.game.height/2 + 100, "De lo contrario perderás vidas.");
        this.linea4.anchor.setTo(0.5);
        this.linea4.fill = "#FFFFFF";
        this.linea4.fontSize = 30;

        this.linea5 = this.game.add.text(this.game.width/2, this.game.height/2 + 200, "Si llegas a 0, pierdes.");
        this.linea5.anchor.setTo(0.5);
        this.linea5.fill = "#FFFFFF";
        this.linea5.fontSize = 30;

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