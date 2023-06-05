import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
  selectChosenPostOfficeBranch,
  selectPostOffice,
} from "../../../../../store/slices/postOffice.slice";
import { scheduleData } from "./utils";

const ScheduleList = () => {
  const postOffice = useSelector(selectPostOffice);
  const branch = useSelector(selectChosenPostOfficeBranch);
  const [schedule, setSchedule] = useState(scheduleData);

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
        setSchedule(scheduleData);
      }
    }
  }, [branch, postOffice]);
  return (
    <Box sx={{ fontSize: "12px", margin: "15px 0" }}>
      {!!branch &&
        schedule.length > 0 &&
        schedule.map(({ day, workHours }) => (
          <Box key={day}>
            <span>{day}:</span> <span>{workHours}</span>
          </Box>
        ))}
    </Box>
  );
};

export default ScheduleList;
