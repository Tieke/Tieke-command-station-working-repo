  function starcraftView() {
  };

  starcraftView.prototype.renderLandscape = function(cellArray) {
    var html = createLandscapeHtml(cellArray)
    $('#landscape-container').append(html);
  };


  starcraftView.prototype.renderBotsTable = function(botArry) {
    var html = createBotTableHtml(botArry)
    $('#bots-table-container').append(html);
  };

  starcraftView.prototype.renderNewBot = function(botObject) {
    var newBot = createBotTableRowHtml(botObject);
    $('#bots-table').append(newBot);
  }

  starcraftView.prototype.renderStockpile = function(stockpile) {
    var html = createStockpileHtml(stockpile)
    $('#stockpile-container').empty();
    $('#stockpile-container').append(html);
  };

starcraftView.prototype.updateSingleCell = function(cellObject) {
  var rowID = "" + cellObject["y"]
  var cellID = "" + cellObject["x"]
  $target = $('#landscape-container #' + rowID + " #" + cellID)
  var html = createSingleCellHtml(cellObject)
  $target.empty();
  $target.html(html);
}

starcraftView.prototype.updateBotsTableRow = function(botObject) {
  bot_id = botObject["id"]
  $target = $('#bots-table-container .bot-row#' + bot_id)
  console.log($target)
  html = createBotTableRowHtml(botObject)
  $target.replaceWith(html)
};
