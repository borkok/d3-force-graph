import {combinations} from "./combinations";

describe('should produce 2-element combinations', () => {
    it('for 0 length array', () => {
        expect(combinations([])).toEqual([]);
    });
    it('for 1 length array', () => {
        expect(combinations(["A"])).toEqual([]);
    });
    it('for 2 length array', () => {
        expect(combinations(["B", "A"])).toEqual([{source:"A", target:"B"}]);
    });
    it('for 4 length array', () => {
        expect(combinations(["B", "A", "D", "C"])).toEqual([
            {source:"A", target:"B"},
            {source:"A", target:"C"},
            {source:"A", target:"D"},
            {source:"B", target:"C"},
            {source:"B", target:"D"},
            {source:"C", target:"D"}
        ]);
    });
});