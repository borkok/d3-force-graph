import * as actionTypes from "./actions";
import { initialState } from "./initialState";

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case actionTypes.NEW_CHARGE:
      return { ...oldState, charge: action.payload };
    case actionTypes.LOAD:
      return { ...oldState, loading: false, ...action.payload };
    case actionTypes.LOADING_START:
      return { ...oldState, loading: true };
    case actionTypes.LOADING_STOP:
      return { ...oldState, loading: false };
    default:
      return oldState;
  }
};

export default reducer;
