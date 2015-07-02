$(document).ready(function () {

  function StarcraftView() {
  };

  StarcraftView.prototype.renderLandscape = function(cellArray) {
    var html = createLandscapeHtml(cellArray)
    $('#landscape-container').append(html);
  };


  StarcraftView.prototype.renderBotsTable = function(botArry) {
    var html = createBotTableHtml(botArry)
    $('#bots-table-container').append(html);
  };

  StarcraftView.prototype.renderStockpile = function(stockpile) {
    var html = "<div class='stockpile-div'>"
      +   '<h2>Stockpile</h2>'
      +   '<ul>'
      +     '<li>'
      +       "<p>Food Stocks: " + stockpile['food_count'] + "</p>"
      +     "</li>"
      +     "<li>"
      +       "<p>Mineral Stocks: " + stockpile['mineral_count'] + "</p>"
      +     "</li>"
      +   "</ul>"
      + "</div>"
    $('#stockpile-container').append(html);
  };

  var starcraftView = new StarcraftView();
  starcraftView.renderLandscape(testGridData);
  starcraftView.renderBotsTable(testBotsData);
  starcraftView.renderStockpile(testStockpileData);

});