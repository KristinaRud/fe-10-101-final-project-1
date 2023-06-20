import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MiniCart-item.module.scss";
import { deleteProductFromCart } from "../../../store/actionCreator/shoppingCart.actionCreator";
import { deleteCartItem } from "../../../store/slices/shoppingCart.slice";
import { selectCustomers } from "../../../store/selectors/customers.selector";

const MiniCartItem = ({ title, url, count, id }) => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector(selectCustomers);
  const handleDeleteItem = async (id) => {
    if (isLogin) {
      await dispatch(deleteProductFromCart(id));
    } else {
      dispatch(deleteCartItem(id));
    }
  };

  return (
    <>
      <div className={styles["card-wrapper"]}>
        <Typography
          component="p"
          fontSize={18}
          className={styles["card-wrapper__counter"]}
        >
          {count}
          <span>x</span>
        </Typography>
        <img className={styles["card-wrapper__img"]} src={url} alt="link" />
        <Typography
          component="p"
          fontSize={13}
          className={styles["card-wrapper__title"]}
        >
          {title.slice(0, 40)}...
        </Typography>
        <div className={styles["card-wrapper__icons-wrapper"]}>
          <CancelOutlinedIcon onClick={() => handleDeleteItem(id)} />
        </div>
      </div>
    </>
  );
};

MiniCartItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default MiniCartItem;
