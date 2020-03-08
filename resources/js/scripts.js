// JQuery Code Implementation
$(document).ready(function() {
  //Waypoints to show sticky navigation
  $(".js--section-features").waypoint({
    handler: function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky-nav");
      } else {
        $("nav").removeClass("sticky-nav");
      }
    },
    offset: "60px;"
  });

  const scrollSpeed = 1000;

  // Scroll on button clicks
  $(".js--scroll-to-plans").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".js--section-pricing").offset().top
      },
      scrollSpeed
    );
  });

  $(".js--scroll-to-start").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".js--section-features").offset().top
      },
      scrollSpeed
    );
  });

  //Navigation Button Scrolling
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            scrollSpeed,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  // Animations On Scroll
  $(".js--wp-features").waypoint({
    handler: function() {
      $(".js--wp-features").addClass("animated fadeIn");
    },
    offset: "50%;"
  });

  $(".js--wp-phone").waypoint({
    handler: function() {
      $(".js--wp-phone").addClass("animated fadeInUp");
    },
    offset: "50%;"
  });

  $(".js--wp-cities").waypoint({
    handler: function() {
      $(".js--wp-cities").addClass("animated fadeIn");
    },
    offset: "50%;"
  });

  $(".js--wp-plan").waypoint({
    handler: function() {
      $(".js--wp-plan").addClass("animated tada");
    },
    offset: "50%;"
  });

  // Mobile Navigation

  $(".js--mobile-icon").click(function(e) {
    e.preventDefault();
    const nav = $(".js--main-nav");
    const icon = $(".js--mobile-icon i");

    nav.slideToggle(200);

    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.removeClass("ion-close-round");
      icon.addClass("ion-navicon-round");
    }
  });
});
