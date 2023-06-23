import Slider from "react-slick";
import PropTypes from "prop-types";
import styles from "./AboutProductSlider.module.scss";
import "../slidersCustomize.scss";
import { AboutProductConfig } from "../slidersConfig";

const AboutProductSlider = ({ data }) => {
  return (
    <div className={styles.about_slider}>
      <Slider {...AboutProductConfig}>
        {data.map((item) => (
          <div key={item.title}>
            <div className={styles.about_container}>
              <div className={styles.about_content}>
                <div className={styles.about_text}>{item.title}</div>
              </div>
              <img
                className={styles.about_image}
                src={item.image}
                alt="product"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

AboutProductSlider.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default AboutProductSlider;
