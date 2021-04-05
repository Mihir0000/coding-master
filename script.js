$(document).ready(function () {
    // toggle button
    $(".btn").click(function () {
        $(".nav-links").slideToggle(3000);
        $(".btn").toggleClass("change");
    });

    // transparent background
    $(window).scroll(function () {
        let position = $(window).scrollTop();

        if (position >= 100) {
            $("nav, nav-container").addClass("navBackground");
        } else {
            $("nav, nav-container").removeClass("navBackground");
        }
    });

    // smooth scrolling
    $(".nav-links a").click(function (link) {
        link.preventDefault();

        let target = $(this).attr("href");

        $("html, body")
            .stop()
            .animate(
                {
                    scrollTop: $(target).offset().top,
                },
                3000
            );
    });
    // owl team
    $(".team-center").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            },
        },
    });
    // owl customers
    $(".customers-center").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    });
});
