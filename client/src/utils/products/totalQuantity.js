export const totalQuantity = (cart) => {
  return cart.reduce((acc, curr) => {
    return acc + curr.cartQuantity;
  }, 0);
};
