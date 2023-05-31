import Slider from "react-slick";
import styles from "./AboutProductSlider.module.scss";
import "./AboutProduct.scss";
import aboutData from "./AboutProductSliderConfig";
import { AboutProductConfig } from "../slidersConfig";

const AboutProductSlider = () => {
  return (
    <div className={styles.about_slider}>
      <Slider {...AboutProductConfig}>
        {aboutData.map((item) => (
          <div key={item.id}>
            <div className={styles.about_container}>
              <img
                className={styles.about_image}
                src={item.img_url}
                alt={item.alt}
              />
              <div className={styles.about_content}>
                <div className={styles.about_title}>{item.header}</div>
                <div className={styles.about_text}>{item.text}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AboutProductSlider;
