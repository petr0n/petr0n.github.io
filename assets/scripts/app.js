// app.js

$(window).scroll(function(e){
    parallax();
    // getTriangleOffset();
});
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.shapes').css('top',-(scrolled*0.99)+'px');
}
const sticky = function(){
    let header = $('header');
    let top = header.offset().top + 5;

    $(window).scroll(function (event) {
        var y = $(this).scrollTop();
        if (y > top)
            header.addClass('sticky');
        else
            header.removeClass('sticky');
    });
}
sticky();