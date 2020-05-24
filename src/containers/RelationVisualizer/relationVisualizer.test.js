import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from "react";
import {RelationVisualizer} from "./RelationVisualizer";
import Graph from "../../components/graph";
import Spinner from "../../components/spinner/spinner";

// React 16 Enzyme adapter
configure({ adapter: new Adapter() });

jest.mock("../../utils/useWindowDimensions", () =>({
    __esModule: true,
    default: jest.fn(() => {return {height: 123, width: 987}})
}));

describe('relation visualizer component test', () => {
    let testee;

    beforeEach(() => {
        testee = shallow(<RelationVisualizer/>);
    });

    it('should have dimensions from window', () => {
        testee.setProps({margin: 100});
        expect(testee.find(Graph).props()).toMatchObject({height: 23, width: 887});
    });

    it('should show spinner if loading', () => {
        testee.setProps({loading: true});
        expect(testee.contains(<Graph/>)).toBeFalsy();
        expect(testee.contains(<Spinner/>)).toBeTruthy();
    });

    it('should pass data and charge value to graph', () => {
        testee.setProps({data: {obj: "some"}, charge: -200});
        expect(testee.find(Graph).props()).toMatchObject({data: {obj: "some"}, charge: -200});
    });
});
