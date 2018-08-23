


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
  	trigger: "hover click"

  });
  $( "img" ).hover(
  function() {
    $( this ).addClass("animated bounce delay-2s");
  }, function() {
    $( this ).removeClass( "animated bounce delay-2s");
  }
);
 
});