// $(document).ready(function () {

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



  starcraftView.prototype.renderStockpile = function(stockpile) {
    var html = createStockpileHtml(stockpile)
    $('#stockpile-container').append(html);
  };

starcraftView.prototype.updateSingleCell = function(cellObject) {
  var rowID = "row_" + cellObject["y"]
  var cellID = "cell_" + cellObject["x"]
  $target = $('#landscape-container #' + rowID + " #" + cellID)
  var html = createSingleCellHtml(cellObject)
  $target.text(html)
}

starcraftView.prototype.updateBotsTableRow = function(botObject) {
  bot_id = botObject["id"]
  $target = $('#bots-table-container .bot-row#' + bot_id)
  html = createBotTableRowHtml(botObject)
  $target.replaceWith(html)
};

  // var starcraftView = new starcraftView();
  // starcraftView.renderLandscape(testGridData);
  // starcraftView.renderBotsTable(testBotsData);
  // starcraftView.renderStockpile(testStockpileData);

  // starcraftView.updateSingleCell(testCellObject);

  // starcraftView.updateBotsTableRow(testBotData);









// });
