import Features from "../../components/Features/Features";
import Support from "../../components/Support/Support";
import NewsSlider from "../../components/Sliders/NewsSlider/NewsSlider";
import NewProductsSlider from "../../components/Sliders/NewProductsSlider/NewProductsSlider";
import CommentsSlider from "../../components/Sliders/CommentsSlider/CommentsSlider";
import CategoriesProducts from "../../components/CategoriesProducts/CategoriesProducts";

const HomePage = () => {
  return (
    <>
      <NewsSlider />
      <NewProductsSlider />
      <CategoriesProducts />
      <Support />
      <Features />
      <CommentsSlider />
    </>
  );
};

export default HomePage;
