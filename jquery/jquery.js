$(document).ready(function () {

    var menu = $('.navbar');
    var origOffsetY = menu.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.navbar').addClass('navbar-fixed-top');
        } else {
          $('.navbar').removeClass('navbar-fixed-top');
        }
    }

    document.onscroll = scroll;
});

$(document).ready(function () {
$("#a0").on("mouseover", function() {
    $(this).css("color", "#ff4da6");
}).on("mouseout", function() {
      $(this).css("color", "#f2f2f2");
});
});

$(document).ready(function () {
$("#a1").on("mouseover", function() {
    $(this).css("color", "#ff3333");
}).on("mouseout", function() {
      $(this).css("color", "#f2f2f2");
});
});

$(document).ready(function () {
$("#a2").on("mouseover", function() {
    $(this).css("color", "#5cd65c");
}).on("mouseout", function() {
      $(this).css("color", "#f2f2f2");
});
});

$(document).ready(function () {
$("#a3").on("mouseover", function() {
    $(this).css("color", "#1ad1ff");
}).on("mouseout", function() {
      $(this).css("color", "#f2f2f2");
});
});

$(document).ready(function(){
    //To switch directions up/down and left/right just place a "-" in front of the top/left attribute
    //Vertical Sliding
    $('.boxgrid.slidedown').hover(function(){
        $(this).stop().animate({top:'-260px'},{queue:false,duration:300});
    }, function() {
        $(this).stop().animate({top:'0px'},{queue:false,duration:300});
  });
  });
