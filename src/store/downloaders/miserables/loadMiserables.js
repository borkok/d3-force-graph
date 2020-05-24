import miserables from '../../../data/miserables.json';
import {LOAD} from "../../actions";

export const loadMiserables = dispatch => {
    dispatch({type: LOAD, payload: miserables});
}