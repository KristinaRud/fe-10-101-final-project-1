import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import s from "./PageParams.module.scss";

const PageParams = () => {
  const [page, setPage] = useState(20);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setPage(event.target.value);
  };

  useEffect(() => {
    navigate(`?perPage=${page}`);
  }, [page, navigate]);

  return (
    <Box>
      <FormControl className={s.form}>
        <InputLabel id="select-page">Show:</InputLabel>
        <Select
          labelId="select-page"
          id="page"
          value={page}
          label="Show:"
          sx={{ fontSize: 13, fontWeight: 600 }}
          onChange={handleChange}
        >
          <MenuItem value={10} className={s.item}>
            10 pear page
          </MenuItem>
          <MenuItem value={20} className={s.item}>
            20 pear page
          </MenuItem>
          <MenuItem value={30} className={s.item}>
            30 pear page
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default PageParams;
