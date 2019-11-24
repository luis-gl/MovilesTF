Preload = function(game){}

Preload.prototype = {
    preload:function(){
        this.game.load.image("bg_menu", "assets/fondo_azul.png");
        this.game.load.image("bg_green", "assets/fondo_verde.png");
        this.game.load.image("bg_orange", "assets/fondo_verde.png");
    },
    create:function(){
        this.game.state.start("Menu");
    }
}