const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Mar 20, 2020 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)

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


/*    $("#button").click(function(){
  if(toggeled == true){
    $("#icon3").animate({left: '0px'});
    toggeled = false;
  }else{
    $("#icon3").animate({left: '210px'});
    toggeled = true;
  
  }     
}); */

$(".slide-toggle").click(function(){
  $(".scheduel2").hide

});




});
      });
