import { useSelector } from "react-redux";
import { Box, CircularProgress } from "@mui/material";
import NewsSlider from "../../components/Sliders/NewsSlider/NewsSlider";
import NewProductsSlider from "../../components/Sliders/NewProductsSlider/NewProductsSlider";
import CommentsSlider from "../../components/Sliders/CommentsSlider/CommentsSlider";
import CategoriesProducts from "../../components/CategoriesProducts/CategoriesProducts";
import FollowUs from "../../components/FollowUs/FollowUs";
import { selectProducts } from "../../store/selectors/products.selector";

const HomePage = () => {
  const { isLoading } = useSelector(selectProducts);

  return (
    <>
      <NewsSlider />
      {isLoading ? (
        <Box sx={{ margin: "40px" }} display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        <>
          <NewProductsSlider />
          <CategoriesProducts />
        </>
      )}
      <FollowUs />
      <CommentsSlider />
    </>
  );
};

export default HomePage;
