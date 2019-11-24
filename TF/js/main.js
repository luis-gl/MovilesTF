window.onload = function(){
    var game = new Phaser.Game(768, 1024, Phaser.AUTO);
    game.state.add("Preload", Preload);
    game.state.add("Menu", Menu);
    game.state.add("Game", Game);
    game.state.add("Integrantes", Integrantes);
    game.state.add("Instrucciones", Instrucciones);
    game.state.start("Preload");
}