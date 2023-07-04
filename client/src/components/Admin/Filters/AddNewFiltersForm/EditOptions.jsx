import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { selectColors } from "../../../../store/selectors/colors.selector";
import { selectFilters } from "../../../../store/selectors/filters.selector";

const EditOptions = ({ setFieldValue }) => {
  const params = useParams();
  const colors = useSelector(selectColors);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    if (params?.filter && filters.filtersData.length > 0) {
      filters.filtersData.forEach((arr) => {
        arr.forEach((obj) => {
          if (obj._id === params.filter) {
            setFieldValue("name", obj.name);
            setFieldValue("type", obj.type);
          }
        });
      });
    }
    if (params?.filter && colors.length > 0) {
      colors.forEach((obj) => {
        if (obj._id === params.filter) {
          setFieldValue("name", obj.name);
          setFieldValue("type", "color");
          setFieldValue("cssValue", obj.cssValue);
        }
      });
    }
  }, [params, colors, filters, setFieldValue]);

  return <Box />;
};

EditOptions.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
};
export default EditOptions;
