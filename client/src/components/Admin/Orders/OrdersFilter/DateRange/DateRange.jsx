import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Button, Menu, Typography } from "@mui/material";
import { DateRangePicker } from "react-date-range";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { formatDate } from "../../../../../utils/date/formatDate";

const DateRange = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [dateRange, setDateRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    if (dateRange[0].startDate && dateRange[0].endDate) {
      query.set("startDate", formatDate(dateRange[0].startDate).split(" ")[0]);
      query.set("endDate", formatDate(dateRange[0].endDate).split(" ")[0]);
      navigate(`?${query.toString()}`);
    } else {
      query.delete("startDate");
      query.delete("endDate");
      navigate(`?${query.toString()}`);
    }
  }, [dateRange, navigate, location.search]);

  return (
    <Box>
      <Button
        variant={"outlined"}
        sx={{
          width: "160px",
          border: "2px solid #fff",
          borderRadius: "50px",
          color: "#0156FF",
          "&:hover": {
            border: "2px solid #fff",
            backgroundColor: "rgba(234,238,253,0.27)",
          },
        }}
        startIcon={<CalendarMonthIcon />}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {dateRange[0].startDate && dateRange[0].endDate ? (
          <Typography variant={"body2"} paddingTop={1}>
            {formatDate(dateRange[0].startDate).split(" ")[0]} /
            {formatDate(dateRange[0].endDate).split(" ")[0]}
          </Typography>
        ) : (
          "Select period"
        )}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <DateRangePicker
          onChange={(item) => setDateRange([item.selection])}
          showSelectionPreview
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={dateRange}
          direction="horizontal"
        />
      </Menu>
    </Box>
  );
};

export default DateRange;
