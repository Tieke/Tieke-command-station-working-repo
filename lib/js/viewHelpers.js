function createStockpileHtml(stockpile) {
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
      return html
}

function createBotTableHtml(botArry) {
  var html = ""
    + "<table id='bots-table'>"
    +   "<thead>"
    +     "<tr>"
    +        "<th></th>"
    +        "<th>ID</th>"
    +        "<th>Mining XP</th>"
    +        "<th>Harvest XP</th>"
    +        "<th>Energy</th>"
    +        "<th></th>"
    +      "</tr>"
    +   "</thead>"
    for (var i = 0; i < botArry.length; i++) {
html += "<tbody>"
      +  "<tr class='bot-row' id='"
      +    botArry[i]["id"]
      +     "'>"
      +    "<td>"
      + createFeedFormHtml(botArry[i])
      +     "</td>"
      +     "<td>"
      +       botArry[i]["id"]
      +     "</td>"
      +     "<td>"
      +       botArry[i]["mining_xp"]
      +     "</td>"
      +     "<td>"
      +       botArry[i]["harvesting_xp"]
      +     "</td>"
      +     "<td>"
      +       botArry[i]["energy"]
      +     "</td>"
      +     "<td>"
      +       createDeployFormHtml(botArry[i])
      +     "</td>"
      +   "</tr>"
      + "</tbody>"
    };
    html += "</table>"
  return html
}

function createBotTableRowHtml(botObject) {
  html = ""
      +  "<tr class='bot-row' id='"
      +   botObject["id"]
      +   "'>"
      +    "<td>"
      + createFeedFormHtml(botObject)
      +     "</td>"
      +     "<td>"
      +       botObject["id"]
      +     "</td>"
      +     "<td>"
      +       botObject["mining_xp"]
      +     "</td>"
      +     "<td>"
      +       botObject["harvesting_xp"]
      +     "</td>"
      +     "<td>"
      +       botObject["energy"]
      +     "</td>"
      +     "<td>"
      +       createDeployFormHtml(botObject)
      +     "</td>"
      +   "</tr>"
  return html
}

function createFeedFormHtml(bot) {
  var html = ""
  + "<div>"
  +   '<button type="submit" class="feed-bot-button" bot_id="' + bot["id"] + '"bot_energy="' + bot["energy"] + '"">Feed Bot</button>'
  + "</div>"
  return html
}

function createDeployFormHtml(bot) {
  var html = ""
  + "<div>"
  + '<button type="submit" class="deploy-bot-button" bot_id="' + bot["id"] + '"bot_energy="' + bot["energy"]  + '"bot_mining_xp="' + bot["mining_xp"]  + '"bot_harvesting_xp="' + bot["harvesting_xp"] + '">Deploy Bot</button>'
  + "</div>"
  return html
}

function createLandscapeHtml(cellArray) {
  var counter = 0
  var html = ""
  for (var i = 0; i < 10; i++) {
    //row div open
    html += "<div id='row_" + (i + 1) + "'>"
    for (var j = 0; j < 10; j++) {
      html += "<div class='cell' id='cell_" + (j + 1) + "'>" //cell div open
      + "f " + cellArray[counter]["food_count"] + " " //cell information
      + "m " + cellArray[counter]["mineral_count"] + " "
      + "</div>" //cell div close
      counter += 1
    };
    html += "</div>" //row div close
  };
  return html
}

function createSingleCellHtml(cellObject) {
  var html = "f " + cellObject["food_count"] + " m " + cellObject["mineral_count"] + " "
  return html
};


