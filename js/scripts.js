/*
alert(2 + 2);
alert(4 * "2");
alert(8 + "2");

$(document).ready(function() {
  alert($("#id1").text());
})
*/

$(document).ready(function() {
  $("#goal-button").click(function() {
    $("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");
    $("#new-goal").val("");
  })
})
