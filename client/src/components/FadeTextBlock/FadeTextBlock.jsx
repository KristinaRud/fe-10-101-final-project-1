import { useState } from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import styles from "./FadeTextBlock.module.scss";

const FadeTextBlock = ({ text, maxLength }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles["fade-text"]} ${expanded ? styles.expanded : ""}`}
      >
        {expanded ? text : text.slice(0, maxLength)}
      </div>
      {!expanded && (
        <Button className={styles["expand-button"]} onClick={handleToggle}>
          More
        </Button>
      )}
    </div>
  );
};

FadeTextBlock.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
};
export default FadeTextBlock;
