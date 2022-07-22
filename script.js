var currentDateTime = moment().format("dddd, MMMM DD, YYYY");
var currentHour = moment().format("H");
console.log(currentHour);
var saveBtnEl = jQuery.makeArray($(".saveBtn"));
var textEl = jQuery.makeArray($("textarea"));

// Display current Date in header
$("#currentDay").text(currentDateTime);


function saveTask(){
    console.log(saveBtnEl);
    console.log(textEl);
}

// Click to run function to save the textarea 
$(".saveBtn").click(saveTask);


// Set different textarea background color based of current time.
for ( let i = 0; i < textEl.length; i++){
    if ( (i+9) > currentHour){
        textEl[i].style.backgroundColor = "rgb(95, 206, 132)";
    } else if ((i+9)===currentHour){
        textEl[i].style.backgroundColor = "rgb(222, 90, 37)";
    }
}