import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useDispatch } from "react-redux";
import JoinFullIcon from "@mui/icons-material/JoinFull";
import JoinInnerIcon from "@mui/icons-material/JoinInner";
import { useEffect, useState } from "react";
import { setShowDifference } from "../../../store/slices/comparison.slice";

const ComparisonToggleBtn = () => {
  const [alignment, setAlignment] = useState("all");
  const dispatch = useDispatch();
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  useEffect(() => {
    if (alignment === "all") {
      dispatch(setShowDifference(false));
    }
    if (alignment === "difference") {
      dispatch(setShowDifference(true));
    }
  }, [alignment, dispatch]);

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="all">
        <JoinFullIcon sx={{ marginRight: "5px" }} />
        All parameters
      </ToggleButton>
      <ToggleButton value="difference">
        <JoinInnerIcon sx={{ marginRight: "5px" }} /> Just difference
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ComparisonToggleBtn;
