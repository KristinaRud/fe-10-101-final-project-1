import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./NewsSlider.module.scss";
import "./NewsSlider.scss";
import newsData from "./NewsSliderConfig";
import { NewsConfig } from "../slidersConfig";

const NewsSlider = () => {
  return (
    <div className={styles.news_slider}>
      <Slider {...NewsConfig}>
        {newsData.map((news) => (
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
