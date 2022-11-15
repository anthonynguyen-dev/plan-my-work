var currentDay = document.querySelector("#currentDay");
var date = moment().format("dddd, MMMM Do YYYY");
var timeBlockContainer = $(".container");
function pageLoad() {
  currentDay.textContent = date;
  $("#8AM").val(localStorage.getItem("8AM"));
  $("#9AM").val(localStorage.getItem("9AM"));
  $("#10AM").val(localStorage.getItem("10AM"));
  $("#11AM").val(localStorage.getItem("11AM"));
  $("#12PM").val(localStorage.getItem("12PM"));
  $("#1PM").val(localStorage.getItem("1PM"));
  $("#2PM").val(localStorage.getItem("2PM"));
  $("#3PM").val(localStorage.getItem("3PM"));
  $("#4PM").val(localStorage.getItem("4PM"));
  $("#5PM").val(localStorage.getItem("5PM"));
}

function addTimeBlocks() {
  for (let i = 0; i < 10; i++) {
    var nextRow = $("<div>");
    nextRow.attr("class", "row");
    var infoBlock = $("<p>");
    infoBlock.attr("class", "hour");
    infoBlock.attr("class", "col-md-1");
    infoBlock.text(
      moment()
        .hour(i + 8)
        .format("hA")
    );
    nextRow.append(infoBlock);
    timeBlockContainer.append(nextRow);
    var nextTextRow = $("<input>");
    nextTextRow.attr("class", "textarea");
    nextTextRow.attr("class", "description");
    nextTextRow.attr("class", "col-md-10");
    nextTextRow.attr(
      "id",
      `${moment()
        .hour(i + 8)
        .format("hA")}`
    );
    nextTextRow.attr("type", "text");
    var nextRowBtn = $("<button>");
    nextRowBtn.attr("class", "btn saveBtn col-md-1");
    var nextRowBtnIcn = $("<i>");
    nextRowBtnIcn.attr("class", "fas fa-save");
    nextRowBtn.append(nextRowBtnIcn);
    nextRow.append(nextRowBtn);
    nextRow.append(nextTextRow);
  }
  $(".saveBtn").click(function () {
    //console.log($(this));
    console.log();
    var hrInput = $(this).parent().children("input")[0];
    localStorage.setItem(hrInput, element.val());

    // for (let i = 0; i < 10; i++) {
    //   var inputId = `${moment()
    //     .hour(i + 8)
    //     .format("hA")}`;
    //   var element = $(`#${inputId}`);
    //
    //   console.log("InputId:", inputId);
    //   console.log("elementVal:", element.val());
    //   $("#8AM").val(localStorage.getItem("8AM"));
    // }
  });
}
addTimeBlocks();
pageLoad();
