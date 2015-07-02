function starcraftController() {
	this.starcraftView = new starcraftView();
	this.starcraftModel = new starcraftModel(this.starcraftView);
}

starcraftController.prototype.createBot = function () {
	this.starcraftModel.generateBot();
}

starcraftController.prototype.feedBot = function (botId) {
	this.starcraftModel.feedBot();
}

starcraftController.prototype.deployBot = function (botId) {
	this.starcraftModel.deployBot();
}
