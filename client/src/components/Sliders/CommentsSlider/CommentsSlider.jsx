import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchComments } from "../../../store/actionCreator/comments.actionCreator";
import { selectComments } from "../../../store/selectors/comments.selector";
import "./CommentsSlider.scss";
import { CommentsConfig } from "../slidersConfig";
import styles from "./CommentsSlider.module.scss";

const CommentsSlider = () => {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <div className={styles.comments_container}>
      <div className={styles.comments_slider}>
        <div className={styles.comments_inner}>
          <Slider {...CommentsConfig}>
            {comments.map((item) => (
              <div key={item._id}>
                <div className={styles.text_comment}>{item.content}</div>
                <div className={styles.text_author}>
                  - {item.customer.firstName} {item.customer.lastName}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CommentsSlider;
