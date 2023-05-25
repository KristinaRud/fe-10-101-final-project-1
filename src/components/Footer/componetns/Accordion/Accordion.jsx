import { useState } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./Accordion.module.scss";

const Accordion = ({ title, details }) => {
  const [isAccordion, setAccordion] = useState(false);
  const toggleAccordion = () => {
    setAccordion((prev) => !prev);
  };
  return (
    <div className={styles.item}>
      {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <div
        role="button"
        tabIndex={0}
        className={cx(isAccordion && styles.active, styles.header)}
        onClick={toggleAccordion}
      >
        {title}
      </div>
      <div className={cx(styles.summary, isAccordion && styles.active)}>
        {details}
      </div>
    </div>
  );
};

export default Accordion;

Accordion.propTypes = {
  title: PropTypes.element.isRequired,
  details: PropTypes.element.isRequired,
};
