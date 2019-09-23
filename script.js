$( document ).ready(function() {
    
    $(".phone_number").mask("+7(999)999-99-99");
    
    
       $('#pop-up, #pop-up2').click(function() {
      $('#modal-window').addClass('active');
   });      
    
   $('.modal-close').click(function() {
      $(this).parent().removeClass('active');
   });
    
        

$( "input" ).on( "click", function() {
    

    if ($( "input:checked" ).val() == 'bank1') {

         $("#park").show();
         $("#equip").hide();
         $('.carpark_blog').css('height', '975px');
    }
    
    if ($( "input:checked" ).val() == 'bank2') {

          $("#park").hide();
        $("#equip").show();
        $('.carpark_blog').css('height', '625px');

    }    
    
    
});

}); 
$(function() {
    // All Variable =======================================================================
    var body        = $('body'),
        slider      = $(".slider"),
        sliderUl    = slider.find("ul"),
        sliderUlLi  = sliderUl.find("li"),
        sliderOl    = slider.find("ol"),
        sliderOlLi  = sliderOl.find("li"),
        controlFa   = $(".control .fa"),
        sliderTime  = 900,
        sliderWait  = 4000,
        clickHere   = "yes click",
        autoPlay;

    // All Functions =====================================================================
    sliderUl.append("<li>" + sliderUlLi.first().html() + "</li>");
    sliderUl.prepend("<li>" + sliderUlLi.last().html() + "</li>");
    
    function runSlider() {
        if (clickHere === "yes click") {
            clickHere = "no click";
            sliderUl.animate({
                marginLeft: -sliderUlLi.width() * ($(".slider .active").index() + 1)
            }, sliderTime, function () { clickHere = "yes click"; });
        }
    }
    function addActive(param) {
        if (clickHere === "yes click") {
            param.addClass("active").siblings("li").removeClass("active");
        }
    }

    // Click Point =======================================================================
    sliderOlLi.on("click", function() {
        addActive($(this));
        runSlider();
    });

    // Click Arrow Left
    controlFa.first().on("click", function() {
        if ($(".slider .active").is(":first-of-type")) {
            addActive(sliderOlLi.last());
            if (clickHere === "yes click") {
                clickHere = "no click";
                sliderUl.animate({
                    marginLeft: "+=" + sliderUlLi.first().width()
                }, sliderTime, function() {
                    sliderUl.css( "margin-left", -sliderUlLi.width() * ($(".slider .active").index() + 1));
                    clickHere = "yes click";
                });
            }
        } else {
            addActive($(".slider .active").prev("li"));
            runSlider();
        }
    });

    // Click Arrow Right
    controlFa.last().on("click", function() {
        if ($(".slider .active").is(":last-of-type")) {
            addActive(sliderOlLi.first());
            if (clickHere === "yes click") {
                clickHere = "no click";
                sliderUl.animate({
                    marginLeft: "-=" + sliderUlLi.first().width()
                }, sliderTime, function() { 
                    sliderUl.css("margin-left", -sliderUlLi.width() * ($(".slider .active").index() + 1));
                    clickHere = "yes click";
                });
            }
        } else {
            addActive($(".slider .active").next("li"));
            runSlider();
        }
    });
                
    // Start Set =======================================================================
    sliderOlLi.first().click();
    
   

    // Auto Run Slider ==============================================================
    function autoRunSlider() {
        if (body.css('direction') === 'ltr') {
            autoPlay = setInterval(function() { controlFa.last().click(); }, sliderWait);
        } else if (body.css('direction') === 'rtl') {
            autoPlay = setInterval(function() { controlFa.first().click(); }, sliderWait);
        }
    }
    autoRunSlider();
    
    // When Hover fa ==============================================================
    slider.find('.fa').on('mouseenter', function() { clearInterval(autoPlay); });
    slider.find('.fa').on('mouseleave', function() { autoRunSlider(); });
});



