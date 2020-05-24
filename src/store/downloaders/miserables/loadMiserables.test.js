import {LOAD} from "../../actions";
import {loadMiserables} from "./loadMiserables";

describe('test loading miserables characters', () => {
    it('should load', () => {
        const dispatch = jest.fn();
        loadMiserables(dispatch);
        expect(dispatch).toHaveBeenCalledWith({type: LOAD, payload: expect.anything()});
    });
});