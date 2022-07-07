var timeStamp = $(".time-block");
var hourStamp = moment().format("h");
var scheduleInsert = $(".column-container");

var userInput = {};

$(document).ready(function(){
    $("#currentDay").text(moment().format("MMMM Do YYYY"));
});


//function for user input array
function schduleCreate() {
    console.log(userInput)

    timeStamp.each(function() {
        var currentTimeBlock = $(this);
        var currentTimeHour = parseInt(currentTimeBlock.attr("time"));

        inputObj = {
            hour: currentHourBlock,
            input: ""
        }
        //push object to array for storage
        userInput.push(inputObj);
    });
    localStorage.setItem("textarea", JSON.stringify(userInput));
    
}

//save user input upon refresh
function parseSchedule(){
    userInput = localStorage.getItem("textarea");
    userInput = JSON.parse(userInput);
}


function timeBlocks() {
    timeStamp.each(function() {
        var currentTimeBlock = $(this);
        var currentTimeHour = parseInt(currentTimeBlock.attr("time"));
        var hourStamp = moment().format("h");

        if (currentTimeHour === hourStamp) {
            currentTimeBlock.addClass("present").removeClass("past future")
        } else if (currentTimeHour < hourStamp) {
            currentTimeBlock.addClass("past").removeClass("present future")
        } else if (currentTimeHour > hourStamp) {
            currentTimeBlock.addClass("future").removeClass("past present")
        }
        console.log(currentTimeHour)
    });
}

function saveEvent(){
    var currentTimeBlock = $(this).parent();
  
    var parseHour = currentTimeBlock.attr("time");
    var userText = currentTimeBlock.children("textarea").val();
  
    for (var i = 0; i < userInput.length; i++){
      if (userInput[i].hour == parseHour){
        userInput[i].text = userText;
      }
    }
    localStorage.setItem("textarea", JSON.stringify(userInput));

  }

  $(document).ready(function() {
      timeBlocks();
    });


            // submitting user input via button click
$(".saveBtn").on("click", function(){
// takes user input value from "text-input" container
    var saveText = $("textarea").val();
// places user value into local storage
    localStorage.setItem("textarea", JSON.stringify(saveText));
// retireves user value into console log (FOR TESTING PURPOSES)
    var retrieve = localStorage.getItem("textarea", JSON.stringify(saveText));
    console.log(retrieve)
});
console.log(hourStamp)

