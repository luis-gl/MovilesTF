Game = function(game){}

Game.prototype = {
    create:function(){
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.background = this.game.add.sprite(0, 0, "bg_orange");

        this.trashGroup = this.game.add.group();
        this.fishGroup = this.game.add.group();
        
        this.trashTypes = ["papel", "barril_toxico"];

        this.timeToSpawnTrash = 1500;
        this.timeCounterTrash = 0;

        this.timeToSpawnFish = 1000;
        this.timeCounterFish = 0;

        this.vidas = 5;
        this.score = 0;

        this.createGUI();
    },
    update:function(){
        this.game.physics.arcade.collide(this.dump, this.trashGroup, this.recycle, null, this);
        this.game.physics.arcade.collide(this.fishGroup, this.trashGroup, this.reduceScore, null, this);

        this.timeCounterTrash += this.game.time.elapsed;
        this.timeCounterFish += this.game.time.elapsed;
        if (this.timeCounterTrash >= this.timeToSpawnTrash){
            this.timeCounterTrash = 0;
            this.trowTrash();
        }
        if (this.timeCounterFish >= this.timeToSpawnFish) {
            this.timeCounterFish = 0;
            this.spawnFish();
        }
    },
    reduceScore:function(fish, trash) {
        this.score -= 100;
        if (this.score < 0) {
            this.score = 0;
        }
        this.scoreTxt.text = "Score: " + this.score;
        fish.kill();
        trash.kill();
    },
    recycle:function(dump, trash){
        if (trash.type == "papel") {
            this.score += 50;
        } else {
            this.score += 150;
        }
        this.scoreTxt.text = "Score: " + this.score;
        trash.kill();
    },
    trowTrash:function(){
        var trash = this.trashGroup.getFirstDead();
        var x = this.game.rnd.integerInRange(200, this.game.width - 20);
        var ind = this.game.rnd.integerInRange(0, 1);
        if (!trash) {
            trash = new Trash(this.game, x, 20, this.trashTypes[ind]);
            trash.loseLife.add(this.substractLife, this);
            this.trashGroup.add(trash);
        } else {
            trash.reset(x, 20, this.trashTypes[ind]);
        }
    },
    spawnFish:function(){
        var fish = this.fishGroup.getFirstDead();
        if (!fish) {
            fish = new Fish(this.game);
            this.fishGroup.add(fish);
        } else {
            fish.reset();
        }
    },
    substractLife:function(){
        this.vidas -= 1;
        if (this.vidas < 0) {
            this.game.state.start("GameOver", true, false, this.score);
        }
        this.vidasTxt.text = "Vidas: " + this.vidas;
    },
    createGUI(){
        this.scoreTxt = this.game.add.text(this.game.width - 225, 50, "Score:");
        this.scoreTxt.text = "Score: " + this.score;
        this.scoreTxt.anchor.setTo(0.5);
        this.scoreTxt.fill = "#FFFFFF";
        this.scoreTxt.fontSize = 50;

        this.vidasTxt = this.game.add.text(20, 50, "Vidas:");
        this.vidasTxt.text = "Vidas: " + this.vidas;
        this.vidasTxt.anchor.setTo(0, 0.5);
        this.vidasTxt.fill = "#FFFFFF";
        this.vidasTxt.fontSize = 50;

        this.dump = new Dump(this.game, 50, 200);
    }
}