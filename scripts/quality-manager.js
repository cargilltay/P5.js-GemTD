function QualityManager() {
	this.isMax = false;

	this.qualities = {
		chipped: 100,
		flawed: 0,
		normal: 0,
		flawless: 0,
		perfect: 0,
	}
	
	this.sortOnKeys = function() {
		var sortable = [];
		for (var q in this.qualities)
			sortable.push([q, this.qualities[q]])

		//make array of sorted quality values
		sortable.sort(function(a, b) {
			return a[1] - b[1]
		})

		var tempDict = {};
		for (var i = 0; i < sortable.length; i++) {
			tempDict[sortable[i][0]] = sortable[i][1]
		}

		this.qualities = tempDict;
	}

	this.updateQuality = function(level) {
		if (this.isMax == true) {
			return;
		}


		switch (level) {
			case level < 9:
				this.qualities.chipped = 0;
				this.qualities.flawed = 0;
				this.qualities.normal = 0;
				this.qualities.flawless = 0;
				this.qualities.perfect = 0;
			case 2:
				//20g
				this.qualities.chipped = 70;
				this.qualities.flawed = 30;
				break;
			case 3:
				//50g
				this.qualities.chipped = 60;
				this.qualities.flawed = 30;
				this.qualities.normal = 10;
				break;
			case 4:
				//80g
				this.qualities.chipped = 50;
				this.qualities.flawed = 30;
				this.qualities.normal = 20;
				break;
			case 5:
				//110g
				this.qualities.chipped = 50;
				this.qualities.flawed = 30;
				this.qualities.normal = 20;
				this.qualities.flawless = 10;
				break;
			case 6:
				//140g
				this.qualities.chipped = 30;
				this.qualities.flawed = 30;
				this.qualities.normal = 30;
				this.qualities.flawless = 10;
				break;
			case 7:
				//170g
				this.qualities.chipped = 20;
				this.qualities.flawed = 30;
				this.qualities.normal = 30;
				this.qualities.flawless = 20;
				break;
			case 8:
				//200g
				this.qualities.chipped = 10;
				this.qualities.flawed = 30;
				this.qualities.normal = 30;
				this.qualities.flawless = 30;
				break;
			case 9:
				//230g
				this.qualities.flawed = 30;
				this.qualities.normal = 30;
				this.qualities.flawless = 30;
				this.qualities.perfect = 10;
				this.isMax = true;
				break;
		}
	}
}