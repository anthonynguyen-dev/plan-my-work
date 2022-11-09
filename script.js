var currentDay = document.querySelector("#currentDay");
var date = moment().format("dddd, MMMM Do YYYY");
var timeBlockContainer = $(".container");

function pageLoad() {
  currentDay.textContent = date;
}

function addTimeBlocks() {
  var currentHour = moment().format("H");
  for (let i = 0; i < 10; i++) {
    var nextRow = $("<div>");
    nextRow.attr("class", "row");
    var infoBlock = $("<p>");
    infoBlock.attr("class", "hour");
    infoBlock.text(
      moment()
        .hour(i + 8)
        .format("hA")
    );
    nextRow.append(infoBlock);
    timeBlockContainer.append(nextRow);
  }
}
addTimeBlocks();
pageLoad();
