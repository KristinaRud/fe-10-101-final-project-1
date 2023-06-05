import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  selectChosenPostOfficeBranch,
  selectPostOffice,
  selectPostOffices,
} from "../../../../store/selectors/postOffice.selector";
import ScheduleList from "./ScheduleList/ScheduleList";
import Map from "../../../Map/Map";

const PostOfficeDetails = () => {
  const branch = useSelector(selectChosenPostOfficeBranch);
  const postOffice = useSelector(selectPostOffice);
  const postOffices = useSelector(selectPostOffices);
  const [centerMarker, setCenterMarker] = useState({});
  const [markers, setMarkers] = useState([]);
  const [logo, setLogo] = useState("");

  useEffect(() => {
    if (branch) {
      if (postOffice === "novaPoshta") {
        setCenterMarker({
          lat: Number(branch.Latitude),
          lng: Number(branch.Longitude),
        });
      }
      if (postOffice === "meestExpress") {
        setCenterMarker({
          lat: Number(branch.lat),
          lng: Number(branch.lng),
        });
      }
    }
  }, [branch, postOffice]);

  useEffect(() => {
    if (postOffices.length > 0 && !!branch) {
      let data = [];
      if (postOffice === "novaPoshta") {
        data = postOffices.map((office) => ({
          lat: Number(office.Latitude),
          lng: Number(office.Longitude),
          info: `${office.CategoryOfWarehouse} No.${office.Number}`,
        }));
      }
      if (postOffice === "meestExpress") {
        data = postOffices.map((office) => ({
          lat: Number(office.lat),
          lng: Number(office.lng),
          info: `${office.type_public.en} No.${office.num_showcase}`,
        }));
      }
      setMarkers(data);
    }
  }, [branch, postOffice, postOffices]);

  useEffect(() => {
    if (postOffice === "novaPoshta") {
      setLogo("NPlogo");
    }
    if (postOffice === "meestExpress") {
      setLogo("MElogo");
    }
  }, [postOffice]);
  return (
    <Box>
      {Object.keys(centerMarker).length > 0 &&
        !!branch &&
        markers.length > 0 && (
          <>
            <Typography variant="h6" gutterBottom mt={2} fontSize="13px">
              Post office work schedule:{" "}
            </Typography>
            <ScheduleList />
            <Map center={centerMarker} markers={markers} logo={logo} />
          </>
        )}
    </Box>
  );
};

export default PostOfficeDetails;
