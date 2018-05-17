$(document).ready(function (){
  $(".statsPlaceholder").hide();
  $(".btn").click(function () {
    $(".statsPlaceholder").slideToggle(500); 
  });
});