import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import s from "./ListWrapper.module.scss";

const ListWrapper = ({ title, children }) => {
  return (
    <Box className={s.list}>
      <Typography variant="h6" component="h5" fontWeight={700} fontSize={16}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

ListWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default ListWrapper;
