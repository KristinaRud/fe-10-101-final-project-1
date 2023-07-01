import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect } from "react";
import IconAdd from "../IconAdd/IconAdd";
import CompleteSetItem from "./CompleteSetItem";

const CompleteSetField = ({
  completeSet,
  setCompleteSet,
  setFieldValue,
  products,
  category,
}) => {
  useEffect(() => {
    setFieldValue("completeSet", completeSet);
  }, [completeSet, setFieldValue]);

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Typography variant={"body2"}>Complete Set: *</Typography>
      {completeSet.map((item, index) => (
        <CompleteSetItem
          products={products}
          category={category}
          setCompleteSet={setCompleteSet}
          index={index}
          item={item}
          /* eslint-disable-next-line react/no-array-index-key */
          key={`${index}`}
        />
      ))}
      <IconAdd onClick={() => setCompleteSet((prev) => [...prev, ""])} />
    </Box>
  );
};

CompleteSetField.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  category: PropTypes.string.isRequired,
  completeSet: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCompleteSet: PropTypes.func.isRequired,
};
export default CompleteSetField;
