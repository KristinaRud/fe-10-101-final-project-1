import { editProductFromCart } from "../../store/actionCreator/shoppingCart.actionCreator";
import { addToCart } from "../../store/slices/shoppingCart.slice";
import {
  updateProductToWishList,
  deleteProductFromWishList,
} from "../../store/actionCreator/wishList.actionCreator";
import { addToWishList } from "../../store/slices/wishList.slice";

const handleAddToCart = (data, isLogin) => async (dispatch) => {
  if (isLogin) {
    await dispatch(editProductFromCart(data.id));
  } else {
    dispatch(addToCart(data));
  }
};

const handleAddToWishList =
  (data, storeWishList, isLogin) => async (dispatch) => {
    if (isLogin) {
      const index = storeWishList.findIndex((el) => el.id === data.id);
      if (index === -1) {
        await dispatch(updateProductToWishList(data.id));
      } else {
        await dispatch(deleteProductFromWishList(data.id));
      }
    } else {
      dispatch(addToWishList(data));
    }
  };

export { handleAddToWishList };
export default handleAddToCart;
