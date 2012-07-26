$(window).load(function() {

    $('.flexslider').flexslider();

// Create the dropdown base
    $("<select />").appendTo("nav#main-nav");

    // Create default option "Go to..."
    $("<option />", {
        "selected": "selected",
        "value"   : "",
        "text"    : "Go to..."
    }).appendTo("nav select");

    // Populate dropdown with menu items
    $("nav#main-nav a").each(function() {
        var el = $(this);

        $("<option />", {
            "class"	: "menu",
            "value"   : el.attr("href"),
            "text"    : el.text()
        }).appendTo("nav select");
    });

    // To make dropdown actually work
    // To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
    $("nav#main-nav select").change(function() {
        window.location = $(this).find("option:selected").val();
    });







    $("li img").hover(function() {
            $(this).stop().animate({opacity: "0.8"}, 'slow');
        },
        function() {
            $(this).stop().animate({opacity: "1"}, 'slow');
        });

    $("#logo a").hover(function() {
            $(this).stop().animate({opacity: "0.8"}, 'slow');
        },
        function() {
            $(this).stop().animate({opacity: "1"}, 'slow');
        });


    $('#main-nav').visualNav({
        // target the .menu class in the menu
        link : 'a.menu'
    });

    $('.work-slide').flexslider({
        animation: "slide",
        slideshow: false

    });

    $("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});


    $('a.tip').tipsy({fade: true, gravity: 's'});

    var $container = $('#works-container');

    $container.isotope({
        itemSelector : '.element'
    });

    var $optionSets = $('#options .option-set'),
        $optionLinks = $optionSets.find('a');

    $optionLinks.click(function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
            return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');

        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
            // changes in layout modes need extra logic
            changeLayoutMode( $this, options )
        } else {
            // otherwise, apply new options
            $container.isotope( options );
        }

        return false;
    });



}); // END  of $(function(){



// set the the fade in and out of images
function imageHoverFade(){

    $('#list li a img').animate({'opacity' : 1}).hover(function() {
        $(this).animate({'opacity' : .2});
    }, function() {
        $(this).animate({'opacity' : 1});
    });
}

$(document).ready(function() {
    $('.flexslider').flexslider({
        animation: "fade",
        //Select your animation type (fade/slide)
        slideshowSpeed: 3000,
        //Set the speed of the slideshow cycling, in milliseconds
        animationDuration: 600,
        //Set the speed of animations, in milliseconds
        slideshow: true,
        //Should the slider animate automatically by default? (true/false)
        directionNav: false,
        //Create navigation for previous/next navigation? (true/false)
        controlNav: true,
        //Create navigation for paging control of each clide? (true/false)
        keyboardNav: true,
        //Allow for keyboard navigation using left/right keys (true/false)
        touchSwipe: true,
        //Touch swipe gestures for left/right slide navigation (true/false)
        prevText: "",
        //Set the text for the "previous" directionNav item
        nextText: "",
        //Set the text for the "next" directionNav item
        pausePlay: false,
        //Create pause/play dynamic element (true/false)
        pauseText: "",
        //Set the text for the "pause" pausePlay item
        playText: "",
        //Set the text for the "play" pausePlay item
        randomize: false,
        //Randomize slide order on page load? (true/false)
        slideToStart: 0,
        //The slide that the slider should start on. Array notation (0 = first slide)
        animationLoop: true,
        //Should the animation loop? If false, directionNav will received disabled classes when at either end (true/false)
        pauseOnAction: false,
        //Pause the slideshow when interacting with control elements, highly recommended. (true/false)
        pauseOnHover: true
        //Pause the slideshow when hovering over slider, then resume when no longer hovering (true/false)
    });
});





