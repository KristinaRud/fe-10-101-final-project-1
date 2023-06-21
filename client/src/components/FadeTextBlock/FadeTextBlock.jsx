import { useState } from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import styles from "./FadeTextBlock.module.scss";

const FadeTextBlock = () => {
  const [expanded, setExpanded] = useState(false);
  const text =
    "MSI has unveiled the Prestige Series line of business-class and gaming notebooks. Tuned for color accuracy, the Prestige Series also leverages True Color Technology, which allows users to adjust the display profile to best fit their computing needs.\n" +
    "\n" +
    "There are six different screen profiles, which are tuned for gaming, reducing eye fatigue, sRGB color accuracy, increasing clarity for words and lines, reducing harmful blue light, and optimizing contrast for watching movies.\n" +
    'Given the various display profiles and discrete graphics chip, the Prestige Series notebooks can be used for various design work as well as for office tasks given that the screen can be adjusted for better clarity, color accuracy, or for eye strain reduction. Users working with video or 3D rendering will appreciate the "movie mode" for which contrast is increased.\n' +
    "\n" +
    'Home users or students can benefit from the "anti-blue" and the "office mode" options, both of which are designed to reduce eye strain. This is helpful when working on the computer for extended periods of time. Additionally, in their down time, students can also use the "gamer mode" to increase the screen brightness.';

  return (
    <div className={styles.container}>
      <div
        className={`${styles["fade-text"]} ${expanded ? styles.expanded : ""}`}
      >
        <Typography component="p" fontSize={12}>
          {expanded ? text : text.slice(0, 600)}
        </Typography>
      </div>
      {!expanded && (
        <Button
          className={styles["expand-button"]}
          onClick={() => setExpanded(!expanded)}
        >
          More
        </Button>
      )}
    </div>
  );
};

export default FadeTextBlock;
