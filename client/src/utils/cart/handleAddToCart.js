import { editProductFromCart } from "../../store/actionCreator/shoppingCart.actionCreator";
import { addToCart } from "../../store/slices/shoppingCart.slice";
import { updateProductToWishList } from "../../store/actionCreator/wishList.actionCreator";
import { addToWishList } from "../../store/slices/wishList.slice";

const handleAddToCart = (data, isLogin) => async (dispatch) => {
  if (isLogin) {
    await dispatch(editProductFromCart(data.id));
  } else {
    dispatch(addToCart(data));
  }
};

const handleAddToWishList = (data, isLogin) => async (dispatch) => {
  if (isLogin) {
    await dispatch(updateProductToWishList(data.id));
  } else {
    dispatch(addToWishList(data));
  }
};

export { handleAddToWishList };
export default handleAddToCart;
