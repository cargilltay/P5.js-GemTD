function QualityManager(){

	this.qualities = {
		chipped: 100,
		flawed: 0,
		normal: 0,
		flawless: 0,
		perfect: 0,
	}

	this.sortOnKeys = function(){
		var sorted = [];
    	for(var key in this.qualities) {
        	sorted[sorted.length] = key;
    	}
    	sorted.sort();

    	var tempDict = {};
    	for(var i = 0; i < sorted.length; i++) {
        	tempDict[sorted[i]] = this.qualities[sorted[i]];
    	}

    	this.qualities = tempDict;
	}

	this.updateQuality = function(level) {
		this.qualities.chipped = 0;
		this.qualities.flawed = 0;
		this.qualities.normal = 0;
		this.qualities.flawless = 0;
		this.qualities.perfect = 0;

		switch (level) {
			case 2:
				//20g
				this.qualities.chipped = 70;
				this.qualities.flawed = 30;
				break;
			case 3:
				//50
				this.qualities.chipped = 60;
				this.qualities.flawed = 30;
				this.qualities.normal = 10;
				break;
			case 4:
				//80
				this.qualities.chipped = 50;
				this.qualities.flawed = 30;
				this.qualities.normal = 20;
				break;
			case 5:
				//110
				this.qualities.chipped = 50;
				this.qualities.flawed = 30;
				this.qualities.normal = 20;
				this.qualities.flawless = 10;
				break;
			case 6:
				//140
				this.qualities.chipped = 30;
				this.qualities.flawed = 30;
				this.qualities.normal = 30;
				this.qualities.flawless = 10;
				break;
			case 7:
				//170
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
				break;
		}
	}
}