import {
  Box,
  Divider,
  IconButton,
  List,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import styles from "../Header.module.scss";
import { fetchProductsForSearch } from "../../../store/actionCreator/products.actionCreator";
import SearchItem from "./SearchItem/SearchItem";

const Search = () => {
  const { productsForSearch, isSearchLoading } = useSelector(
    (state) => state.products,
  );
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const listRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      searchQuery: "",
    },
    onSubmit: (values) => {
      if (values.searchQuery.length > 0) {
        dispatch(fetchProductsForSearch(values.searchQuery));
      }
    },
  });

  const handleChange = (event) => {
    const { value } = event.target;
    setMenuOpen(value !== "");
    setListOpen(value !== "");
    formik.setFieldValue("searchQuery", value);
    formik.handleSubmit();
  };

  const handleClear = () => {
    formik.setFieldValue("searchQuery", "");
  };

  const handleBlur = (event) => {
    formik.setFieldValue("searchQuery", "");
    setMenuOpen(false);
    if (!listRef.current?.contains(event.relatedTarget)) {
      setListOpen(false);
    }
  };

  const handleClickItem = () => {
    setListOpen(false);
  };

  return (
    <Box
      flexGrow={1}
      sx={{ position: "relative" }}
      className={styles.searchWrapper}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          className={styles.label}
          id="searchQuery"
          name="searchQuery"
          label="Search..."
          value={formik.values.searchQuery}
          onChange={handleChange}
          onBlur={handleBlur}
          InputProps={{
            className: styles["input-search"],
            endAdornment: formik.values.searchQuery.length > 0 && (
              <IconButton onClick={handleClear} edge="end">
                <ClearIcon />
              </IconButton>
            ),
          }}
        />
        <div
          className={styles.searchSpinner}
          aria-hidden
          hidden={!isSearchLoading}
        />
      </form>
      {(menuOpen || listOpen) && (
        <div ref={listRef}>
          <List className={styles.searchList}>
            {productsForSearch?.map((product) => (
              <>
                <SearchItem
                  key={product._id}
                  id={product._id}
                  image={product.imageUrls[0]}
                  handleClickItem={handleClickItem}
                  {...product}
                />
                <Divider />
              </>
            ))}
            {productsForSearch?.length === 0 && (
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                No results found
              </Typography>
            )}
          </List>
        </div>
      )}
    </Box>
  );
};

export default Search;
