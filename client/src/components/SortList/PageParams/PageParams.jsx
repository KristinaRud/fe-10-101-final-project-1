import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useSelector } from "react-redux";
import s from "./PageParams.module.scss";
import { selectProductsView } from "../../../store/slices/products.slice";
import { condition } from "../../../utils/conditionPerPage";

const PageParams = () => {
  const productsView = useSelector(selectProductsView);
  const [page, setPage] = useState(condition(productsView));
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event) => {
    const searchParams = new URLSearchParams(location.search);
    setPage(event.target.value);
    searchParams.set("startPage", "1");
    navigate(`?${searchParams.toString()}`);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("perPage", page);
    navigate(`?${searchParams.toString()}`);
  }, [location.search, navigate, page]);

  useEffect(() => {
    setPage(condition(productsView));
  }, [productsView]);

  return (
    <Box className={s.wrapper}>
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
          <MenuItem value={condition(productsView)} className={s.item}>
            {condition(productsView)} pear page
          </MenuItem>
          <MenuItem value={condition(productsView, 2)} className={s.item}>
            {condition(productsView, 2)} pear page
          </MenuItem>
          <MenuItem value={condition(productsView, 3)} className={s.item}>
            {condition(productsView, 3)} pear page
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default PageParams;
