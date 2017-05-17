$(document).ready(function () {
  $(".click").on("click",function(){
    $(".full").toggleClass( "none" );
    $("section.menu").toggleClass( "solid" );
  });
 //////////////////////////////////      1     /////////////////////////////////////
  //Blog leer mas
  $("article:nth-child(1) .leermas").on("click",function(){
    $("article:nth-child(1) .contentmas").slideDown(1000)
    $("article:nth-child(1) .leermas").css("display","none");
    $("article:nth-child(1) .leermenos").css("display","block");
  });
  //Blog leer menos
  $("article:nth-child(1) .leermenos").on("click",function(){
    $("article:nth-child(1) .contentmas").slideUp(1000)
    $("article:nth-child(1) .leermas").css("display","block");
    $("article:nth-child(1) .leermenos").css("display","none");
  });

   //////////////////////////////////      2     /////////////////////////////////////

  //Blog leer mas
  $("article:nth-child(2) .leermas").on("click",function(){
    $("article:nth-child(2) .contentmas").slideDown(1000)
    $("article:nth-child(2) .leermas").css("display","none");
    $("article:nth-child(2) .leermenos").css("display","block");
  });
  //Blog leer menos
  $("article:nth-child(2) .leermenos").on("click",function(){
    $("article:nth-child(2) .contentmas").slideUp(1000)
    $("article:nth-child(2) .leermas").css("display","block");
    $("article:nth-child(2) .leermenos").css("display","none");
  });

});
