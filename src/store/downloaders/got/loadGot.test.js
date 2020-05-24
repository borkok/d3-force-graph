import {loadGotEvents} from './loadGot';
import axios from 'axios';
import * as got from "../../converters/got/convert-got";
import {LOADING_START, LOAD, LOADING_STOP} from "../../actions";

jest.mock('axios');
got.convert = jest.fn(a => a);

describe('test downloading game of thrones events', () => {
    it('should fetch and convert', async () => {
        axios.get.mockImplementationOnce(() => Promise.resolve("data"));
        const dispatch = jest.fn();
        await loadGotEvents(dispatch);
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).nthCalledWith(1, {type: LOADING_START});
        expect(dispatch).nthCalledWith(2, {type: LOAD, payload: "data"});
    });

    it('should stop spinner on failure', async () => {
        axios.get.mockImplementationOnce(() => Promise.reject("data"));
        const dispatch = jest.fn();
        await loadGotEvents(dispatch);
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).nthCalledWith(1, {type: LOADING_START});
        expect(dispatch).nthCalledWith(2, {type: LOADING_STOP});
    });
});