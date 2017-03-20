var bg;
var rock;
var w = 20;
var canvasWidth = 740;
var canvasHeight = 740;
var roundInProgress = false;
var uiManager = new UIManager();
var curQualities = new QualityManager();
var nextQualities = new QualityManager();
var gemFactory = new GemFactory();
var game;
var grid;

function init() {
	grid = new Grid((width / w), (height / w));
	setupUI();
}

function setupUI() {
	uiManager.init();
}

function setup() {
	bg = loadImage("assets/background.png");
	rock = loadImage('assets/rock_converted.png');
	var canvas = createCanvas(canvasWidth, canvasHeight);

	init();

	canvas.parent("#my-canvas");

	//populate grid
	grid.populate();

}

function draw() {

	background(bg);

	if (!game) {
		return;
	}

	//show grid
	if (uiManager.showGrid) {
		grid.showCells();
	}

	//show gems
	for (var i = 0; i < game.gems.length; i++) {
		game.gems[i].show();
		game.gems[i].fireProjectiles();
	}

	if (uiManager.placeRock && game.mode == GameMode.PlayerTurn) {
		image(rock, mouseX, mouseY);
	}

	//show monsters
	if (game.mode == GameMode.Defend) {
		moveMinions()
	}
}

function mouseClicked() {
	//return if not in canvas
	if (mouseX > canvasWidth || mouseX < 0 || mouseY > canvasHeight || mouseY < 0) {
		return;
	}

	//place rock (random gem)
	if (uiManager.placeRock) {
		var closest = grid.closestCell(mouseX, mouseY);
		if (!closest.isBlocked) {
			var newGem = gemFactory.createGem(closest.x, closest.y);
			game.gems.push(newGem)
			game.numGemsToPlace--;
			closest.isBlocked = true;

			console.log(game.numGemsToPlace);
			if (game.numGemsToPlace == 0) {
				game.nextMode();
				uiManager.placeRock = false;
			}
		}
	}
}

function moveMinions() {
	var minionNum = 0;
	$(game.minions).each(function () {
		//seperate dead/reach end for possible logic in future
		if (this.isDead) {
			console.log("dead")
			game.minions.splice(minionNum, 1)
			return;
		}
		else if(this.hasReachedEnd){
			game.minions.splice(minionNum, 1)
			return;
		}
		this.show();
		this.updatePosition();
		minionNum++;
	})
}