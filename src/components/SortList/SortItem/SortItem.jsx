import { useEffect, useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import s from "./SortItem.module.scss";

const SortItem = () => {
  const [sort, setSort] = useState("-rating");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    navigate(`?sort=${sort}`);
  }, [sort, navigate]);

  return (
    <Box>
      <FormControl className={s.form}>
        <InputLabel id="select-sort">Sort By:</InputLabel>
        <Select
          labelId="select-sort"
          id="sort"
          value={sort}
          label="Sort By:"
          sx={{ fontSize: 13, fontWeight: 600 }}
          onChange={handleChange}
        >
          <MenuItem value="-rating" className={s.item}>
            By rating
          </MenuItem>
          <MenuItem value="-price" className={s.item}>
            From cheap to expensive
          </MenuItem>
          <MenuItem value="+price" className={s.item}>
            From expensive to cheap
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortItem;
