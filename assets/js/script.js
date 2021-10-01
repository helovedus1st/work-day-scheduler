$(document).ready(function() {

// set a global variable for what the current hour is
var currentHr = moment().hours();

// grab the current date and time (refreshes every second) and display it in the hero div
function dateTime() {
    now = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').text(now);
    setTimeout(function () {dateTime(); }, 1000);
}
dateTime()


// load and display any existing calendar data from local storage
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
$("#18 .description").val(localStorage.getItem("18"));


// grab todo entries and corresponding time and send to local staorage when save button is clicked
$('.saveBtn').on('click', function () {
    var todoText = $(this).siblings('.description').val();
    var todoTime = $(this).parent().attr('id');
    localStorage.setItem(todoTime, todoText);
})

// colorize all the rows based on the relationship to the current hour
function colorTime() {
    // grab the row's time id to compare
    $('.time-block').each(function () {
        var calendarTime = $(this).attr('id');

        // wipe out previous css style if no longer applies, then add the correct style
        if (calendarTime < currentHr) {
            $(this).removeClass('future');
            $(this).removeClass('present');
            $(this).addClass('past');
        }
        else if (calendarTime == currentHr) {
            $(this).removeClass('future');
            $(this).removeClass('past');
            $(this).addClass('present');
        }
        else {
            $(this).removeClass('present');
            $(this).removeClass('past');
            $(this).addClass('future');
        }
    })
}
colorTime()
});