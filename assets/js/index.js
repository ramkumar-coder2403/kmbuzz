// HEADER FIXED
$(window).scroll(function () {
    var sticky = $('#fixed_header'),
        scroll = $(window).scrollTop();

    // if ($(window).width() > 990) {
    if (scroll >= 80) {
        sticky.addClass('sticky');
        sticky.addClass('shadow-sm');
    }
    else {
        sticky.removeClass('sticky');
        sticky.removeClass('shadow-sm');
    }
    // } else {
    //     if (sticky.hasClass('sticky'))
    //         sticky.removeClass('sticky');
    // }
});
// HEADER FIXED END

function navagateByID(id) {
    $('html, body').animate({
        scrollTop: $("#" + id).offset().top - 170
    }, "slow");
}
