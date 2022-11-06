import React from "react";
import RelationVisualizer from "./RelationVisualizer";
import renderConnected from "../../test/utils/renderConnected";

jest.mock("./useWindowDimensions", () => ({
    __esModule: true,
    default: () => ({height: 123, width: 987})
}));

describe('relation visualizer component test', () => {

    it('should have dimensions from window', () => {
        const utils = renderConnected(<RelationVisualizer margin="100"/>, {});
        const svg = utils.getByTestId('svg-canvas');
        expect(svg).toHaveAttribute("height", "23");
        expect(svg).toHaveAttribute("width", "887");
    });

    it('should show spinner if loading', () => {
        const utils = renderConnected(<RelationVisualizer/>, {initial: {loading: true}});
        const svg = utils.queryByTestId('svg-canvas');
        const spinner = utils.getByTestId('spinner');
        expect(svg).toBeNull();
        expect(spinner).toBeTruthy();
    });

    it('should pass nodes and links and charge to graph', () => {
        const utils = renderConnected(<RelationVisualizer/>, {
            initial: {
                "charge": -300,
                "nodes": [{id: "Node A"}, {id: "Node B"}],
                "links": [{source: "Node A", target: "Node B"}]
            }
        });

        const svg = utils.getByTestId('svg-canvas');
        const circles = utils.getAllByTestId('circle');
        const lines = utils.getAllByTestId('line');

        expect(svg).toHaveAttribute("strength", "-300");
        expect(circles).toHaveLength(2);
        expect(lines).toHaveLength(1);
    });

});
