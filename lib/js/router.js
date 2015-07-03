$(document).ready(function () {

	controller = new starcraftController();
	bot_selected = []

	$('#start-button').on('click', function (e) {
		controller.newStockpile();
	})

	$('#stockpile-container').on('click', '#create-bot-button', function (e) {
		e.preventDefault();
		controller.createBot();
	})

	$('#bots-table-container').on('click', '.feed-bot-button', function (e) {
		e.preventDefault();
		botId = $(e.target).attr('bot_id');
		controller.feedBot(botId);
	})

	$('body').on('click', '.deploy-bot-button', function (e) {
		e.preventDefault;
		bot_selected = []
		botData = {"bot_mining_xp": $(e.target).attr('bot_mining_xp'),
							 "bot_harvesting_xp": $(e.target).attr('bot_harvesting_xp'),
							 "bot_id": $(e.target).attr('bot_id')};
		bot_selected.push(botData)
	});
	
	$('body').on('click', '.cell', function (e) {
		e.preventDefault();
		cellCoordinates = [$(e.target).parent().attr('id'), $(e.target).parent().parent().attr('id')]
		if (bot_selected.length === 1) {
			controller.deployBotToMine(bot_selected[0], cellCoordinates)
			console.log('MINE DERP')
		}
		bot_selected = []
	});

	$('body').on('contextmenu', '.cell', function (e) {
		cellCoordinates = [$(e.target).parent().attr('id'), $(e.target).parent().parent().attr('id')]
		if (bot_selected.length === 1) {
			controller.deployBotToHarvest(bot_selected[0], cellCoordinates);
			console.log('HARVEST DERP')
		}

	})

})