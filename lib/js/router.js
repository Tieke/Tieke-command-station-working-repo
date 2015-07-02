$(document).ready(function () {

	controller = new starcraftController();

	$('.create-bot-button').on('click', function (e) {
		e.preventDefault();
		controller.createBot();
	})

	$('.feed-bot-button').on('click', function (e) {
		e.preventDefault();
		botId = $(e.target).attr('bot_id');
		controller.feedBot(botId);
	})

	$('.deploy-bot-button').on('click', function (e) {
		e.preventDefault;
		botId = $(e.target).attr('bot_id');
		$('body').on('click', '.cell' function (e) {
			cellCoordinates = [$(e.target).attr('x'), $(e.target).attr('y')]
			controller.deployBot(botId, cellCoordinates)
		});
	});
	

})