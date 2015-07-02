// $(document).ready(function () {

  function starcraftView() {
  };

  starcraftView.prototype.renderLandscape = function(cellArray) {
    var html = createLandscapeHtml(cellArray)
    $('#landscape-container').append(html);
  };



  StarcraftView.prototype.renderBotsTable = function(botArry) {
    var html = createBotTableHtml(botArry)
    $('#bots-table-container').append(html);
  };



  StarcraftView.prototype.renderStockpile = function(stockpile) {
    var html = createStockpileHtml(stockpile)
    $('#stockpile-container').append(html);
  };

  // var starcraftView = new StarcraftView();
  // starcraftView.renderLandscape(testGridData);
  // starcraftView.renderBotsTable(testBotsData);
  // starcraftView.renderStockpile(testStockpileData);









// });