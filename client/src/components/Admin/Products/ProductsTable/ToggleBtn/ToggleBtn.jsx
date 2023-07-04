import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useLocation, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toggleButtonGroup: {
    "& .MuiToggleButton-root.Mui-selected": {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.getContrastText(theme.palette.secondary.dark),
    },
    "& .MuiToggleButton-root": {
      borderRadius: "50px",
    },
  },
}));

const ToggleBtn = () => {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const [enabled, setEnabled] = useState(
    query.get("enabled") === "true" ? "active" : "archive",
  );

  const handleChange = (event, newAlignment) => {
    setEnabled(newAlignment);
    if (enabled !== "active") {
      query.set("enabled", "true");
      navigate(`?${query.toString()}`);
    } else {
      query.set("enabled", "false");
      navigate(`?${query.toString()}`);
    }
  };

  return (
    <ToggleButtonGroup
      sx={{ margin: "0 0 20px 8px" }}
      className={classes.toggleButtonGroup}
      value={enabled}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="active">Active Products</ToggleButton>
      <ToggleButton value="archive">Archive</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleBtn;
