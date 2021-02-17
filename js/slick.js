
 $('.myslider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  adaptiveWidth: true,
  asNavFor: '.myslider2',
});
$('.myslider2').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.myslider',
  arrows: false,
  vertical: true,
  adaptiveWidth: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: false,
      }
    }
  ]
});
