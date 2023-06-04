import { FormControl, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import styles from "./TermsSelector.scss";

const Selector = () => {
  const [title, setTitle] = useState(1);
  const changeSelectorValue = (e) => {
    setTitle(e.target.value);
  };
  return (
    <FormControl fullWidth>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        sx={{ fontWeight: "bold" }}
        value={title}
        onChange={changeSelectorValue}
      >
        <MenuItem className={styles.menu__item} value={1}>
          Definitions & Interpretation
        </MenuItem>
        <MenuItem className={styles.menu__item} value={2}>
          General
        </MenuItem>
        <MenuItem className={styles.menu__item} value={3}>
          Quotations
        </MenuItem>
        <MenuItem className={styles.menu__item} value={4}>
          Prices / Taxes
        </MenuItem>
        <MenuItem className={styles.menu__item} value={5}>
          Terms of Payment
        </MenuItem>
        <MenuItem className={styles.menu__item} value={6}>
          Credit Accounts
        </MenuItem>
        <MenuItem className={styles.menu__item} value={7}>
          Change of Ownership
        </MenuItem>
        <MenuItem className={styles.menu__item} value={8}>
          Information on the Products supplied
        </MenuItem>
        <MenuItem className={styles.menu__item} value={9}>
          Delivery
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default Selector;
