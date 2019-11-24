Trash = function(game, x, y, type){
    this.game = game;
    Phaser.Sprite.call(this, game, x, y, type);
    this.anchor.setTo(0.5);
    this.selected = false;
    this.type = type;
    this.loseLife = new Phaser.Signal();
    this.game.physics.arcade.enable(this);
    this.body.allowGravity = true
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    this.inputEnabled = true;
    this.events.onInputDown.add(this.mousePosition, this);
    this.events.onOutOfBounds.add(function(){
        this.loseLife.dispatch();
    }, this);
    this.reset(x, y, type);
}

Trash.prototype = Object.create(Phaser.Sprite.prototype);

Trash.prototype.constructor = Trash;

Trash.prototype.reset = function(x, y, type){
    Phaser.Sprite.prototype.reset.call(this, x, y);
    this.loadTexture(type);

    if (type == "papel"){
        this.body.setSize(212,237,0,0);
        this.valueScore = 50;
        this.body.gravity.y = 200;
        this.scale.setTo(0.3);
    } else {
        this.body.setSize(1202,2058,0,0);
        this.valueScore = 150;
        this.body.gravity.y = 400;
        this.scale.setTo(0.08);
    }
    this.type = type;
}

Trash.prototype.mousePosition = function(){
    this.selected = true;
    this.body.allowGravity = false;
}

Trash.prototype.update = function(){
    if (this.game.input.mousePointer.isDown && this.selected) {
        this.game.physics.arcade.moveToPointer(this, 500);
    } else {
        this.selected = false;
        this.body.allowGravity = true;
        this.body.velocity.x = 0;
    }
}