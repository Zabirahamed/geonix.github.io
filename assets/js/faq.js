$(document).ready(function() {
    $("#faq-answer-2").hide(); // Hide Answer 2
    $("#faq-answer-3").hide(); // Hide Answer 3
    $("#faq-answer-4").hide(); // Hide Answer 4

    $("#faq-question-1").click(function() {
        $("#faq-answer-1").slideToggle();
        $("#faq-answer-2").slideUp(); //Slide Up Answer Box
        $("#faq-answer-3").slideUp(); //Slide Up Answer Box
        $("#faq-answer-4").slideUp(); //Slide Up Answer Box
    });
    $("#faq-question-2").click(function() {
        $("#faq-answer-2").slideToggle();
        $("#faq-answer-1").slideUp(); //Slide Up Answer Box
        $("#faq-answer-3").slideUp(); //Slide Up Answer Box
        $("#faq-answer-4").slideUp(); //Slide Up Answer Box
    });
    $("#faq-question-3").click(function() {
        $("#faq-answer-3").slideToggle();
        $("#faq-answer-1").slideUp(); //Slide Up Answer Box
        $("#faq-answer-2").slideUp(); //Slide Up Answer Box
        $("#faq-answer-4").slideUp(); //Slide Up Answer Box
    });
    $("#faq-question-4").click(function() {
        $("#faq-answer-4").slideToggle();
        $("#faq-answer-1").slideUp(); //Slide Up Answer Box
        $("#faq-answer-2").slideUp(); //Slide Up Answer Box
        $("#faq-answer-3").slideUp(); //Slide Up Answer Box
    });

});