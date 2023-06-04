import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
  selectChosenPostOfficeBranch,
  selectPostOffice,
} from "../../../../../store/slices/postOffice.slice";

const ScheduleList = () => {
  const postOffice = useSelector(selectPostOffice);
  const branch = useSelector(selectChosenPostOfficeBranch);
  const [schedule, setSchedule] = useState([
    { day: "Monday", workHours: "9:00 - 18:00" },
    { day: "Tuesday", workHours: "9:00 - 18:00" },
    { day: "Wednesday", workHours: "9:00 - 18:00" },
    { day: "Thursday", workHours: "9:00 - 18:00" },
    { day: "Friday", workHours: "9:00 - 18:00" },
    { day: "Saturday", workHours: "9:00 - 18:00" },
    { day: "Sunday", workHours: "9:00 - 17:00" },
  ]);

  useEffect(() => {
    if (Object.keys(branch) > 0) {
      if (postOffice === "novaPoshta") {
        setSchedule([
          { day: "Monday", workHours: branch.Schedule.Monday },
          { day: "Tuesday", workHours: branch.Schedule.Tuesday },
          { day: "Wednesday", workHours: branch.Schedule.Wednesday },
          { day: "Thursday", workHours: branch.Schedule.Thursday },
          { day: "Friday", workHours: branch.Schedule.Friday },
          { day: "Saturday", workHours: branch.Schedule.Saturday },
          { day: "Sunday", workHours: branch.Schedule.Sunday },
        ]);
      }
      if (postOffice === "meestExpress") {
        setSchedule([
          { day: "Monday", workHours: "9:00 - 18:00" },
          { day: "Tuesday", workHours: "9:00 - 18:00" },
          { day: "Wednesday", workHours: "9:00 - 18:00" },
          { day: "Thursday", workHours: "9:00 - 18:00" },
          { day: "Friday", workHours: "9:00 - 18:00" },
          { day: "Saturday", workHours: "9:00 - 18:00" },
          { day: "Sunday", workHours: "9:00 - 17:00" },
        ]);
      }
    }
  }, [branch, postOffice]);
  return (
    <Box sx={{ fontSize: "12px", margin: "15px 0" }}>
      {!!branch &&
        schedule.length > 0 &&
        schedule.map((day) => (
          <Box key={day.day}>
            <span>{day.day}:</span> <span>{day.workHours}</span>
          </Box>
        ))}
    </Box>
  );
};

export default ScheduleList;
