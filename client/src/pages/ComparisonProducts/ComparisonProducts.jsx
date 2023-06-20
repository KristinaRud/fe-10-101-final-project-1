import { Box, Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ComparisonTable from "../../components/ComparisonTable/ComparisonTable";
import ComparisonTabs from "./CompaisonTabs/ComparisonTabs";
import BreadcrumbsApp from "../../components/BreadcrumbsApp/BreadcrumbsApp";
import { selectComparison } from "../../store/selectors/comparison.selector";
import s from "../../components/TitleOfCategory/TitleOfCategory.module.scss";
import ComparisonToggleBtn from "./ComparisonToggleBtn/ComparisonToggleBtn";

const ComparisonProducts = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { comparison } = useSelector(selectComparison);

  useEffect(() => {
    if (Object.keys(comparison).length > 0) {
      if (!Object.keys(comparison?.products)[activeTab]) {
        setActiveTab(0);
      }
    }
  }, [activeTab, comparison]);

  return (
    <Container>
      <BreadcrumbsApp />
      <Typography variant="h4" className={s.title} gutterBottom>
        Comparison Products
      </Typography>
      {Object.keys(comparison).length > 0 &&
      Object.keys(comparison?.products).length > 0 ? (
        <>
          <Box
            display="flex"
            mt={2}
            alignItems="center"
            justifyContent="space-around"
            gap="10px"
            flexWrap={{ xs: "wrap", sm: "nowrap" }}
          >
            <ComparisonTabs setActiveTab={setActiveTab} activeTab={activeTab} />
            <ComparisonToggleBtn />
          </Box>
          <ComparisonTable
            category={
              Object.keys(comparison.products)[activeTab] ||
              Object.keys(comparison.products)[0]
            }
          />
        </>
      ) : (
        <Typography variant="h6" gutterBottom>
          No products for comparison
        </Typography>
      )}
    </Container>
  );
};

export default ComparisonProducts;
