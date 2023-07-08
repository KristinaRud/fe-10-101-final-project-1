import { FormControl, Select, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import styles from "./TermsSelector.scss";

const Selector = () => {
  const [title, setTitle] = useState(1);

  const changeSelectorValue = (e) => {
    setTitle(e.target.value);
  };
  useEffect(() => {
    const scrollWindowToTarget = () => {
      const targetElement = document.getElementById(`section-${title}`);

      if (targetElement) {
        window.scrollTo({
          top: `${title}` * 300,
          behavior: "smooth",
        });
      }
    };
    scrollWindowToTarget();
  }, [title]);

  return (
    <FormControl fullWidth>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        sx={{ fontWeight: "bold" }}
        value={title}
        onChange={changeSelectorValue}
      >
        <MenuItem className={styles.menu__item} id="section-1" value={1}>
          Definitions & Interpretation
        </MenuItem>
        <MenuItem className={styles.menu__item} id="section-2" value={2}>
          General
        </MenuItem>
        <MenuItem className={styles.menu__item} id="section-3" value={3}>
          Quotations
        </MenuItem>
        <MenuItem className={styles.menu__item} id="section-4" value={4}>
          Prices / Taxes
        </MenuItem>
        <MenuItem className={styles.menu__item} id="section-5" value={5}>
          Terms of Payment
        </MenuItem>
        <MenuItem className={styles.menu__item} id="section-7" value={7}>
          Credit Accounts
        </MenuItem>
        <MenuItem className={styles.menu__item} id="section-8" value={8}>
          Change of Ownership
        </MenuItem>
        <MenuItem className={styles.menu__item} id="section-10" value={10}>
          Information on the Products supplied
        </MenuItem>
        <MenuItem className={styles.menu__item} id="section-11" value={11}>
          Delivery
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default Selector;
