import { Grid, Pagination, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  selectProducts,
  selectProductsView,
} from "../../../store/slices/products.slice";
import { fetchProducts } from "../../../store/actionCreator/products.actionCreator";
import ProductCard from "../../ProductCard/ProductCard";
import ProductCardFull from "../../ProductCard/ProductCardFull/ProductCardFull";

const ProductsListView = () => {
  const products = useSelector(selectProducts);
  const iconView = useSelector(selectProductsView);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const [page, setPage] = useState(1);
  const [countPages, setCountPages] = useState(1);
  const perPage = searchParams.get("perPage");

  const handleChange = (event, value) => {
    setPage(value);
    searchParams.set("startPage", value);
    navigate(`?${searchParams.toString()}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = params.get("startPage");
    setPage(Number(page));
    dispatch(fetchProducts(`?${params.toString()}`));
  }, [location.search, dispatch]);

  useEffect(() => {
    if (Object.keys(products).length > 0) {
      const allPages = Math.ceil(products.productsQuantity / perPage);
      setCountPages(allPages);
    }
  }, [dispatch, location.search, perPage, products]);

  return (
    <>
      <Grid container spacing={2} justifyContent="center" mb={2} mt={2}>
        {Object.keys(products).length > 0 &&
          products.products.map((product) => {
            const {
              itemNo,
              imageUrls,
              previousPrice,
              name,
              quantity,
              rating,
              shortDescription,
              currentPrice,
            } = product;
            if (iconView === "list") {
              return (
                <Grid key={itemNo} item xs={12}>
                  <ProductCardFull
                    image={imageUrls[0]}
                    oldPrice={previousPrice}
                    alt={name}
                    available={quantity > 5}
                    rating={rating}
                    description={shortDescription.join(" ")}
                    currentPrice={currentPrice}
                    name={name}
                  />
                </Grid>
              );
            }
            return (
              <Grid key={itemNo} item lg={3}>
                <ProductCard
                  image={imageUrls[0]}
                  oldPrice={previousPrice}
                  alt={name}
                  available={quantity > 5}
                  rating={rating}
                  currentPrice={currentPrice}
                  description={name}
                  title=""
                />
              </Grid>
            );
          })}
      </Grid>
      {Object.keys(products).length > 0 &&
        products.productsQuantity > perPage && (
          <Stack spacing={2} m="30px 0" alignItems="center">
            <Pagination
              count={countPages}
              variant="outlined"
              color="primary"
              page={page}
              onChange={handleChange}
            />
          </Stack>
        )}
    </>
  );
};

export default ProductsListView;
