var currentDateTime = moment().format("dddd, MMMM DD, YYYY");
var currentHour = moment().format("H");
var saveBtnEl = jQuery.makeArray($(".saveBtn"));
var textEl = jQuery.makeArray($("textarea"));
var textInput;

// Execute on page load - get localstorage 
function init() {
    // Display current Date in header
    $("#currentDay").text(currentDateTime);

    // Same function as below. Try to practice using JQuery as mu as I can. 
    // JQuery - Set textarea background color based off current time.
    $("textarea").each(function(index){
        if ((index + 9) > currentHour) {
            $(this).css("background-color","rgb(95, 206, 132)")
        } else if ((index + 9) == currentHour) {
            $(this).css("background-color","rgb(222, 90, 37)")
        }
    })

    // JS - Set textarea background color based off current time.
    // for (let i = 0; i < textEl.length; i++) {
    //     if ((i + 9) > currentHour) {
    //         textEl[i].style.backgroundColor = "rgb(95, 206, 132)";
    //     } else if ((i + 9) == currentHour) {
    //         textEl[i].style.backgroundColor = "rgb(222, 90, 37)";
    //     }
    // }

    // JS - render localstorage to display
    for (let k = 0; k < localStorage.length; k++){
        var taskRender = localStorage.getItem("Task"+[k]);
        textEl[k].value = taskRender;
        console.log(textEl[k].value);
    }
}

// loop all textarea tag and store the input in local storage. 
function saveTask(event) {
    event.preventDefault();
    for (let j = 0; j < textEl.length; j++) {
        textInput = textEl[j].value;
        localStorage.setItem("Task" + [j], textInput);
    }
}

// load init function
init();
// Click to run function to save the textarea.
$(".saveBtn").click(saveTask);