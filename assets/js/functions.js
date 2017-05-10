$(document).ready(function () {
  $(".click").on("click",function(){
    $(".full").toggleClass( "none" );
    $("section.menu").toggleClass( "solid" );
  });
});
