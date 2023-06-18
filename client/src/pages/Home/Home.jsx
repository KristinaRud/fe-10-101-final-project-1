import NewsSlider from "../../components/Sliders/NewsSlider/NewsSlider";
import NewProductsSlider from "../../components/Sliders/NewProductsSlider/NewProductsSlider";
import CommentsSlider from "../../components/Sliders/CommentsSlider/CommentsSlider";
import CategoriesProducts from "../../components/CategoriesProducts/CategoriesProducts";
import FollowUs from "../../components/FollowUs/FollowUs";

const HomePage = () => {
  return (
    <>
      <NewsSlider />
      <NewProductsSlider />
      <CategoriesProducts />
      <FollowUs />
      <CommentsSlider />
    </>
  );
};

export default HomePage;
