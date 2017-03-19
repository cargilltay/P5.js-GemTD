function GemFactory() {

    this.createGem = function (colNum, rowNum) {
        var gem = new Gem();

        this.generateGemQuality(gem);
        this.generateGemType(gem)

        gem.img = loadImage("assets/gems/" + gem.quality + gem.type + ".png")
        gem.rowNum = rowNum;
        gem.colNum = colNum;

        switch (gem.type) {
            case GemTypeEnum.Amethyst:
                gem.typeProperties = new Amethyst();
                break;
            case GemTypeEnum.Aquamarine:
                gem.typeProperties = new Aquamarine();
                break;
            case GemTypeEnum.Diamond:
                gem.typeProperties = new Diamond();
                break;
            case GemTypeEnum.Emerald:
                gem.typeProperties = new Emerald();
                break;
            case GemTypeEnum.Opal:
                gem.typeProperties = new Opal();
                break;
            case GemTypeEnum.Ruby:
                gem.typeProperties = new Ruby();
                break;
            case GemTypeEnum.Sapphire:
                gem.typeProperties = new Sapphire();
                break;
            case GemTypeEnum.Topaz:
                gem.typeProperties = new Topaz();
                break;
        }

        return gem;
    }

    this.generateGemQuality = function(gem){
        var randNum = Math.random() * 100;

        var tManager = curQualities;
        tManager.sortOnKeys(tManager);

        var tQualities = tManager.qualities;

        var keys = Object.keys(tQualities);

        //hard to figure this out but:
        //1. sort qualities by chance
        //2. if our randNum is less than lowest quality (say 20), choose it
        //3. if our random isnt, add the next chance and try again
        //(20 + 20 = 40) this is a 2, 20% chance situation etc
        var chance = tQualities[keys[0]]
        for (var i = 0; i < keys.length; i++) {
            if (randNum <= chance) {
                gem.quality = keys[i];
                console.log(chance)
                break;
            }
            chance += tQualities[keys[i + 1]];
        }
    }

    this.generateGemType = function (gem) {
        var typeKeys = Object.keys(GemTypeEnum);
        gem.type = typeKeys[typeKeys.length * Math.random() << 0];
    }
}

function Amethyst() {

}

function Aquamarine() {

}

function Diamond() {

}

function Emerald() {

}

function Opal() {

}

function Ruby() {

}

function Sapphire() {

}

function Topaz() {

}