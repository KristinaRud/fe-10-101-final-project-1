import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import s from "./MobileSidebar.module.scss";
import FilterList from "../FilterList/FilterList";
import SortItem from "../../SortList/SortItem/SortItem";

const MobileFilterAndSort = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={s["filter-wrapper"]}>
      <Button className={s.btn} onClick={handleOpen}>
        Filter
      </Button>
      {!open && <SortItem />}
      {open && (
        <div className={s["filter-modal"]}>
          <Button className={s.close} onClick={handleClose}>
            <CloseIcon />
          </Button>
          <FilterList className={s.filters} closeModal={handleClose} />
        </div>
      )}
    </div>
  );
};

export default MobileFilterAndSort;
