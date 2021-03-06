var minionDestinations = [
	[140, 100],
	[140, 400],
	[560, 400],
	[560, 100],
	[340, 100],
	[340, 600],
	[740, 600],
]

var Difficulty = {
	Easy: 1,
	Normal: 2,
	Hard: 3,
	Extreme: 4,
	Survival: 5,
}

var GameMode = {
	PlayerTurn: 1,
	Defend: 2,
	Boss: 3,
}

var upgradeCosts = [
	20, //level 2
	50, //level 3
	80, //so on...
	110,
	140,
	170,
	200,
	230,
]

var GemTypeEnum = {
	Amethyst: 1,
	Aquamarine: 2,
	Diamond: 3,
	Emerald: 4,
	Opal: 5,
	Ruby: 6,
	Sapphire: 7,
	Topaz: 8,
}

var checkPoints = [
	//0
	[
		[4, 4],
		[4, 5],
		[5, 4],
		[5, 5],
		[6, 4],
		[6, 5],
		[6, 6],
		[6, 7],
		[7, 4],
		[7, 5],
		[7, 6],
		[7, 7],
		[8, 4],
		[8, 5],
		[9, 4],
		[9, 5]
	],

	//1
	[
		[6, 18],
		[6, 19],
		[6, 20],
		[6, 21],
		[6, 22],
		[6, 23],
		[7, 18],
		[7, 19],
		[7, 20],
		[7, 21],
		[7, 22],
		[7, 23],
		[8, 20],
		[8, 21],
		[9, 20],
		[9, 21],
	],

	//2
	[
		[26, 20],
		[26, 21],
		[27, 20],
		[27, 21],
		[28, 18],
		[28, 19],
		[28, 20],
		[28, 21],
		[28, 22],
		[28, 23],
		[29, 18],
		[29, 19],
		[29, 20],
		[29, 21],
		[29, 22],
		[29, 23],
	],

	//3
	[
		[26, 4],
		[26, 5],
		[27, 4],
		[27, 5],
		[28, 4],
		[28, 5],
		[28, 6],
		[28, 7],
		[29, 4],
		[29, 5],
		[29, 6],
		[29, 7],
		[30, 4],
		[30, 5],
		[31, 4],
		[31, 5],
	],

	//4
	[
		[15, 4],
		[15, 5],
		[16, 4],
		[16, 5],
		[17, 4],
		[17, 5],
		[17, 6],
		[17, 7],
		[18, 4],
		[18, 5],
		[18, 6],
		[18, 7],
		[19, 4],
		[19, 5],
		[20, 4],
		[20, 5],
	],

	//5
	[
		[15, 30],
		[15, 31],
		[16, 30],
		[16, 31],
		[17, 28],
		[17, 29],
		[17, 30],
		[17, 31],
		[18, 28],
		[18, 29],
		[18, 30],
		[18, 31],
		[19, 30],
		[19, 31],
		[20, 30],
		[20, 31],
	]
];