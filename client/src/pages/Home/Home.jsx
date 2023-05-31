import Features from "../../components/Features/Features";
import Support from "../../components/Support/Support";
import NewsSlider from "../../components/Sliders/NewsSlider/NewsSlider";
import NewProductsSlider from "../../components/Sliders/NewProductsSlider/NewProductsSlider";
import CommentsSlider from "../../components/Sliders/CommentsSlider/CommentsSlider";

const HomePage = () => {
  return (
    <>
      <NewsSlider />
      <NewProductsSlider />
      <Support />
      <Features />
      <CommentsSlider />
    </>
  );
};

export default HomePage;
