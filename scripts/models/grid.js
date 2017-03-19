function Grid(numRows, numCols) {
	this.numRows = floor(numRows);
	this.numCols = floor(numCols);
	this.cells = [];

	this.populate = function () {
		for (var i = 0; i < this.numRows; i++) {
			for (var j = 0; j < this.numCols; j++) {
				var fill = false;
				$(checkPoints).each(function () {
					var point = this;
					var continueOn = false;
					$(point).each(function () {
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
				this.cells.push(cell)
			}
		}
	}

	this.showCells = function () {
		for (var i = 0; i < this.cells.length; i++) {
			this.cells[i].show();
		}
	}

	this.closestCell = function (x, y) {
		var cell = null;
		$(this.cells).each(function () {
			var modx = x - (x % 20);
			var mody = y - (y % 20);
			if (this.x == modx && this.y == mody) {
				cell = this;
				return false;
			}
		})
		return cell;
	}
}