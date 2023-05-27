import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const ItemsPageInfo = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const perPage = query.get("perPage");
  const startPage = query.get("startPage");
  const pageItemsEnd = perPage * startPage;
  const pageItemsStart = pageItemsEnd - perPage + 1;
  const data = []; // продукти

  return (
    <Typography
      variant="h6"
      component="div"
      color="text.secondary"
      fontSize="13px"
      fontWeight={400}
    >
      Items {`${pageItemsStart}-${pageItemsEnd}`} of {data.length}
    </Typography>
  );
};

export default ItemsPageInfo;
