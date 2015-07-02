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
		botData = {"bot_mining_xp": $(e.target).attr('bot_mining_xp'),
							 "bot_harvesting_xp": $(e.target).attr('bot_harvesting_xp'),
							 "bot_id": $(e.target).attr('bot_id')};

		$('body').on('click', '.cell' function (event) {
			event.preventDefault();
			cellCoordinates = [$(event.target).attr('x'), $(event.target).attr('y')]
			if (event.which === 1) {
				controller.deployBotToMine(botData, cellCoordinates)
			}
			if (event.which === 3) {
				controller.deplotBotToHarvest(botData, cellCoordinates);
			}
		});
	});
	

})