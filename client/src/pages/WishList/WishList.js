import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import styles from "./WishList.module.scss";
import { selectWishList } from "../../store/selectors/wishList.selector";
import ProductCard from "../../components/ProductCard/ProductCard";
import BreadcrumbsApp from "../../components/BreadcrumbsApp/BreadcrumbsApp";

const WishList = () => {
  const { itemsWishList } = useSelector(selectWishList);

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
              rating={el.rating}
              oldPrice={el.oldPrice}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default WishList;
