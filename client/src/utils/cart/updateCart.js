import { structureDataFromLS } from "./structureData";

const updateShoppingCart = (action) => async (dispatch) => {
  await dispatch(action(structureDataFromLS()));
};

export { updateShoppingCart };
