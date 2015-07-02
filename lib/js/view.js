$(document).ready(function () {

  function StarcraftView() {
  };

  StarcraftView.prototype.renderLandscape = function(cellArray) {
    var html = createLandscapeHtml(cellArray)
    $('#landscape-container').append(html);
  };


  StarcraftView.prototype.renderBotsTable = function(botArry) {
    var html = ""
    + "<table id='bots-table'>"
    + "<tr>"
    +    "<th>ID</th>"
    +    "<th>Mining XP</th>"
    +    "<th>Harvest XP</th>"
    +    "<th>Energy</th>"
    +  "</tr>"
    for (var i = 0; i < botArry.length; i++) {
      html += createFeedFormHtml(botArry[i])
      + "<tr>"
      +   "<td>"
      +     botArry[i]["id"]
      +   "</td>"
      +   "<td>"
      +     botArry[i]["mining_xp"]
      +   "</td>"
      +   "<td>"
      +     botArry[i]["harvesting_xp"]
      +   "</td>"
      +   "<td>"
      +     botArry[i]["energy"]
      +   "</td>"
      + "<tr>"
      + createDeployFormHtml(botArry[i])
    };
    html += "</table>"
    $('#bots-table-container').append(html);
  };






var starcraftView = new StarcraftView();
starcraftView.renderLandscape(testGridData);
starcraftView.renderBotsTable(testBotsData);



});