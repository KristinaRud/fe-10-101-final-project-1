import { Tab, Tabs } from "@mui/material";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectComparison } from "../../../store/selectors/comparison.selector";

const ComparisonTabs = ({ activeTab, setActiveTab }) => {
  const { comparison } = useSelector(selectComparison);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Tabs
      value={activeTab || 0}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      aria-label="scrollable"
    >
      {Object.keys(comparison).length > 0 &&
        Object.keys(comparison.products).map((item) => (
          <Tab
            key={item}
            label={item}
            sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}
          />
        ))}
    </Tabs>
  );
};

ComparisonTabs.propTypes = {
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default ComparisonTabs;
