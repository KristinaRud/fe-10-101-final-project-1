import { List, Typography, Box } from "@mui/material";
import { articles } from "./data";
import FollowUsItem from "./FollowUsItem/FollowUsItem";
import s from "./FollowUsItem/FollowUsItem.module.scss";

const FollowUs = () => {
  return (
    <Box className={s.wrapper}>
      <Typography
        variant="h5"
        fontSize="22px"
        fontWeight={600}
        padding="0 20px"
      >
        Follow us on Instagram for News, Offers & More
      </Typography>
      <List sx={{ display: "flex", flexWrap: "wrap" }}>
        {articles.map((article) => (
          <FollowUsItem key={article.img} {...article} />
        ))}
      </List>
    </Box>
  );
};

export default FollowUs;
