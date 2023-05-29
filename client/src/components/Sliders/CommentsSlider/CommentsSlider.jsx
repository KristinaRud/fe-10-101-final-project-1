import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@mui/material";
import styles from "./CommentsSlider.module.scss";
import "./CommentSlider.scss";

const data = [
  {
    id: "1",
    text: "My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.",
    author: "Tama Brown",
  },
  {
    id: "2",
    text: "My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.",
    author: "John Doe",
  },
  {
    id: "3",
    text: "My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.",
    author: "Jane Doe",
  },
  {
    id: "4",
    text: "My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.",
    author: "David Brown",
  },
];

const CommentsSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className={styles.comments_slider}>
      <div className={styles.comments_inner}>
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id}>
              <div className={styles.text_comment}>{item.text}</div>
              <div className={styles.text_author}>- {item.author}</div>
            </div>
          ))}
        </Slider>
        <Button variant="outlined">Leave Us A Review</Button>
      </div>
    </div>
  );
};

export default CommentsSlider;
