import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { IconCompare } from "../../assets/images/products";
import {
  addComparisonProduct,
  removeComparisonProduct,
} from "../../store/actionCreator/comparison.actionCreator";
import { selectCustomers } from "../../store/selectors/customers.selector";
import { selectComparison } from "../../store/selectors/comparison.selector";
import styles from "../ComparisonTable/ComparisonHeader/ComparisonHeader.module.scss";

const IconComparisonProduct = ({
  id,
  categories,
  setOpenSnackbar,
  setStatus,
  setText,
  setError,
}) => {
  const { isLogin } = useSelector(selectCustomers);
  const { comparison, operationSuccess } = useSelector(selectComparison);
  const [isInComparison, setIsInComparison] = useState(false);
  const dispatch = useDispatch();

  const handleClickCompare = () => {
    if (isLogin) {
      setIsInComparison(!isInComparison);
      if (isInComparison) {
        dispatch(removeComparisonProduct(id));
      } else {
        dispatch(addComparisonProduct(id));
      }
      if (operationSuccess) {
        setOpenSnackbar(true);
        setStatus("success");
        setText("Operation success!");
      } else {
        setOpenSnackbar(true);
        setStatus("error");
        setError("Operation failed!");
      }
    } else {
      setOpenSnackbar(true);
      setStatus("error");
      setError("Please, log in to add product to comparison");
    }
  };

  useEffect(() => {
    if (Object.keys(comparison).length > 0) {
      const allProductsComparison = comparison?.products;
      const categoriesComparison = Object.keys(allProductsComparison);
      if (categoriesComparison.length > 0) {
        categoriesComparison.forEach((category) => {
          if (category.toLowerCase() === categories.toLowerCase()) {
            const productsComparison = allProductsComparison[category];
            const isAddedComparison = productsComparison.some(
              (el) => el._id === id,
            );
            if (isAddedComparison) {
              setIsInComparison(true);
            } else {
              setIsInComparison(false);
            }
          }
        });
      }
    }
  }, [comparison, categories, id]);

  return (
    <Button
      sx={{
        "&:hover": { backgroundColor: "rgb(1 86 255 / 20%)" },
      }}
      onClick={handleClickCompare}
    >
      <IconCompare className={isInComparison ? cx(styles.green) : ""} />
    </Button>
  );
};

IconComparisonProduct.propTypes = {
  id: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
  setOpenSnackbar: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  setText: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default IconComparisonProduct;
