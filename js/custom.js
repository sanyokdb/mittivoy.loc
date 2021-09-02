$(".main-slider").slick({
  infinite: true,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  fadeSpeed: 1000,
  responsive: [{
    breakpoint: 600,
    settings: {
      dots: false
    }
  }]
});

$(".review-slider").slick({
  infinite: true,
  dots: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
});

$(".ourstore-slider").slick({
  infinite: true,
  dots: true,
  arrows: true,
  // autoplay: true,
  // autoplaySpeed: 4000,
  slidesToShow: 3,
  slidesToScroll: 3,
  // rows: 2,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      rows: 2
    }
  }, {
    breakpoint: 409.98,
    settings: {
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 1
    }
  }]
});

// Scroll Up
$(".scrollup").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});

var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("btn-bubbly");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}
