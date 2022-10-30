import {LOAD, NEW_CHARGE} from "./actions";
import {MISERABLES, sources} from './sources';
import {initialState} from "./initialState";
import {download} from "../downloaders/download";
import miserables from "./data/miserables.json";

export const load = (dispatch, from) => {
    let selectedSource = sources.filter(source_ => source_.id === from);
    if (!selectedSource.length) {
        dispatch({type: LOAD, payload: initialState});
    } else {
        selectedSource = selectedSource[0];
        if (selectedSource.url === MISERABLES) {
            dispatch({type: LOAD, payload: miserables});
        } else {
            download(dispatch, selectedSource.url, selectedSource.config);
        }
    }
};

export const changeCharge = (dispatch, charge) => {
    dispatch({type: NEW_CHARGE, payload: charge});
};