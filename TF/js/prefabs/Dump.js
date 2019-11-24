Dump = function(game, x, y){
    this.game = game;
    Phaser.Sprite.call(this, game, x, y, "basurero");
    this.anchor.setTo(0.5);
    this.scale.setTo(0.3);
    this.game.physics.arcade.enable(this);
    this.game.add.existing(this);
    this.body.immovable = true;
}

Dump.prototype = Object.create(Phaser.Sprite.prototype);

Dump.prototype.constructor = Dump;