var currentDateTime = moment().format("dddd, MMMM DD, YYYY");
var saveBtnEl = jQuery.makeArray($('.saveBtn'));
var textEl = jQuery.makeArray($('textarea'));
$("#currentDay").text(currentDateTime);


function saveTask(){
    console.log(saveBtnEl);
    console.log(textEl);
}

$(".saveBtn").click(saveTask);