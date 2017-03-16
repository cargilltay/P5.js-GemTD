function Game() {
	this.level = 1;
	this.lives = 100;
	this.gold = 10000;
	this.time = 0;
	this.score = 0;
	this.difficulty;
	this.gemQuality = 1;
	this.numMinions = 10;
	this.minion;
	this.gems = [];
	this.minions = [];
	this.mode = GameMode.PlayerTurn;
	this.round = 1;
	this.numGemsToPlace = 5;

	this.init = function(difficulty) {
		this.difficulty = difficulty;
		this.setupBasedOnDifficulty();
		this.populateMinions();
	}

	this.populateMinions = function() {
		var offset = 0;
		for (var i = 0; i < this.numMinions; i++) {
			var m = new Minion(offset);
			this.minions.push(m);
			offset -= 40;
		}
	}

	//unused for now
	this.setupBasedOnDifficulty = function() {
		switch (this.difficulty) {
			case Difficulty.Easy:
				break;
			case Difficulty.Normal:
				break;
			case Difficulty.Hard:
				break;
			case Difficulty.Extreme:
				break;
			case Difficulty.Survival:
				break;
		}
	}

	this.nextMode = function(){

		//is players turn
		if(this.mode != GameMode.PlayerTurn){
			this.mode = GameMode.PlayerTurn;
			
			$('#new-gem').attr("disabled","");
			this.numGemsToPlace = 5;
		}else{
			this.mode = GameMode.Defend;
			
			$('#new-gem').attr("disabled","disabled");
		}
	}

	this.nextRound = function(){
		this.round++;
	}

	this.reset = function() {
		
	}
}