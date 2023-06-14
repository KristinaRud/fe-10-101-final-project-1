import { Typography, Box } from "@mui/material";
import Slider from "react-slick";
import { articles } from "./data";
import FollowUsItem from "./FollowUsItem/FollowUsItem";
import s from "./FollowUsItem/FollowUsItem.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FollowUsConfig } from "../Sliders/slidersConfig";

const FollowUs = () => {
  return (
    <Box className={s.wrapper}>
      <Typography
        variant="h5"
        fontSize="22px"
        fontWeight={600}
        padding="0 20px 20px"
      >
        Follow us on Instagram for News, Offers & More
      </Typography>
      <Slider {...FollowUsConfig}>
        {articles.map((article) => (
          <FollowUsItem key={article.img} {...article} />
        ))}
      </Slider>
    </Box>
  );
};

export default FollowUs;
