var cols, rows;
var bg;
var rock;
var grid = [];
var w = 20;
var canvasWidth = 740;
var canvasHeight = 740;
var roundInProgress = false;
var uiManager = new UIManager();
var curQualities = new QualityManager();
var nextQualities = new QualityManager();
var game = new Game();

function init() {
	nextQualities.updateQuality(game.gemQuality + 1);
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
	cols = floor(width / w);
	rows = floor(height / w);

	//populate grid
	populateGrid();

	//populate minions
	game.populateMinions();
}

function draw() {

	background(bg);

	if (!game.hasBegun) {
		return;
	}

	if (uiManager.placeRock && game.mode == GameMode.PlayerTurn) {
		image(rock, mouseX, mouseY);
	}

	//show grid
	if (uiManager.showGrid) {
		for (var i = 0; i < grid.length; i++) {
			grid[i].show();
		}
	}

	//show gems
	for (var i = 0; i < game.gems.length; i++) {
		game.gems[i].show();
		game.gems[i].fireProjectiles();
	}

	//show monsters
	if (game.mode == GameMode.Defend) {
		moveMinions()
	}
}

function populateGrid() {
	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < cols; j++) {
			var fill = false;
			$(checkPoints).each(function() {
				var point = this;
				var continueOn = false;
				$(point).each(function() {
					var c = this;
					if (c[0] == i && c[1] == j) {
						fill = true;
						continueOn = true;
						return false;
					}
				})
				if (continueOn) {
					return false;
				}
			})
			var cell = new Cell(i, j, fill);
			grid.push(cell)
		}
	}
}

function mouseClicked() {
	//return if not in canvas
	if (mouseX > canvasWidth || mouseX < 0 || mouseY > canvasHeight || mouseY < 0) {
		return;
	}

	//place rock (random gem)
	if (uiManager.placeRock) {
		var closest = closestCell(mouseX, mouseY);
		if (!closest.isBlocked) {
			var newGem = new Gem(closest.x, closest.y);
			newGem.init();
			game.gems.push(newGem)
			closest.isBlocked = true;
			uiManager.placeRock = false;
		}
	}
}

function moveMinions() {
	var minionNum = 0;
	$(game.minions).each(function() {
		if (this.isDead) {
			console.log("dead")
			game.minions.splice(minionNum, 1)
			return;
		}
		this.show();
		this.updatePosition();
		minionNum++;
	})
}

function closestCell(x, y) {
	var cell = null;
	$(grid).each(function() {
		var modx = x - (x % 20);
		var mody = y - (y % 20);
		if (this.x == modx && this.y == mody) {
			cell = this;
			return false;
		}
	})
	return cell;
}