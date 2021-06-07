$(document).ready(function () {
  // !Navbar Shrink
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").removeClass("navbar-shrink");
    }
  });

  // !Video Popup
  const videoSrc = $("#player-1").attr("src");
  $(".video-play-btn, .video-popup").on("click", function () {
    if ($(".video-popup").hasClass("open")) {
      $(".video-popup").removeClass("open");
      $("#player-1").attr("src", "");
    } else {
      $(".video-popup").addClass("open");
      if ($("#player-1").attr("src") == "") {
        $("#player-1").attr("src", videoSrc);
      }
    }
  });

  // !Features Carousel
  $(".features-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
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

  // !Screenshots Carousel
  $(".screenshots-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  // !Testimonials Carousel
  $(".testimonials-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
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

  // !Team Carousel
  $('.team-carousel').owlCarousel({
    loop: true,
    margin: 0,
    // autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      }
    }
  });

  // Page Scrolling - ScrollIt
  $.scrollIt({
    topOffset: -50
  });

  // Navbar Collapse
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Toogle Theme Start - light and dark mode
  function toggleTheme() {
    if (localStorage.getItem("masruf-theme") !== null) {
      if (localStorage.getItem("masruf-theme") === "dark") {
        $("body").addClass("dark");
      }
      else{
        $("body").removeClass("dark");
      }
    }
    updateIcon();
  }
  toggleTheme();

  $(".toogle-theme").on("click",function(){
    $("body").toggleClas("dark");
    if ($("body").hasClass("dark")){
      localStorage.setItem("masruf-theme","dark");
    }
    else{
      localStorage.setItem("masruf-theme","light");
    }
  });

  function updateIcon() {
    if ($("body").hasClass("dark")) {
      $(".toogle-theme i").removeClass("fa-moon");
      $(".toogle-theme i").addClass("fa-sun");
    }
    else {
      $(".toogle-theme i").removeClass("fa-sun");
      $(".toogle-theme i").addClass("fa-moon");
    }
  }

});
