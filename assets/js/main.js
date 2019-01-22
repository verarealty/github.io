(function ($) {
    "use strict";
    $(document).on('ready', function () {

        /* Post Slider Active
        =============================*/
        $('.post-slider').owlCarousel({
            loop: true,
            responsiveClass: true,
			margin: 50,
            nav: false,
			dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                768: {
                    items: 1
                },
                1170: {
                    items: 2
                }
            }
        });
        /* testimonials Slider Active
        =============================*/
        $('.testimonials1').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
			dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1
                },
                1170: {
                    items: 1
                }
            }
        });


        /* testimonials Slider Active
        =============================*/
        $('.features').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1170: {
                    items: 3
                }
            }
        });

        /* testimonials Slider Active
        =============================*/
        $('.clients').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
            responsive: {
                0: {
                    items: 3,
                },
                768: {
                    items: 3
                },
                1170: {
                    items: 3
                }
            }
        });


        /* testimonials Slider Active
        =============================*/
        $('.related-post').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1170: {
                    items: 2
                }
            }
        });


        /* Counter-JS */
        $('.count').counterUp({
            delay: 10,
            time: 3000
        });

        $('.video-popup').magnificPopup({
            type: 'iframe',
        });
        
        /* Slick Nav Acitve */
        $('.primary-menu ul').slicknav();
        $('.slicknav_menu').prepend('<a href="index.html"><img src="assets/images/logo.png" alt=""></a>');

        /* Scroll to top */
        $.scrollUp({
            scrollText: '<i class="pe-7s-angle-up"></i>',
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade'
        });
        
        
        $('.single-service.box-1').prepend('<span class="line"></span><span class="line"></span><span class="line"></span><span class="line"></span>');
        
        /*-- Accordion-List --*/
        $('.accordion-content.in').siblings().addClass('active');
        $('.accordion').find('.accordion-title').on('click', function () {
            $('.accordion').removeClass('active');
            $(this).toggleClass('active');
            //Expand or collapse this panel
            $(this).next().slideToggle('fast');
            //Hide the other panels
            $(".accordion-content").not($(this).next()).slideUp('fast');
        });
        
        
        
        // Select all links with hashes
        $('.mainmenu-area a[href*="#"]')
          // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
          .on('click',function(event) {
            // On-page links
            if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
              && 
              location.hostname == this.hostname
            ) {
              // Figure out element to scroll to
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              // Does a scroll target exist?
              if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                  } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                  };
                });
              }
            }
          });
        
		
new WOW().init();  
      

    });
    /* Preloader Js
    ===================*/
        // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });

	
       /* ---------------------------------------------
         portfolio filtering
         --------------------------------------------- */

        var $portfolio = $('.portfolio');
        if ($.fn.imagesLoaded && $portfolio.length > 0) {
            imagesLoaded($portfolio, function () {
                $portfolio.isotope({
                    itemSelector: '.portfolio-item',
                    filter: '*'
                });
                $(window).trigger("resize");
            });
        }

        $('.portfolio-filter').on('click', 'a', function (e) {
            e.preventDefault();
            $(this).parent().addClass('active').siblings().removeClass('active');
            var filterValue = $(this).attr('data-filter');
            $portfolio.isotope({filter: filterValue});
        });


        /*---------------------------------------------
         Portfolio popup
         ---------------------------------------------*/

        $(".portfolio-gallery").each(function () {
            $(this).find(".popup-gallery").magnificPopup({
                type: "image",
                gallery: {
                    enabled: true
                }
            });
        });	


		
	//Faq area Accordion
	$('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').on( 'click',function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
	
	//Google Map
	
	function basicmap() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 10,
            scrollwheel: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(36.059806, -115.130004), // New York
            // This is where you would paste any style found on Snazzy Maps.
            styles: [
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e0efef"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#1900ff"
            },
            {
                "color": "#c0e8e8"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 700
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#7dcdcd"
            }
        ]
    }
]
        };
        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(36.059806, -115.130004),
            map: map,
            title: 'Cryptox'
        });
    }
    if ($('#map').length != 0) {
        google.maps.event.addDomListener(window, 'load', basicmap);
    }	
})(jQuery);