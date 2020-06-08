$(document).ready(function() {
    $(".nav .nav-link").on("click", function(){
        $(".nav").find(".collapse").collapse('hide');
        $(".nav").find(".active").removeClass("active");
        $(this).addClass("active");
    });
});