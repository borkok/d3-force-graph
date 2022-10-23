import {LOAD, LOADING_START, LOADING_STOP} from "../../actions";
import {convert as convertMarvel} from "../../converters/marvel/convert-marvel";
import axios from "axios";
import {MARVEL_API_PRIVATE_KEY, MARVEL_API_PUBLIC_KEY} from './apikey';
import md5 from 'crypto-js/md5';

export const loadMarvelComics = async (dispatch) => {

    const timestamp = Date.now();
    const md5hash = md5('' + timestamp + MARVEL_API_PRIVATE_KEY + MARVEL_API_PUBLIC_KEY);
    const marvelUrl = "https://gateway.marvel.com:443/v1/public/comics?offset=0&limit=100" +
        "&apikey=" + MARVEL_API_PUBLIC_KEY +
        "&ts=" + timestamp +
        "&hash=" + md5hash;

    dispatch({type: LOADING_START});
    try {
        const result = await axios.get(marvelUrl);
        dispatch({type: LOAD, payload: convertMarvel(result)});
    } catch (error) {
        console.error(error, "URL = " + marvelUrl);
        dispatch({type: LOADING_STOP});
    }
};