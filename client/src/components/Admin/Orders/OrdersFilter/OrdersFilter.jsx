import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import DateRange from "./DateRange/DateRange";
import { selectProducts } from "../../../../store/selectors/products.selector";
import { allCategoriesSelector } from "../../../../store/selectors/catalog.selector";
import AutocompleteMultiple from "./AutocompleteMultiple/AutocompleteMultiple";

const OrdersFilter = () => {
  const { products } = useSelector(selectProducts);
  const categories = useSelector(allCategoriesSelector);

  return (
    <Box display={"flex"} gap={2} padding={2} alignItems={"flex-end"}>
      <DateRange />
      {!!products && (
        <AutocompleteMultiple
          options={products}
          label={"Select products"}
          optionLabel={"itemNo"}
          keySearch={"itemNo"}
        />
      )}
      {categories.length > 0 && (
        <AutocompleteMultiple
          options={categories}
          label={"Select categories"}
          optionLabel={"id"}
          keySearch={"categories"}
        />
      )}
    </Box>
  );
};

export default OrdersFilter;
