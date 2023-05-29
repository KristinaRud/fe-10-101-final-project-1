import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import newsImg from "../../../assets/images/sliders/news.png";
import styles from "./NewsSlider.module.scss";
import "./NewsSlider.scss";

const data = [
  { alt: "News", id: "1", img_url: newsImg },
  { alt: "News", id: "2", img_url: newsImg },
  { alt: "News", id: "3", img_url: newsImg },
  { alt: "News", id: "4", img_url: newsImg },
  { alt: "News", id: "5", img_url: newsImg },
];

const NewsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    // adaptiveHeight: true,
    // nextArrow: <CustomNextArrow />,
    // prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className={styles.news_slider}>
      <Slider {...settings}>
        {data.map((news) => (
          <div key={news.id}>
            <div>
              <img src={news.img_url} alt={news.alt} width="100%" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsSlider;
