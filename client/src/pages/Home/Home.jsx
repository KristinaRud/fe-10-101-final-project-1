import Features from "../../components/Features/Features";
import Support from "../../components/Support/Support";
import NewsSlider from "../../components/Sliders/NewsSlider/NewsSlider";
import CommentsSlider from "../../components/Sliders/CommentsSlider/CommentsSlider";

const HomePage = () => {
  return (
    <>
      <NewsSlider />
      <Support />
      <Features />
      <CommentsSlider />
    </>
  );
};

export default HomePage;
