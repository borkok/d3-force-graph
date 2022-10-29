import {LOAD, LOADING_START, LOADING_STOP} from "../../actions";
import axios from "axios";

export const download = async (dispatch, url, convert) => {
    dispatch({type: LOADING_START});
    try {
        const result = await axios.get(url);
        dispatch({type: LOAD, payload: convert(result)});
    } catch (error) {
        console.error(error, "URL = " + url);
        dispatch({type: LOADING_STOP});
    }
};