$(document).ready(function () {


    // By default hide everything except pic1
    $('#picture img').addClass("transparent");
    $("#pic1").removeClass("transparent"); 

    $('#text1').click(function() {
        $('#picture img').addClass("transparent");
        $('#picture img').removeClass("show");
        $("#pic1").removeClass("transparent");
        $("#pic1").addClass("show");

        $("#text1").animate({height: '90px', width: '300px'});
        $("#text1").animate({height: '75px', width: '250px'});

        $('#pic1').attr('src', '../final/pictures/page22/5minuteheroes.jpg')
        $('#pic1').hide();
        $('#pic2').hide();
        $('#pic4').hide();
        $('#pic5').hide();
        $('#pic1').show();

        // Button effect clicking
    });

    $('#text2').click(function() {
        $('#picture img').addClass("transparent");
        $('#picture img').removeClass("show");
        $("#pic2").removeClass("transparent");
        $("#pic2").addClass("show");

        $("#text2").animate({height: '100px', width: '300px'});
        $("#text2").animate({height: '75px', width: '250px'});

        $('#pic2').attr('src', '../final/pictures/page22/menherachan.png')
        $('#pic1').hide();
        $('#pic3').hide();
        $('#pic4').hide();
        $('#pic5').hide();
        $('#pic2').show();
    });

    $('#text3').click(function() {
        $('#picture img').addClass("transparent");
        $('#picture img').removeClass("show");
        $("#pic3").removeClass("transparent");
        $("#pic3").addClass("show");

        $("#text3").animate({height: '90px', width: '300px'});
        $("#text3").animate({height: '75px', width: '250px'});

        $('#pic3').attr('src', '../final/pictures/page22/crestfall.jpg')
        $('#pic2').hide();
        $('#pic3').hide();
        $('#pic5').hide();
        $('#pic4').hide();
        $('#pic3').show();
    });

    $('#text4').click(function() {
        $('#picture img').addClass("transparent");
        $('#picture img').removeClass("show");
        $("#pic4").removeClass("transparent");
        $("#pic4").addClass("show");

        $("#text4").animate({height: '90px', width: '300px'});
        $("#text4").animate({height: '75px', width: '250px'});


        $('#pic4').attr('src', '../final/pictures/page22/menherachan.png')
        $('#pic1').hide();
        $('#pic3').hide();
        $('#pic5').hide();
        $('#pic2').hide();
        $('#pic4').show();
    });

    $('#text5').click(function() {
        $('#picture img').addClass("transparent");
        $('#picture img').removeClass("show");
        $("#pic5").removeClass("transparent");
        $("#pic5").addClass("show");

        $("#text5").animate({height: '90px', width: '300px'});
        $("#text5").animate({height: '70px', width: '250px'});

        $('#pic5').attr('src', '../final/pictures/page22/bisukoezaki.jpg')
        $('#pic1').hide();
        $('#pic3').hide();
        $('#pic2').hide();
        $('#pic4').hide();
        $('#pic5').show();
    });

  /* hamburger menu */ 
  
  
    $(".slide-toggle").click(function(){
        $(".hamburger").animate({
            width: "toggle"
    }); 
    });
    
    var toggeled = 0;
    $("#button").click(function(){
     toggeled ++;
     if(toggeled == 1){
       $("#icon2").animate({left: '165px'});
       $("#icon3").animate({left: '30px'});
     }else{
       $("#icon2").animate({left: '260px'});
       $("#icon3").animate({left: '210px'});
       toggeled =0;
     
     }     

    ;


});

var box = document.querySelector(".box223");

// Detect all clicks on the document
document.addEventListener("click", function(event) {
	// If user clicks inside the element, do nothing
	if (event.target.closest(".box223")) return;

	// If user clicks outside the element, hide it!
	box.classList.add("js-is-hidden");
});

});


