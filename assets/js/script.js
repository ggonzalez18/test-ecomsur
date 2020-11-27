$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        let target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 80 //no need of parseInt here
        }, 1000)
    });

    // $(function() {
    //     $('[data-toggle="tooltip"]').tooltip()
    // })

    const parallax = document.getElementById("parallax");
    window.addEventListener("scroll", function() {
        let offset = window.pageYOffset;
        parallax.style.backgroundPositionY = offset * 1.7 + "px"

    })

});