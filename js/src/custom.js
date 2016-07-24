
var fade = 200;

$( "#cus-lightbulb" ).click(function() {

});

$( "#cus-map" ).click(function() {
  $(".header").fadeOut(fade);
  $(".main").addClass("clean-margin");
  $("#open-sidebar").fadeIn(fade);
});

$("#open-sidebar").click(function() {
  $(".header").fadeIn(fade);
  $("#open-sidebar").fadeOut(fade);
  $(".main").removeClass("clean-margin");
});

$('[data-toggle="tooltip"]').tipsy({gravity: 'w'});
