import { editProductFromCart } from "../../store/actionCreator/shoppingCart.actionCreator";
import { addToCart } from "../../store/slices/shoppingCart.slice";

const handleAddToCart = (data, isLogin) => async (dispatch) => {
  if (isLogin) {
    await dispatch(editProductFromCart(data.id));
  } else {
    dispatch(addToCart(data));
  }
};
export default handleAddToCart;
