import {LOAD, LOADING_START, LOADING_STOP} from "../store/actions";
import {download} from "./download";
import * as axios from "axios";

jest.mock("axios");

const dispatch = jest.fn();
const convert = a => a;

describe('test downloading events', () => {
    it('should fetch and convert', async () => {
        axios.get.mockImplementation(() => Promise.resolve("data"));

        await download(dispatch, "mock url", convert);
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).nthCalledWith(1, {type: LOADING_START});
        expect(dispatch).nthCalledWith(2, {type: LOAD, payload: "data"});
    });

    it('should stop spinner on failure', async () => {
        axios.get.mockImplementation(() => Promise.reject("data"));

        await download(dispatch, "mock url", convert);
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).nthCalledWith(1, {type: LOADING_START});
        expect(dispatch).nthCalledWith(2, {type: LOADING_STOP});
    });
});