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
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

export const NewProductsConfig = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
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
      breakpoint: 510,
      settings: {
        slidesToShow: 1,
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
  speed: 500,
};
