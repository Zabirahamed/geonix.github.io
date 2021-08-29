$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > 100) {
        $(".main-header").addClass("fixed-header");
        $(".main-header").removeClass("container");
    }else {
        $(".main-header").removeClass("fixed-header");
        $(".main-header").addClass("container");
    }
});