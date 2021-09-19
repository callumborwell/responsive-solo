/* JQuery
    $('selectortag').actionfunc(parameter);
        $('h1').hide(500).show(500);
        $('h1').slideUp(1000).slideDown(1000);
    
    $('#idtext' or '.classtext').css({
        cssContent
    });
    
    $('tag').click(function() {
        other JQuery
    })
    
    $(document).ready(function() {
    
    });
    OR SHORTHAND
    $(function() {
        put all js in document ready function
    });
    
    $(window).on('load', function() {
    
    });
*/

/* ===========================
        Preloader
============================== */
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});

/* ===========================
        Team
============================== */
$(function() {
    
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        
        // responsive definition by page width
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            480: {
                items: 2
            }
        }
    });
});

/* ===========================
        Progress Bars
============================== */
$(function() {
    
    $("#progress-elements").waypoint(function() {
        
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        
        this.destroy();
    }, { 
        offset: 'bottom-in-view'
    });
    
});

/* ===========================
        Responsive Tabs
============================== */
$(function() {
    
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
    
});

/* ===========================
        Portfolio Items
        - window on load to make sure images are loaded
============================== */
$(window).on('load', function () {
    
    // Initialize Isotope
    $("#isotope-container").isotope({ 
    });
    
    // Filter
    $("#isotope-filters").on('click', 'button', function() {
        
        // get filter values
        var filterValue = $(this).attr('data-filter');
        
        //filter portfolio
        $("#isotope-container").isotope({ 
            filter: filterValue
        });
        
        // active button - removing then adding
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
        
    });
});

/* ===========================
        Magnifier
============================== */
$(function() {
    
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
    });
    
});

/* ===========================
        Testimonial
============================== */
$(function() {
    
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
    });
    
});

/* ===========================
        Stats
============================== */
$(function() {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});

/* ===========================
        Clients
============================== */
$(function() {
    
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        
        // responsive definition by page width
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 6
            }
        }
    });
    
});

/* ===========================
        Google Map
============================== */
$(window).on('load', function () {
    
    // Map Variables
    var addressString = "1 Woolworths Way, Sydney, Australia";
    var myLatlng = {lat:-33.736970, lng:150.949050};
    
    // 1. Render Google Map
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: myLatlng,
    });
    
    // 2. Add Map Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
    })
    
    // 3. Info window
    var infowindow = new google.maps.InfoWindow({
        content: addressString,
    });
    // Show info window on click
    /*marker.addListener("click", () => {
        infowindow.open(map, marker);
    });*/
    
    // 4. Resize function
    google.maps.event.addDomListener(window, 'resize', function() {
        
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
        
    });
    
});

/* ===========================
        Navigation
============================== */
//  Show and hide white navigation
$(function() {
    
    // Show/hide nav on page load
    showHideNav();
    
    $(window).scroll(function() {
        
        // sho/hide on page scroll
        showHideNav();
        
    });
    
    function showHideNav () {
        
        if( $(window).scrollTop() > 50 ) {
           
            // Show white nav
            $("nav").addClass("white-nav-top");
            // SHow dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
            
            // Show back to top button
            $("#back-to-top").fadeIn();
            
        } else {
           
            // Hide white nav
            $("nav").removeClass("white-nav-top");
            // Show white logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
            
            // Hide back to top button
            $("#back-to-top").fadeOut();
            
        }
        
    }
    
});

// Smooth scrolling - class="smooth-scroll" 
$(function() {
    
    $("a.smooth-scroll").click(function(event) {
        
        event.preventDefault();
        
        // get section id like #about, #services, etc
        var section_id = $(this).attr("href");
        
        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
        
    });
    
});

/* ===========================
        Mobile Menu
============================== */
$(function() {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function() {
        
        $("#mobile-nav").css("height", "100%");
        
    });
    
    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function() {
        
        $("#mobile-nav").css("height", "0%");
        
    });
    
});


/* ===========================
        Animation
============================== */
// Animate on scroll
$(function() {

    new WOW().init();
    
});

// Apply animation after page is loaded - Home animation
$(window).on('load', function () {
    
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
    
});