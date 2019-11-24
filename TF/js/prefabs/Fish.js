Fish = function(game){
	this.game = game;
	Phaser.Sprite.call(this,this.game,0,0,'pez');
	this.type = this.game.rnd.integerInRange(0,1);
	this.y = this.game.rnd.integerInRange(this.height/4 + 90, this.game.height-this.height/8);
	if(this.type == 0){
		this.x = this.game.width + this.width/8;
		this.scale.setTo(-0.125, 0.125);
	}
	else{
		this.x = 0 - this.width/8;
		this.scale.setTo(0.125);
	}
	
	this.anchor.setTo(0.5);
	this.game.add.existing(this);
	
	this.game.physics.arcade.enable(this);
	this.body.allowGravity = false;
	this.body.immovable = true;
	if(this.type == 0){
		this.body.velocity.x = -250;
	}
	else{
		this.body.velocity.x = 250;
	}
}

Fish.prototype = Object.create(Phaser.Sprite.prototype);

Fish.prototype.constructor = Fish;

Fish.prototype.update = function(){
	if (this.x >= this.game.width + 250 || this.x <= -250) {
		this.kill();
	}
}