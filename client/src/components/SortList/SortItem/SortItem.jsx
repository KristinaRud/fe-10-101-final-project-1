import { useEffect, useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import s from "./SortItem.module.scss";

const SortItem = () => {
  const [sort, setSort] = useState("-rating");
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event) => {
    const searchParams = new URLSearchParams(location.search);
    setSort(event.target.value);
    searchParams.set("sort", event.target.value);
    searchParams.set("startPage", "1");
    navigate(`?${searchParams.toString()}`);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setSort(searchParams.get("sort"));
    navigate(`?${searchParams.toString()}`);
  }, [sort, navigate, location.search]);

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
          <MenuItem value="+currentPrice" className={s.item}>
            From cheap to expensive
          </MenuItem>
          <MenuItem value="-currentPrice" className={s.item}>
            From expensive to cheap
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortItem;
