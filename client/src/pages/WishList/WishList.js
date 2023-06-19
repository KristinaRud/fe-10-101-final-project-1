import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styles from "./WishList.module.scss";
import { selectWishList } from "../../store/selectors/wishList.selector";
import ProductCard from "../../components/ProductCard/ProductCard";
import BreadcrumbsApp from "../../components/BreadcrumbsApp/BreadcrumbsApp";
import { setItems } from "../../store/slices/shoppingCart.slice";
import { selectCustomers } from "../../store/selectors/customers.selector";
import { fetchWishList } from "../../store/actionCreator/wishList.actionCreator";

const WishList = () => {
  const dispatch = useDispatch();
  const { itemsWishList } = useSelector(selectWishList);
  const { isLogin } = useSelector(selectCustomers);

  useEffect(() => {
    if (isLogin) {
      dispatch(fetchWishList());
    } else {
      dispatch(setItems(JSON.parse(localStorage.getItem("wishList"))));
    }
  }, [isLogin, dispatch]);

  return (
    <Box
      sx={{
        margin: "10px auto",
        maxWidth: "1400px",
        padding: { xs: "0 15px", sm: "0 15px", xlg: "0" },
      }}
    >
      <BreadcrumbsApp />
      <h1 className={styles.title}>My Wish List</h1>
      <ul className={styles["list-wishlist"]}>
        {itemsWishList.length === 0 && "You have not a Wish List yet."}
        {itemsWishList?.map((el) => (
          <li key={el.id}>
            <ProductCard
              id={el.id}
              image={el.image}
              alt={el.alt}
              description={el.description}
              currentPrice={el.currentPrice}
              itemNo={el.itemNo}
              categories={el.categories}
              available={el.available}
              rating={Number(el.rating)}
              oldPrice={el.oldPrice}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default WishList;
