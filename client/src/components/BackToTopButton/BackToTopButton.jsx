import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { useState, useEffect } from "react";
import styles from "./BackToTopButton.module.scss";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {backToTopButton && (
        <KeyboardDoubleArrowUpIcon
          onClick={scrollUp}
          className={styles.button}
        />
      )}
    </>
  );
};

export default BackToTopButton;
