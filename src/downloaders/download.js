import { LOAD, LOADING_START, LOADING_STOP } from "../store/actions";
import axios from "axios";
import { convert } from "../converters/convert";

export const download = async (dispatch, url, config) => {
  dispatch({ type: LOADING_START });
  try {
    const result = await axios.get(url);
    dispatch({ type: LOAD, payload: convert(result, config) });
  } catch (error) {
    console.error(error, "URL = " + url);
    dispatch({ type: LOADING_STOP });
  }
};
