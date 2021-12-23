//   HTML Template Name : GeoNix - Digital Business Agency Bootstrap and Html Template
//   Author : Template Coder
//   Support : templatecoder755@gmail.com
//   Author Phone / What's App : +88-01629078287
//   Description : Digital Business Agency Bootstrap and Html Template
//   Version : 1.0 

// Header Scroll Down Fixed Jquery Code
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
// Hamburger Code
function navbar() {
    if(document.getElementById("collapsibleNavbar").classList.contains("show")) {
        // if the condition is true
        $(".menu-bar-1").removeClass("menu-bar-1-active");
        $(".menu-bar-2").removeClass("menu-bar-2-active");
        $(".menu-bar-3").removeClass("menu-bar-3-active");
    }else {
        // if the condition false
        $(".menu-bar-1").addClass("menu-bar-1-active");
        $(".menu-bar-2").addClass("menu-bar-2-active");
        $(".menu-bar-3").addClass("menu-bar-3-active");
    }
}
// Scroll Top Code 
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > 100) {
        $(".btn-top").addClass("active-top-btn");
    }else {
        $(".btn-top").removeClass("active-top-btn");
    }
});

// Preeloader
function preeloader() {
    $(".preeloader").addClass("disable-preeloader");
}