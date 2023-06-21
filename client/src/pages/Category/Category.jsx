import { Box, CircularProgress, Container } from "@mui/material";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LeftSidebar from "../../components/LeftSidear/LeftSidebar";
import SortList from "../../components/SortList/SortList";
import FilterTagList from "../../components/FilterTagList/FilterTagList";
import ProductsView from "../../components/ProductsView/ProductsView";
import MobileFilterAndSort from "../../components/LeftSidear/MobileSidebar/MobileFilterAndSort";
import MobileCompareProducts from "../../components/LeftSidear/MobileSidebar/MobileCompareProducts";
import BreadcrumbsApp from "../../components/BreadcrumbsApp/BreadcrumbsApp";
import TitleOfCategory from "../../components/TitleOfCategory/TitleOfCategory";
import FadeTextBlock from "../../components/FadeTextBlock/FadeTextBlock";
import { fetchFiltersData } from "../../store/actionCreator/filters.actionCreator";
import { selectFilters } from "../../store/selectors/filters.selector";
import { deleteError } from "../../store/slices/filters.slice";

const Category = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categories = searchParams.get("categories");
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchFiltersData(`?categories=${categories}`));
  }, [categories, dispatch]);

  if (isLoading) {
    return (
      <Box sx={{ margin: "40px" }} display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  const redirect = () => {
    dispatch(deleteError());
    return <Navigate to="/error" />;
  };

  return (
    <Box sx={{ margin: "10px auto", maxWidth: "1400px" }}>
      {error ? (
        redirect()
      ) : (
        <>
          <BreadcrumbsApp />
          <TitleOfCategory />
          <Box sx={{ display: "flex" }}>
            <LeftSidebar />
            <Container>
              <MobileFilterAndSort />
              <SortList />
              <FilterTagList />
              <ProductsView />
              <FadeTextBlock />
              <MobileCompareProducts />
            </Container>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Category;
