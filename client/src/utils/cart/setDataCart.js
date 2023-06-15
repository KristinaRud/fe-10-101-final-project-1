import { createShoppingCart } from "../../store/actionCreator/shoppingCart.actionCreator";

const SetDataCart = (data, isLogin, actionCart) => async (dispatch) => {
  if (isLogin) {
    await dispatch(
      createShoppingCart(JSON.parse(localStorage.getItem("shoppingCart"))),
    );
    localStorage.removeItem("shoppingCart");
    await dispatch(actionCart(data));
  } else {
    localStorage.setItem("shoppingCart", JSON.stringify(data));
  }
};

export default SetDataCart;
