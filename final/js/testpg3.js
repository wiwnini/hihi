$(document).ready(function () {

    $('#text').css('display', 'none');
    $('#text').fadeIn(1000);

    $('#headline').css('display', 'none');
    $('#headline').fadeIn(500);
});

 /* hamburger menu */ 
 $(document).ready(function () {

  
    $(".slide-toggle").click(function(){
      $(".hamburger").animate({
          width: "toggle"
  }); 
  });
  
 var toggeled = true;
 $("#button").click(function(){
   if(toggeled == true){
     $("#icon2").animate({left: '165px'});
     $("#icon3").animate({left: '30px'});
     toggeled = false;
   }else{
     $("#icon2").animate({left: '260px'});
     $("#icon3").animate({left: '210px'});
     toggeled = true;
   
   }     


});
});
