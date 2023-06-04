import {
  CardContent,
  ListItem,
  Typography,
  Card,
  CardMedia,
} from "@mui/material";
import PropTypes from "prop-types";
import s from "./FollowUsItem.module.scss";

const FollowUsItem = ({ img, text, date }) => {
  return (
    <ListItem sx={{ maxWidth: "235px" }}>
      <Card>
        <CardMedia component="img" height="150" image={img} alt="article" />
        <CardContent>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            fontSize="12px"
            textAlight="center"
            className={s.text}
          >
            {text}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontSize="10px"
            textAlight="center"
          >
            {date}
          </Typography>
        </CardContent>
      </Card>
    </ListItem>
  );
};

FollowUsItem.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default FollowUsItem;
