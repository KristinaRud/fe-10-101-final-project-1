const updateShoppingCart = (action, structureData) => async (dispatch) => {
  await dispatch(action(structureData()));
};

export { updateShoppingCart };
