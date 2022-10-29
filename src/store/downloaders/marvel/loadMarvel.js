import {convert as convertMarvel} from "../../converters/marvel/convert-marvel";
import {MARVEL_API_PRIVATE_KEY, MARVEL_API_PUBLIC_KEY} from './apikey';
import md5 from 'crypto-js/md5';
import {download} from "../utils/common";

export const loadMarvelComics = async (dispatch) => {

    const timestamp = Date.now();
    const md5hash = md5('' + timestamp + MARVEL_API_PRIVATE_KEY + MARVEL_API_PUBLIC_KEY);
    const marvelUrl = "https://gateway.marvel.com:443/v1/public/comics?offset=0&limit=100" +
        "&apikey=" + MARVEL_API_PUBLIC_KEY +
        "&ts=" + timestamp +
        "&hash=" + md5hash;

    await download(dispatch, marvelUrl, convertMarvel);
};