import {loadMarvelComics} from './loadMarvel';
import axios from 'axios';
import * as marvel from "../../converters/marvel/convert-marvel";
import {LOADING_START, LOAD, LOADING_STOP} from "../../actions";

jest.mock('axios');
marvel.convert = jest.fn(a => a);

describe('test downloading marvel comics', () => {
    it('should fetch and convert', async () => {
        axios.get.mockImplementationOnce(() => Promise.resolve("data"));
        const dispatch = jest.fn();
        await loadMarvelComics(dispatch);
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).nthCalledWith(1, {type: LOADING_START});
        expect(dispatch).nthCalledWith(2, {type: LOAD, payload: "data"});
    });

    it('should stop spinner on failure', async () => {
        axios.get.mockImplementationOnce(() => Promise.reject("data"));
        const dispatch = jest.fn();
        await loadMarvelComics(dispatch);
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).nthCalledWith(1, {type: LOADING_START});
        expect(dispatch).nthCalledWith(2, {type: LOADING_STOP});
    });
});