import { useState } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./Accordion.module.scss";

const Accordion = ({ title, details }) => {
  const [isAccordion, setAccordion] = useState(false);

  return (
    <div className={styles.item}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        className={cx(isAccordion && styles.active, styles.header)}
        onClick={() => {
          setAccordion((prev) => !prev);
        }}
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
