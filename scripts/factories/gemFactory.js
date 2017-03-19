function GemFactory() {

    //not in use for now
    this.createGem = function (type) {
        var gem;

        switch (type) {
            case GemTypeEnum.Amethyst:
                employee = new FullTime();
                break;
            case GemTypeEnum.Aquamarine:
                employee = new FullTime();
                break;
            case GemTypeEnum.Diamond:
                employee = new FullTime();
                break;
            case GemTypeEnum.Emerald:
                employee = new FullTime();
                break;
            case GemTypeEnum.Opal:
                employee = new FullTime();
                break;
            case GemTypeEnum.Ruby:
                employee = new FullTime();
                break;
            case GemTypeEnum.Sapphire:
                employee = new FullTime();
                break;
            case GemTypeEnum.Topaz:
                employee = new FullTime();
                break;
        }

        employee.type = type;

        employee.say = function () {
            log.add(this.type + ": rate " + this.hourly + "/hour");
        }

        return gem;
    }
}