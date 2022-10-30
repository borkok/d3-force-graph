import {MARVEL_API_PRIVATE_KEY, MARVEL_API_PUBLIC_KEY} from './apikey';
import md5 from 'crypto-js/md5';

export const getMarvelUrl = () => {
    const timestamp = Date.now();
    const md5hash = md5('' + timestamp + MARVEL_API_PRIVATE_KEY + MARVEL_API_PUBLIC_KEY);
    return "https://gateway.marvel.com:443/v1/public/comics?offset=0&limit=100" +
        "&apikey=" + MARVEL_API_PUBLIC_KEY +
        "&ts=" + timestamp +
        "&hash=" + md5hash;
}