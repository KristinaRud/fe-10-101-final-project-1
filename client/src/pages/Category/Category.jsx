import { Box, Container } from "@mui/material";
import LeftSidebar from "../../components/LeftSidear/LeftSidebar";
import SortList from "../../components/SortList/SortList";
import FilterTagList from "../../components/FilterTagList/FilterTagList";
import ProductsView from "../../components/ProductsView/ProductsView";
import MobileFilterAndSort from "../../components/LeftSidear/MobileSidebar/MobileFilterAndSort";
import MobileCompareProducts from "../../components/LeftSidear/MobileSidebar/MobileCompareProducts";
import BreadcrumbsApp from "../../components/BreadcrumbsApp/BreadcrumbsApp";
import TitleOfCategory from "../../components/TitleOfCategory/TitleOfCategory";

const Category = () => {
  return (
    <Box sx={{ margin: "10px auto", maxWidth: "1400px" }}>
      <BreadcrumbsApp />
      <TitleOfCategory />
      <Box sx={{ display: "flex" }}>
        <LeftSidebar />
        <Container>
          <MobileFilterAndSort />
          <SortList />
          <FilterTagList />
          <ProductsView />
          <MobileCompareProducts />
        </Container>
      </Box>
    </Box>
  );
};

export default Category;