// var testBotData = {"id":1,"mining_xp":66,"harvesting_xp":66,"energy":"6.66","status":true,"distance_travelled":"0.0","minerals_mined":0,"food_harvested":0,"stockpile_id":31,"created_at":"2015-07-02T05:18:57.774Z","updated_at":"2015-07-02T22:53:36.046Z"}
// var testCellObject = {"id":46,"food_count":0,"mineral_count":0,"x":2,"y":2,"created_at":"2015-07-02T07:07:26.622Z","updated_at":"2015-07-02T07:07:26.622Z"}
// var testStockpileData = {
//   'food_count':34,
//   'mineral_count': 45
// }
// var testGridData = [{"id":1,"food_count":"3","mineral_count":"5","x_coordinate":"1","y_coordinate":"1","created_at":"2015-07-02T02:24:00.374Z","updated_at":"2015-07-02T02:24:00.374Z"},{"id":2,"food_count":"1","mineral_count":"7","x_coordinate":"2","y_coordinate":"1","created_at":"2015-07-02T02:24:00.381Z","updated_at":"2015-07-02T02:24:00.381Z"},{"id":3,"food_count":"1","mineral_count":"8","x_coordinate":"3","y_coordinate":"1","created_at":"2015-07-02T02:24:00.384Z","updated_at":"2015-07-02T02:24:00.384Z"},{"id":4,"food_count":"7","mineral_count":"5","x_coordinate":"4","y_coordinate":"1","created_at":"2015-07-02T02:24:00.387Z","updated_at":"2015-07-02T02:24:00.387Z"},{"id":5,"food_count":"8","mineral_count":"5","x_coordinate":"5","y_coordinate":"1","created_at":"2015-07-02T02:24:00.390Z","updated_at":"2015-07-02T02:24:00.390Z"},{"id":6,"food_count":"4","mineral_count":"1","x_coordinate":"6","y_coordinate":"1","created_at":"2015-07-02T02:24:00.393Z","updated_at":"2015-07-02T02:24:00.393Z"},{"id":7,"food_count":"10","mineral_count":"8","x_coordinate":"7","y_coordinate":"1","created_at":"2015-07-02T02:24:00.396Z","updated_at":"2015-07-02T02:24:00.396Z"},{"id":8,"food_count":"7","mineral_count":"5","x_coordinate":"8","y_coordinate":"1","created_at":"2015-07-02T02:24:00.400Z","updated_at":"2015-07-02T02:24:00.400Z"},{"id":9,"food_count":"10","mineral_count":"3","x_coordinate":"9","y_coordinate":"1","created_at":"2015-07-02T02:24:00.405Z","updated_at":"2015-07-02T02:24:00.405Z"},{"id":10,"food_count":"2","mineral_count":"10","x_coordinate":"10","y_coordinate":"1","created_at":"2015-07-02T02:24:00.409Z","updated_at":"2015-07-02T02:24:00.409Z"},{"id":11,"food_count":"8","mineral_count":"9","x_coordinate":"1","y_coordinate":"2","created_at":"2015-07-02T02:24:00.413Z","updated_at":"2015-07-02T02:24:00.413Z"},{"id":12,"food_count":"9","mineral_count":"5","x_coordinate":"2","y_coordinate":"2","created_at":"2015-07-02T02:24:00.417Z","updated_at":"2015-07-02T02:24:00.417Z"},{"id":13,"food_count":"9","mineral_count":"6","x_coordinate":"3","y_coordinate":"2","created_at":"2015-07-02T02:24:00.421Z","updated_at":"2015-07-02T02:24:00.421Z"},{"id":14,"food_count":"4","mineral_count":"3","x_coordinate":"4","y_coordinate":"2","created_at":"2015-07-02T02:24:00.425Z","updated_at":"2015-07-02T02:24:00.425Z"},{"id":15,"food_count":"5","mineral_count":"7","x_coordinate":"5","y_coordinate":"2","created_at":"2015-07-02T02:24:00.430Z","updated_at":"2015-07-02T02:24:00.430Z"},{"id":16,"food_count":"8","mineral_count":"4","x_coordinate":"6","y_coordinate":"2","created_at":"2015-07-02T02:24:00.434Z","updated_at":"2015-07-02T02:24:00.434Z"},{"id":17,"food_count":"5","mineral_count":"4","x_coordinate":"7","y_coordinate":"2","created_at":"2015-07-02T02:24:00.437Z","updated_at":"2015-07-02T02:24:00.437Z"},{"id":18,"food_count":"4","mineral_count":"4","x_coordinate":"8","y_coordinate":"2","created_at":"2015-07-02T02:24:00.441Z","updated_at":"2015-07-02T02:24:00.441Z"},{"id":19,"food_count":"5","mineral_count":"3","x_coordinate":"9","y_coordinate":"2","created_at":"2015-07-02T02:24:00.444Z","updated_at":"2015-07-02T02:24:00.444Z"},{"id":20,"food_count":"10","mineral_count":"8","x_coordinate":"10","y_coordinate":"2","created_at":"2015-07-02T02:24:00.449Z","updated_at":"2015-07-02T02:24:00.449Z"},{"id":21,"food_count":"2","mineral_count":"8","x_coordinate":"1","y_coordinate":"3","created_at":"2015-07-02T02:24:00.456Z","updated_at":"2015-07-02T02:24:00.456Z"},{"id":22,"food_count":"7","mineral_count":"8","x_coordinate":"2","y_coordinate":"3","created_at":"2015-07-02T02:24:00.461Z","updated_at":"2015-07-02T02:24:00.461Z"},{"id":23,"food_count":"9","mineral_count":"1","x_coordinate":"3","y_coordinate":"3","created_at":"2015-07-02T02:24:00.467Z","updated_at":"2015-07-02T02:24:00.467Z"},{"id":24,"food_count":"6","mineral_count":"9","x_coordinate":"4","y_coordinate":"3","created_at":"2015-07-02T02:24:00.471Z","updated_at":"2015-07-02T02:24:00.471Z"},{"id":25,"food_count":"10","mineral_count":"3","x_coordinate":"5","y_coordinate":"3","created_at":"2015-07-02T02:24:00.475Z","updated_at":"2015-07-02T02:24:00.475Z"},{"id":26,"food_count":"2","mineral_count":"7","x_coordinate":"6","y_coordinate":"3","created_at":"2015-07-02T02:24:00.507Z","updated_at":"2015-07-02T02:24:00.507Z"},{"id":27,"food_count":"9","mineral_count":"6","x_coordinate":"7","y_coordinate":"3","created_at":"2015-07-02T02:24:00.512Z","updated_at":"2015-07-02T02:24:00.512Z"},{"id":28,"food_count":"8","mineral_count":"4","x_coordinate":"8","y_coordinate":"3","created_at":"2015-07-02T02:24:00.516Z","updated_at":"2015-07-02T02:24:00.516Z"},{"id":29,"food_count":"10","mineral_count":"10","x_coordinate":"9","y_coordinate":"3","created_at":"2015-07-02T02:24:00.520Z","updated_at":"2015-07-02T02:24:00.520Z"},{"id":30,"food_count":"7","mineral_count":"8","x_coordinate":"10","y_coordinate":"3","created_at":"2015-07-02T02:24:00.525Z","updated_at":"2015-07-02T02:24:00.525Z"},{"id":31,"food_count":"8","mineral_count":"2","x_coordinate":"1","y_coordinate":"4","created_at":"2015-07-02T02:24:00.537Z","updated_at":"2015-07-02T02:24:00.537Z"},{"id":32,"food_count":"6","mineral_count":"3","x_coordinate":"2","y_coordinate":"4","created_at":"2015-07-02T02:24:00.541Z","updated_at":"2015-07-02T02:24:00.541Z"},{"id":33,"food_count":"6","mineral_count":"9","x_coordinate":"3","y_coordinate":"4","created_at":"2015-07-02T02:24:00.545Z","updated_at":"2015-07-02T02:24:00.545Z"},{"id":34,"food_count":"6","mineral_count":"1","x_coordinate":"4","y_coordinate":"4","created_at":"2015-07-02T02:24:00.549Z","updated_at":"2015-07-02T02:24:00.549Z"},{"id":35,"food_count":"10","mineral_count":"6","x_coordinate":"5","y_coordinate":"4","created_at":"2015-07-02T02:24:00.554Z","updated_at":"2015-07-02T02:24:00.554Z"},{"id":36,"food_count":"8","mineral_count":"9","x_coordinate":"6","y_coordinate":"4","created_at":"2015-07-02T02:24:00.558Z","updated_at":"2015-07-02T02:24:00.558Z"},{"id":37,"food_count":"3","mineral_count":"2","x_coordinate":"7","y_coordinate":"4","created_at":"2015-07-02T02:24:00.561Z","updated_at":"2015-07-02T02:24:00.561Z"},{"id":38,"food_count":"2","mineral_count":"10","x_coordinate":"8","y_coordinate":"4","created_at":"2015-07-02T02:24:00.570Z","updated_at":"2015-07-02T02:24:00.570Z"},{"id":39,"food_count":"6","mineral_count":"3","x_coordinate":"9","y_coordinate":"4","created_at":"2015-07-02T02:24:00.575Z","updated_at":"2015-07-02T02:24:00.575Z"},{"id":40,"food_count":"4","mineral_count":"1","x_coordinate":"10","y_coordinate":"4","created_at":"2015-07-02T02:24:00.581Z","updated_at":"2015-07-02T02:24:00.581Z"},{"id":41,"food_count":"10","mineral_count":"10","x_coordinate":"1","y_coordinate":"5","created_at":"2015-07-02T02:24:00.586Z","updated_at":"2015-07-02T02:24:00.586Z"},{"id":42,"food_count":"6","mineral_count":"8","x_coordinate":"2","y_coordinate":"5","created_at":"2015-07-02T02:24:00.589Z","updated_at":"2015-07-02T02:24:00.589Z"},{"id":43,"food_count":"10","mineral_count":"1","x_coordinate":"3","y_coordinate":"5","created_at":"2015-07-02T02:24:00.593Z","updated_at":"2015-07-02T02:24:00.593Z"},{"id":44,"food_count":"3","mineral_count":"8","x_coordinate":"4","y_coordinate":"5","created_at":"2015-07-02T02:24:00.600Z","updated_at":"2015-07-02T02:24:00.600Z"},{"id":45,"food_count":"9","mineral_count":"6","x_coordinate":"5","y_coordinate":"5","created_at":"2015-07-02T02:24:00.604Z","updated_at":"2015-07-02T02:24:00.604Z"},{"id":46,"food_count":"9","mineral_count":"5","x_coordinate":"6","y_coordinate":"5","created_at":"2015-07-02T02:24:00.610Z","updated_at":"2015-07-02T02:24:00.610Z"},{"id":47,"food_count":"10","mineral_count":"8","x_coordinate":"7","y_coordinate":"5","created_at":"2015-07-02T02:24:00.613Z","updated_at":"2015-07-02T02:24:00.613Z"},{"id":48,"food_count":"7","mineral_count":"2","x_coordinate":"8","y_coordinate":"5","created_at":"2015-07-02T02:24:00.616Z","updated_at":"2015-07-02T02:24:00.616Z"},{"id":49,"food_count":"9","mineral_count":"5","x_coordinate":"9","y_coordinate":"5","created_at":"2015-07-02T02:24:00.620Z","updated_at":"2015-07-02T02:24:00.620Z"},{"id":50,"food_count":"3","mineral_count":"5","x_coordinate":"10","y_coordinate":"5","created_at":"2015-07-02T02:24:00.624Z","updated_at":"2015-07-02T02:24:00.624Z"},{"id":51,"food_count":"3","mineral_count":"2","x_coordinate":"1","y_coordinate":"6","created_at":"2015-07-02T02:24:00.628Z","updated_at":"2015-07-02T02:24:00.628Z"},{"id":52,"food_count":"10","mineral_count":"3","x_coordinate":"2","y_coordinate":"6","created_at":"2015-07-02T02:24:00.634Z","updated_at":"2015-07-02T02:24:00.634Z"},{"id":53,"food_count":"8","mineral_count":"8","x_coordinate":"3","y_coordinate":"6","created_at":"2015-07-02T02:24:00.642Z","updated_at":"2015-07-02T02:24:00.642Z"},{"id":54,"food_count":"8","mineral_count":"2","x_coordinate":"4","y_coordinate":"6","created_at":"2015-07-02T02:24:00.646Z","updated_at":"2015-07-02T02:24:00.646Z"},{"id":55,"food_count":"8","mineral_count":"4","x_coordinate":"5","y_coordinate":"6","created_at":"2015-07-02T02:24:00.649Z","updated_at":"2015-07-02T02:24:00.649Z"},{"id":56,"food_count":"1","mineral_count":"9","x_coordinate":"6","y_coordinate":"6","created_at":"2015-07-02T02:24:00.653Z","updated_at":"2015-07-02T02:24:00.653Z"},{"id":57,"food_count":"8","mineral_count":"8","x_coordinate":"7","y_coordinate":"6","created_at":"2015-07-02T02:24:00.657Z","updated_at":"2015-07-02T02:24:00.657Z"},{"id":58,"food_count":"9","mineral_count":"9","x_coordinate":"8","y_coordinate":"6","created_at":"2015-07-02T02:24:00.666Z","updated_at":"2015-07-02T02:24:00.666Z"},{"id":59,"food_count":"2","mineral_count":"1","x_coordinate":"9","y_coordinate":"6","created_at":"2015-07-02T02:24:00.669Z","updated_at":"2015-07-02T02:24:00.669Z"},{"id":60,"food_count":"5","mineral_count":"9","x_coordinate":"10","y_coordinate":"6","created_at":"2015-07-02T02:24:00.672Z","updated_at":"2015-07-02T02:24:00.672Z"},{"id":61,"food_count":"6","mineral_count":"5","x_coordinate":"1","y_coordinate":"7","created_at":"2015-07-02T02:24:00.676Z","updated_at":"2015-07-02T02:24:00.676Z"},{"id":62,"food_count":"9","mineral_count":"6","x_coordinate":"2","y_coordinate":"7","created_at":"2015-07-02T02:24:00.679Z","updated_at":"2015-07-02T02:24:00.679Z"},{"id":63,"food_count":"8","mineral_count":"10","x_coordinate":"3","y_coordinate":"7","created_at":"2015-07-02T02:24:00.684Z","updated_at":"2015-07-02T02:24:00.684Z"},{"id":64,"food_count":"7","mineral_count":"7","x_coordinate":"4","y_coordinate":"7","created_at":"2015-07-02T02:24:00.687Z","updated_at":"2015-07-02T02:24:00.687Z"},{"id":65,"food_count":"2","mineral_count":"10","x_coordinate":"5","y_coordinate":"7","created_at":"2015-07-02T02:24:00.691Z","updated_at":"2015-07-02T02:24:00.691Z"},{"id":66,"food_count":"6","mineral_count":"5","x_coordinate":"6","y_coordinate":"7","created_at":"2015-07-02T02:24:00.699Z","updated_at":"2015-07-02T02:24:00.699Z"},{"id":67,"food_count":"8","mineral_count":"8","x_coordinate":"7","y_coordinate":"7","created_at":"2015-07-02T02:24:00.702Z","updated_at":"2015-07-02T02:24:00.702Z"},{"id":68,"food_count":"1","mineral_count":"9","x_coordinate":"8","y_coordinate":"7","created_at":"2015-07-02T02:24:00.706Z","updated_at":"2015-07-02T02:24:00.706Z"},{"id":69,"food_count":"10","mineral_count":"6","x_coordinate":"9","y_coordinate":"7","created_at":"2015-07-02T02:24:00.710Z","updated_at":"2015-07-02T02:24:00.710Z"},{"id":70,"food_count":"10","mineral_count":"7","x_coordinate":"10","y_coordinate":"7","created_at":"2015-07-02T02:24:00.713Z","updated_at":"2015-07-02T02:24:00.713Z"},{"id":71,"food_count":"2","mineral_count":"7","x_coordinate":"1","y_coordinate":"8","created_at":"2015-07-02T02:24:00.716Z","updated_at":"2015-07-02T02:24:00.716Z"},{"id":72,"food_count":"6","mineral_count":"4","x_coordinate":"2","y_coordinate":"8","created_at":"2015-07-02T02:24:00.720Z","updated_at":"2015-07-02T02:24:00.720Z"},{"id":73,"food_count":"8","mineral_count":"9","x_coordinate":"3","y_coordinate":"8","created_at":"2015-07-02T02:24:00.723Z","updated_at":"2015-07-02T02:24:00.723Z"},{"id":74,"food_count":"1","mineral_count":"5","x_coordinate":"4","y_coordinate":"8","created_at":"2015-07-02T02:24:00.731Z","updated_at":"2015-07-02T02:24:00.731Z"},{"id":75,"food_count":"3","mineral_count":"10","x_coordinate":"5","y_coordinate":"8","created_at":"2015-07-02T02:24:00.736Z","updated_at":"2015-07-02T02:24:00.736Z"},{"id":76,"food_count":"8","mineral_count":"7","x_coordinate":"6","y_coordinate":"8","created_at":"2015-07-02T02:24:00.740Z","updated_at":"2015-07-02T02:24:00.740Z"},{"id":77,"food_count":"5","mineral_count":"3","x_coordinate":"7","y_coordinate":"8","created_at":"2015-07-02T02:24:00.743Z","updated_at":"2015-07-02T02:24:00.743Z"},{"id":78,"food_count":"1","mineral_count":"10","x_coordinate":"8","y_coordinate":"8","created_at":"2015-07-02T02:24:00.746Z","updated_at":"2015-07-02T02:24:00.746Z"},{"id":79,"food_count":"8","mineral_count":"1","x_coordinate":"9","y_coordinate":"8","created_at":"2015-07-02T02:24:00.750Z","updated_at":"2015-07-02T02:24:00.750Z"},{"id":80,"food_count":"9","mineral_count":"2","x_coordinate":"10","y_coordinate":"8","created_at":"2015-07-02T02:24:00.753Z","updated_at":"2015-07-02T02:24:00.753Z"},{"id":81,"food_count":"5","mineral_count":"5","x_coordinate":"1","y_coordinate":"9","created_at":"2015-07-02T02:24:00.760Z","updated_at":"2015-07-02T02:24:00.760Z"},{"id":82,"food_count":"3","mineral_count":"4","x_coordinate":"2","y_coordinate":"9","created_at":"2015-07-02T02:24:00.764Z","updated_at":"2015-07-02T02:24:00.764Z"},{"id":83,"food_count":"1","mineral_count":"8","x_coordinate":"3","y_coordinate":"9","created_at":"2015-07-02T02:24:00.767Z","updated_at":"2015-07-02T02:24:00.767Z"},{"id":84,"food_count":"2","mineral_count":"3","x_coordinate":"4","y_coordinate":"9","created_at":"2015-07-02T02:24:00.770Z","updated_at":"2015-07-02T02:24:00.770Z"},{"id":85,"food_count":"4","mineral_count":"3","x_coordinate":"5","y_coordinate":"9","created_at":"2015-07-02T02:24:00.780Z","updated_at":"2015-07-02T02:24:00.780Z"},{"id":86,"food_count":"2","mineral_count":"2","x_coordinate":"6","y_coordinate":"9","created_at":"2015-07-02T02:24:00.784Z","updated_at":"2015-07-02T02:24:00.784Z"},{"id":87,"food_count":"1","mineral_count":"5","x_coordinate":"7","y_coordinate":"9","created_at":"2015-07-02T02:24:00.789Z","updated_at":"2015-07-02T02:24:00.789Z"},{"id":88,"food_count":"9","mineral_count":"6","x_coordinate":"8","y_coordinate":"9","created_at":"2015-07-02T02:24:00.792Z","updated_at":"2015-07-02T02:24:00.792Z"},{"id":89,"food_count":"5","mineral_count":"7","x_coordinate":"9","y_coordinate":"9","created_at":"2015-07-02T02:24:00.798Z","updated_at":"2015-07-02T02:24:00.798Z"},{"id":90,"food_count":"6","mineral_count":"8","x_coordinate":"10","y_coordinate":"9","created_at":"2015-07-02T02:24:00.802Z","updated_at":"2015-07-02T02:24:00.802Z"},{"id":91,"food_count":"6","mineral_count":"7","x_coordinate":"1","y_coordinate":"10","created_at":"2015-07-02T02:24:00.805Z","updated_at":"2015-07-02T02:24:00.805Z"},{"id":92,"food_count":"3","mineral_count":"4","x_coordinate":"2","y_coordinate":"10","created_at":"2015-07-02T02:24:00.809Z","updated_at":"2015-07-02T02:24:00.809Z"},{"id":93,"food_count":"10","mineral_count":"1","x_coordinate":"3","y_coordinate":"10","created_at":"2015-07-02T02:24:00.814Z","updated_at":"2015-07-02T02:24:00.814Z"},{"id":94,"food_count":"3","mineral_count":"6","x_coordinate":"4","y_coordinate":"10","created_at":"2015-07-02T02:24:00.824Z","updated_at":"2015-07-02T02:24:00.824Z"},{"id":95,"food_count":"9","mineral_count":"7","x_coordinate":"5","y_coordinate":"10","created_at":"2015-07-02T02:24:00.836Z","updated_at":"2015-07-02T02:24:00.836Z"},{"id":96,"food_count":"9","mineral_count":"1","x_coordinate":"6","y_coordinate":"10","created_at":"2015-07-02T02:24:00.845Z","updated_at":"2015-07-02T02:24:00.845Z"},{"id":97,"food_count":"6","mineral_count":"2","x_coordinate":"7","y_coordinate":"10","created_at":"2015-07-02T02:24:00.850Z","updated_at":"2015-07-02T02:24:00.850Z"},{"id":98,"food_count":"1","mineral_count":"5","x_coordinate":"8","y_coordinate":"10","created_at":"2015-07-02T02:24:00.855Z","updated_at":"2015-07-02T02:24:00.855Z"},{"id":99,"food_count":"1","mineral_count":"7","x_coordinate":"9","y_coordinate":"10","created_at":"2015-07-02T02:24:00.861Z","updated_at":"2015-07-02T02:24:00.861Z"},{"id":100,"food_count":"2","mineral_count":"2","x_coordinate":"10","y_coordinate":"10","created_at":"2015-07-02T02:24:00.866Z","updated_at":"2015-07-02T02:24:00.866Z"}]
var testBotsData = [{"id":1,"mining_xp":1,"harvesting_xp":1,"energy":"7.0","status":true,"distance_travelled":"0.0","minerals_mined":0,"food_harvested":0,"stockpile_id":2,"created_at":"2015-07-02T05:18:57.774Z","updated_at":"2015-07-02T05:19:13.969Z"},{"id":2,"mining_xp":1,"harvesting_xp":1,"energy":"7.0","status":true,"distance_travelled":"0.0","minerals_mined":0,"food_harvested":0,"stockpile_id":2,"created_at":"2015-07-02T05:18:57.809Z","updated_at":"2015-07-02T05:19:13.977Z"},{"id":3,"mining_xp":1,"harvesting_xp":1,"energy":"7.0","status":true,"distance_travelled":"0.0","minerals_mined":0,"food_harvested":0,"stockpile_id":2,"created_at":"2015-07-02T05:18:57.817Z","updated_at":"2015-07-02T05:19:13.981Z"},{"id":4,"mining_xp":1,"harvesting_xp":1,"energy":"7.0","status":true,"distance_travelled":"0.0","minerals_mined":0,"food_harvested":0,"stockpile_id":2,"created_at":"2015-07-02T05:18:57.826Z","updated_at":"2015-07-02T05:19:13.992Z"},{"id":5,"mining_xp":1,"harvesting_xp":1,"energy":"7.0","status":true,"distance_travelled":"0.0","minerals_mined":0,"food_harvested":0,"stockpile_id":2,"created_at":"2015-07-02T05:18:57.832Z","updated_at":"2015-07-02T05:19:13.996Z"},{"id":6,"mining_xp":1,"harvesting_xp":1,"energy":"7.0","status":true,"distance_travelled":"0.0","minerals_mined":0,"food_harvested":0,"stockpile_id":2,"created_at":"2015-07-02T05:18:57.838Z","updated_at":"2015-07-02T05:19:14.000Z"},{"id":7,"mining_xp":1,"harvesting_xp":1,"energy":"7.0","status":true,"distance_travelled":"0.0","minerals_mined":0,"food_harvested":0,"stockpile_id":2,"created_at":"2015-07-02T05:18:57.843Z","updated_at":"2015-07-02T05:19:14.004Z"},{"id":8,"mining_xp":1,"harvesting_xp":1,"energy":"7.0","status":true,"distance_travelled":"0.0","minerals_mined":0,"food_harvested":0,"stockpile_id":2,"created_at":"2015-07-02T05:18:57.848Z","updated_at":"2015-07-02T05:19:14.007Z"},{"id":9,"mining_xp":1,"harvesting_xp":1,"energy":"7.0","status":true,"distance_travelled":"0.0","minerals_mined":0,"food_harvested":0,"stockpile_id":2,"created_at":"2015-07-02T05:18:57.853Z","updated_at":"2015-07-02T05:19:14.011Z"},{"id":10,"mining_xp":1,"harvesting_xp":1,"energy":"7.0","status":true,"distance_travelled":"0.0","minerals_mined":0,"food_harvested":0,"stockpile_id":2,"created_at":"2015-07-02T05:18:57.859Z","updated_at":"2015-07-02T05:19:14.018Z"}]

