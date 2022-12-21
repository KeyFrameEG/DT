$(document).ready(function () {
 
    $('.owl-carouselsteps').owlCarousel({
        rtl: false,
        autoplay: true,
        loop: true,
        smartSpeed: 800,
        autoplayTimeout: 6000,
		margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                margin: 20
            },
            600: {
                items: 2,
                nav: true,
                margin: 20
            },
            1000: {
                items: 4,
                nav: true,
                loop: true,
				margin: 30
            }
        }
    })


    $('.owl-carouselpartner').owlCarousel({
        rtl: false,
        autoplay: true,
        loop: true,
        smartSpeed: 900,
        autoplayTimeout: 9000,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 6,
                nav: true,
                loop: true,
                margin: 0
            }
        }
	})


	$('.owl-carouselss').owlCarousel({
		rtl: false,
		autoplay: true,
		loop: true,
		dotsEach: true,
		smartSpeed: 500,
		autoplayTimeout: 3000,
		margin: 30,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			600: {
				items: 2,
				nav: true
			},
			1000: {
				items: 3,
				nav: true,
				loop: true,
				margin: 30
			}
		}
	})

})


