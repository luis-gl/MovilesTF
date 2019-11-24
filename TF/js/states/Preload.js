Preload = function(game){}

Preload.prototype = {
    preload:function(){
        this.game.load.image("bg_menu", "assets/fondo_azul.png");
        this.game.load.image("bg_green", "assets/fondo_verde.png");
        this.game.load.image("bg_orange", "assets/fondo_verde.png");
        this.game.load.image("bg_purple", "assets/fondo_morado.png");
        this.game.load.image("pez", "assets/pez.png");
        this.game.load.image("papel", "assets/papel.png");
        this.game.load.image("basurero", "assets/basurero.png");
        this.game.load.image("barril_toxico", "assets/barril_toxico.png");
    },
    create:function(){
        this.game.state.start("Menu");
    }
}