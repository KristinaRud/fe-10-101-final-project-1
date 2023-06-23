import { useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import PropTypes from "prop-types";
import s from "./Map.module.scss";
import NPicon from "../../assets/images/NPlogo.png";
import MEicon from "../../assets/images/MElogo.png";

const Map = ({ center, markers, logo }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();

  const handleMarkerClick = (id, lat, lng, info) => {
    setInfoWindowData({ id, info });
    setIsOpen(true);
  };

  return (
    <div className={s.mapWrapper}>
      {isLoaded && (
        <GoogleMap
          mapContainerClassName={s.mapWrapper}
          center={{ ...center }}
          zoom={15}
          onClick={() => setIsOpen(false)}
        >
          {markers.map(({ lat, lng, info }, index) => (
            <Marker
              key={`${lat}${lng}`}
              position={{ lat, lng }}
              icon={logo === "NPlogo" ? NPicon : MEicon}
              onClick={() => {
                handleMarkerClick(index, lat, lng, info);
              }}
            >
              {isOpen && infoWindowData?.id === index && (
                <InfoWindow
                  onCloseClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <h3>{infoWindowData.info}</h3>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
      )}
    </div>
  );
};

Map.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
      info: PropTypes.string,
    }),
  ),
  logo: PropTypes.string,
};
export default Map;
