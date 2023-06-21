import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, CircularProgress } from "@mui/material";
import { fetchNews } from "../../../store/actionCreator/news.actionCreator";
import { selectNews } from "../../../store/selectors/news.selector";
import "./NewsSlider.scss";
import { NewsConfig } from "../slidersConfig";
import styles from "./NewsSlider.module.scss";

const NewsSlider = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div className={styles.news_slider}>
      {news.length > 0 ? (
        <Slider {...NewsConfig}>
          {news.map((item) => (
            <div key={item._id}>
              <div>
                <img src={item.imageUrl} alt={item.customId} width="100%" />
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <Box sx={{ margin: "40px" }} display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

export default NewsSlider;
