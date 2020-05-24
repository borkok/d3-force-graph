import {LOAD, NEW_CHARGE} from "./actions";
import * as sources from '../data/sources';
import {initialState} from "./initialState";
import {loadMiserables} from "./downloaders/miserables/loadMiserables";
import {loadMarvelComics} from "./downloaders/marvel/loadMarvel";
import {loadGotEvents} from "./downloaders/got/loadGot";

export const load = (dispatch, from) => {
    switch (from) {
        case sources.LES_MISERABLES:
            loadMiserables(dispatch);
            break;
        case sources.MARVEL:
            loadMarvelComics(dispatch);
            break;
        case sources.GOT:
            loadGotEvents(dispatch);
            break;
        default:
            dispatch({type: LOAD, payload: initialState});
    }
};

export const changeCharge = (dispatch, charge) => {
    dispatch({type: NEW_CHARGE, payload: charge});
};