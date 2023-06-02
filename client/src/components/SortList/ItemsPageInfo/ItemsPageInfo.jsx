import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProducts } from "../../../store/slices/products.slice";
import s from "./ItemsPageInfo.module.scss";

const ItemsPageInfo = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const perPage = query.get("perPage");
  const startPage = query.get("startPage");
  const pageItemsEnd = perPage * startPage;
  const pageItemsStart = pageItemsEnd - perPage + 1;
  const data = useSelector(selectProducts);

  return (
    <div className={s.wrapper}>
      {Object.keys(data).length > 0 && (
        <Typography
          variant="h6"
          component="div"
          color="text.secondary"
          fontWeight={400}
        >
          Items{" "}
          {`${pageItemsStart}-${
            pageItemsEnd < data.productsQuantity
              ? pageItemsEnd
              : data.productsQuantity
          }`}{" "}
          of {data.productsQuantity}
        </Typography>
      )}
    </div>
  );
};

export default ItemsPageInfo;
