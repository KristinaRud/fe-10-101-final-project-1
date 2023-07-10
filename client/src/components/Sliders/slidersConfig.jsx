export const AboutProductConfig = {
  dots: true,
  dotsClass: "slick-dots slick-left",
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 860,
      settings: {
        dots: false,
        arrows: true,
      },
    },
  ],
};

export const CommentsConfig = {
  dots: true,
  dotsClass: "slick-dots slick-right",
  arrows: false,
  infinite: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  autoplay: true,
};

export const NewProductsConfig = {
  dots: false,
  variableWidth: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  swipeToSlide: true,
  lazyLoad: false,
  responsive: [
    {
      breakpoint: 1410,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1175,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 940,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 705,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

export const NewsConfig = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  lazyLoad: true,
  speed: 500,
};

export const CategoriesProducts = {
  dots: false,
  variableWidth: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  speed: 500,
  swipeToSlide: true,
  lazyLoad: true,
  responsive: [
    {
      breakpoint: 1380,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 710,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export const FollowUsConfig = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  swipeToSlide: true,
  lazyLoad: true,
  centerMode: true,
  centerPadding: "15px",
  responsive: [
    {
      breakpoint: 1175,
      settings: {
        slidesToShow: 5,
        centerPadding: "10px",
      },
    },
    {
      breakpoint: 940,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
};
