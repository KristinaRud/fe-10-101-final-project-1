import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import cn from "classnames";
import s from "./ListWrapper.module.scss";

const ListWrapper = ({ title, children, className }) => {
  return (
    <Box className={cn(s.list, className)}>
      <Typography
        variant="h6"
        component="h5"
        fontWeight={700}
        fontSize={16}
        className={s.title}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
};

ListWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
export default ListWrapper;
