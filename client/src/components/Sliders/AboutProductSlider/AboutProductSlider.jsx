import Slider from "react-slick";
import PropTypes from "prop-types";
import styles from "./AboutProductSlider.module.scss";
import "./AboutProduct.scss";
import { AboutProductConfig } from "../slidersConfig";

const AboutProductSlider = ({ data }) => {
  return (
    <div className={styles.about_slider}>
      <Slider {...AboutProductConfig}>
        {data.map((item) => (
          <div key={item.index}>
            <div className={styles.about_container}>
              <img
                className={styles.about_image}
                src={item.image}
                alt="product"
              />
              <div className={styles.about_content}>
                <div className={styles.about_text}>{item.title}</div>
              </div>
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
