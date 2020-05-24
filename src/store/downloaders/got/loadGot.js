import {LOAD, LOADING_START, LOADING_STOP} from "../../actions";
import {convert as convertGot} from "../../converters/got/convert-got";
import axios from "axios";

export const loadGotEvents = async (dispatch) => {
    const gotEventsUrl = "https://api.got.show/api/show/events";

    dispatch({type: LOADING_START});
    try {
        dispatch({type: LOAD, payload: convertGot(await axios.get(gotEventsUrl))});
    } catch (error) {
        console.error(error, "URL = " + gotEventsUrl);
        dispatch({type: LOADING_STOP});
    }
};