import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@mui/material";
import styles from "./CommentsSlider.module.scss";
import "./CommentsSlider.scss";
import commentsData from "./CommentsSliderConfig";
import { CommentsConfig } from "../slidersConfig";

const CommentsSlider = () => {
  return (
    <div className={styles.comments_container}>
      <div className={styles.comments_slider}>
        <div className={styles.comments_inner}>
          <Slider {...CommentsConfig}>
            {commentsData.map((item) => (
              <div key={item.id}>
                <div className={styles.text_comment}>{item.text}</div>
                <div className={styles.text_author}>- {item.author}</div>
              </div>
            ))}
          </Slider>
          <Button variant="outlined">Leave us a review</Button>
        </div>
      </div>
    </div>
  );
};

export default CommentsSlider;
