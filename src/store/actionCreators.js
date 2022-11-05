import {LOAD, NEW_CHARGE} from "./actions";
import {MISERABLES} from './sources';
import {initialState} from "./initialState";
import {download} from "../downloaders/download";
import miserables from "./data/miserables.json";

export const load = (dispatch, selectedSource) => {
    if (selectedSource === undefined) {
        dispatch({type: LOAD, payload: initialState});
    } else {
        if (selectedSource.url === MISERABLES) {
            dispatch({type: LOAD, payload: miserables});
        } else {
            download(dispatch, selectedSource.url, {
                episodesPath: selectedSource.episodesPath,
                episodeCharactersPath: selectedSource.episodeCharactersPath,
                episodeCategoryPath: selectedSource.episodeCategoryPath
            });
        }
    }
};

export const changeCharge = (dispatch, charge) => {
    dispatch({type: NEW_CHARGE, payload: charge});
};