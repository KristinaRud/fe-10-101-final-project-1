import { setItems } from "../../store/slices/shoppingCart.slice";
import { fetchShoppingCart } from "../../store/actionCreator/shoppingCart.actionCreator";

const GetDataCart = (isLogin) => async (dispatch) => {
  if (!isLogin) {
    const carts = localStorage.getItem("shoppingCart");
    if (carts) {
      await dispatch(setItems(JSON.parse(carts)));
    }
  } else {
    await dispatch(fetchShoppingCart());
  }
};

export default GetDataCart;
