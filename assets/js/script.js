$(document).ready(function() {

var currentHr = moment().hours();
console.log(currentHr)

function dateTime() {
    now = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').text(now);
    setTimeout(function () {dateTime(); }, 1000);
}
dateTime()


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



$('.saveBtn').on('click', function () {
    var todoText = $(this).siblings('.description').val();
    var todoTime = $(this).parent().attr('id');
    console.log(todoText);
    console.log(todoTime);
    localStorage.setItem(todoTime, todoText);
})

function colorTime() {
    $('.time-block').each(function () {
    var calendarTime = $(this).attr('id');
    console.log(calendarTime)

    if (calendarTime < currentHr) {
        $(this).removeClass('future');
        $(this).removeClass('present');
        $(this).addClass('past');
        console.log('past time')
    }
    else if (calendarTime == currentHr) {
        $(this).removeClass('future');
        $(this).removeClass('past');
        $(this).addClass('present');
        console.log('current time')
        console.log(currentHr)
    }
    else {
        $(this).removeClass('present');
        $(this).removeClass('past');
        $(this).addClass('future');
        console.log('future time')

    }
    })
}
colorTime()



});