import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import { IconButton } from "@mui/material";
import PropTypes from "prop-types";

const IconAdd = ({ onClick }) => {
  return (
    <IconButton
      sx={{
        border: "2px solid #0156FF",
        borderRadius: "50%",
        height: "fit-content",
        color: "#0156FF",
        width: "fit-content",
      }}
      onClick={onClick}
    >
      <SpeedDialIcon />
    </IconButton>
  );
};

IconAdd.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default IconAdd;
